// Screenshot a page in headless Chrome via the DevTools Protocol (no npm deps; Node >= 22 global WebSocket).
// Emulates a phone viewport, optionally captures the full page, and prints page console errors + window.__INVITE_ERRORS__.
// Exit code 1 when the page logged errors (useful as a smoke test).
//
// Usage:
//   node tools/screenshot_page.mjs <url> <out.png> [--width 412] [--height 915] [--full] [--wait 4000] [--scroll "#gift"] [--clip 3000]
//                                  [--click "#openBtn"] [--after-click 2500]   # click first (e.g. open the cover), then capture
// Chrome path: CHROME_PATH env or the default Windows install location.
import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i > -1 ? args[i + 1] : def; };
const flag = (name) => args.includes('--' + name);
const VALUED = ['--width', '--height', '--wait', '--scroll', '--clip', '--click', '--after-click'];
const [url, out] = args.filter((a, i) => !a.startsWith('--') && !VALUED.includes(args[i - 1]));
if (!url || !out) { console.error('usage: screenshot_page.mjs <url> <out.png> [--width 412] [--height 915] [--full] [--wait 4000] [--scroll "#id"] [--clip px]'); process.exit(2); }
const width = +opt('width', 412), height = +opt('height', 915), wait = +opt('wait', 4000), clipMax = +opt('clip', 6000);
const chrome = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const port = 9300 + Math.floor(Math.random() * 500);

const proc = spawn(chrome, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--hide-scrollbars',
  `--remote-debugging-port=${port}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'cdp-'))}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let ws, seq = 0;
const pending = new Map(), logs = [];
const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
  const id = ++seq; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params, sessionId }));
});

try {
  let target;
  for (let i = 0; i < 50 && !target; i++) {
    await sleep(200);
    try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); } catch { /* not up yet */ }
  }
  if (!target) throw new Error('chrome did not start');
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  ws.addEventListener('message', (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.reject(new Error(m.error.message)) : p.resolve(m.result); }
    if (m.method === 'Runtime.exceptionThrown') logs.push('EXCEPTION ' + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text));
    if (m.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(m.params.type)) logs.push(m.params.type.toUpperCase() + ' ' + m.params.args.map((a) => a.value ?? a.description ?? '').join(' '));
  });
  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 700 });
  if (width < 700) await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  await send('Page.navigate', { url });
  await sleep(wait);
  const click = opt('click');
  if (click) {
    // real click on the element (e.g. the cover's open button), then let the opening animation run
    const r = await send('Runtime.evaluate', { expression: `(() => { const el = document.querySelector(${JSON.stringify(click)}); if (!el) return null; el.click(); return true; })()`, returnByValue: true });
    if (!r.result.value) logs.push('ERROR click target not found: ' + click);
    await sleep(+opt('after-click', 2500));
  }
  const scroll = opt('scroll');
  if (scroll) {
    // scroll twice: lazy images and GSAP pin spacers shift layout after the first jump
    for (const ms of [1200, 800]) { await send('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(scroll)})?.scrollIntoView(); true` }); await sleep(ms); }
  }
  const errs = await send('Runtime.evaluate', { expression: 'JSON.stringify(window.__INVITE_ERRORS__ || [])', returnByValue: true });
  JSON.parse(errs.result.value || '[]').forEach((e) => logs.push('CORE ' + e));
  let params = { format: 'png' };
  if (flag('full')) {
    const m = await send('Page.getLayoutMetrics');
    const h = Math.min(Math.ceil(m.cssContentSize.height), clipMax);
    params = { format: 'png', captureBeyondViewport: true, clip: { x: 0, y: 0, width, height: h, scale: 1 } };
  }
  const shot = await send('Page.captureScreenshot', params);
  writeFileSync(out, Buffer.from(shot.data, 'base64'));
  console.log('saved', out);
  logs.forEach((l) => console.log(l));
  process.exitCode = logs.some((l) => /^(EXCEPTION|ERROR|CORE)/.test(l)) ? 1 : 0;
} catch (e) {
  console.error('screenshot failed:', e.message); process.exitCode = 1;
} finally {
  try { ws?.close(); } catch { /* ignore */ }
  proc.kill();
}

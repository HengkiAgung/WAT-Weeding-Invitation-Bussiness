// Capture a live invitation demo for design research (competitor analysis — we describe, never copy code/assets).
// Headless Chrome via DevTools Protocol (no npm deps; Node >= 22 global WebSocket).
//
// Output in <outDir>:
//   cover.png            phone viewport before opening (loader gone)
//   desktop.png          1440x900 first screen (split layouts etc.)
//   f00.png … fNN.png    phone frames after clicking "open", one per ~0.85 viewport of scroll (lets scroll animations fire)
//   sheet-1.png …        contact sheets (frames at 50 %, 5 per row, max 20 per sheet) — the files to look at
//   meta.json            sections (order, heights, headings, animation attrs), fonts, colour tokens, libraries,
//                        animation stats, image/audio/video inventory, opening behaviour
//
// Usage:
//   node tools/capture_demo.mjs <url> <outDir> [--width 412] [--height 915] [--wait 7000] [--step-wait 3000] [--max-frames 40]
//                               [--open "#openInvTrigger"] [--no-desktop] [--gesture]
//   --gesture  scroll with a synthesized touch-drag gesture instead of setting scrollTop (for templates whose
//              scroll animations only react to real user scrolling, e.g. GSAP ScrollTrigger on window)
// Chrome path: CHROME_PATH env or the default Windows install location.
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i > -1 ? args[i + 1] : def; };
const flag = (name) => args.includes('--' + name);
const VALUED = ['--width', '--height', '--wait', '--step-wait', '--max-frames', '--open'];
const [url, outArg] = args.filter((a, i) => !a.startsWith('--') && !VALUED.includes(args[i - 1]));
if (!url || !outArg) { console.error('usage: capture_demo.mjs <url> <outDir> [--width 412] [--height 915] [--wait 7000] [--step-wait 3000] [--max-frames 40] [--open sel] [--no-desktop]'); process.exit(2); }
const out = resolve(outArg); mkdirSync(out, { recursive: true });
const width = +opt('width', 412), height = +opt('height', 915), wait = +opt('wait', 7000), stepWait = +opt('step-wait', 3000), maxFrames = +opt('max-frames', 40);
const openSel = opt('open', '');
const chrome = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const port = 9300 + Math.floor(Math.random() * 500);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---- page-side extraction (serialised into Runtime.evaluate) ----
const EXTRACT = String.raw`(() => {
  const trim = (s, n = 90) => (s || '').replace(/\s+/g, ' ').trim().slice(0, n);
  const vis = (el) => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none'; };
  const count = (arr) => arr.reduce((m, k) => (k && (m[k] = (m[k] || 0) + 1), m), {});
  const top = (obj, n = 15) => Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, n);
  const urlOf = (bg) => [...(bg || '').matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((m) => m[1]);
  const shortUrl = (u) => { try { const x = new URL(u, location.href); return x.pathname.split('/').slice(-3).join('/'); } catch { return u.slice(0, 80); } };

  // sections
  let secEls = [...document.querySelectorAll('[data-section-order]')];
  if (secEls.length < 3) secEls = [...document.querySelectorAll('section')].filter((s) => !s.parentElement.closest('section'));
  const sections = secEls.map((s) => {
    const r = s.getBoundingClientRect(); const cs = getComputedStyle(s);
    const aos = count([...s.querySelectorAll('[data-aos]')].map((e) => e.getAttribute('data-aos')));
    const heads = [...s.querySelectorAll('h1,h2,h3,h4,.title,[class*=title]')].filter(vis).map((h) => trim(h.textContent, 60)).filter(Boolean);
    return {
      key: s.getAttribute('data-section-order') || s.id || String(s.className).split(' ')[0],
      cls: trim(String(s.className), 60), h: Math.round(r.height), visible: vis(s),
      bg: [cs.backgroundColor, ...urlOf(cs.backgroundImage).map(shortUrl)].filter((v) => v && v !== 'rgba(0, 0, 0, 0)'),
      headings: [...new Set(heads)].slice(0, 4), aos,
      imgs: s.querySelectorAll('img').length, text: trim(s.innerText, 160),
    };
  });

  // fonts: computed family per role + @font-face families actually loaded
  const famOf = (sel) => count([...document.querySelectorAll(sel)].filter(vis).filter((e) => trim(e.textContent)).map((e) => getComputedStyle(e).fontFamily.split(',')[0].replace(/["']/g, '').trim()));
  const loaded = [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family.replace(/["']/g, '') + ' ' + f.weight + (f.style !== 'normal' ? ' ' + f.style : '')))];
  const fonts = { headings: top(famOf('h1,h2,h3,h4,[class*=title],[class*=name]'), 8), body: top(famOf('p,span,li,td,label'), 8), buttons: top(famOf('button,a[class*=btn],.btn'), 5), loaded: loaded.slice(0, 30) };

  // colour tokens
  const rootCs = getComputedStyle(document.documentElement), bodyCs = getComputedStyle(document.body);
  const vars = {};
  for (const sh of document.styleSheets) { let rules; try { rules = sh.cssRules; } catch { continue; }
    for (const r of rules) if (r.selectorText && /^(:root|html|body)$/.test(r.selectorText.trim())) for (const p of r.style) if (p.startsWith('--')) { const v = (rootCs.getPropertyValue(p) || bodyCs.getPropertyValue(p)).trim(); if (/^(#|rgb|hsl)/.test(v) || /(color|bg|background|primary|secondary|tertiary|btn|text)/i.test(p)) vars[p] = v.slice(0, 60); } }
  const all = [...document.querySelectorAll('body *')].filter(vis).slice(0, 4000);
  const colorFreq = top(count(all.filter((e) => trim(e.textContent, 5) && e.children.length === 0).map((e) => getComputedStyle(e).color)), 10);
  const bgFreq = top(count(all.map((e) => getComputedStyle(e).backgroundColor).filter((c) => c !== 'rgba(0, 0, 0, 0)')), 10);

  // libraries / animation engines
  const g = (k) => typeof window[k] !== 'undefined';
  const libs = { jquery: g('jQuery'), gsap: g('gsap'), ScrollTrigger: g('ScrollTrigger'), AOS: g('AOS'), tsParticles: g('tsParticles'), particlesJS: g('particlesJS'),
    Swiper: g('Swiper'), slick: !!(window.jQuery && jQuery.fn && jQuery.fn.slick), lottie: g('lottie') || g('bodymovin') || !!document.querySelector('lottie-player,dotlottie-player'),
    lightGallery: g('lightGallery'), GLightbox: g('GLightbox'), videojs: g('videojs'), html2canvas: g('html2canvas'), anime: g('anime'), Flip: g('Flip'), Draggable: g('Draggable'), three: g('THREE') };
  const scripts = [...document.scripts].map((s) => s.src).filter(Boolean).map(shortUrl);
  const aosAll = count([...document.querySelectorAll('[data-aos]')].map((e) => e.getAttribute('data-aos')));
  const aosDur = count([...document.querySelectorAll('[data-aos-duration]')].map((e) => e.getAttribute('data-aos-duration')));
  const cssAnims = count(document.getAnimations ? document.getAnimations().map((a) => a.animationName || (a.constructor && a.constructor.name)) : []);
  const keyframes = []; for (const sh of document.styleSheets) { let rules; try { rules = sh.cssRules; } catch { continue; } for (const r of rules) if (r.type === 7) keyframes.push(r.name); }
  const canvases = [...document.querySelectorAll('canvas')].map((c) => ({ id: c.id, cls: trim(String(c.className), 40), w: c.width, h: c.height, parent: trim(String(c.parentElement && (c.parentElement.id || c.parentElement.className)), 40) }));

  // media inventory
  const imgs = [...document.querySelectorAll('img')].map((i) => ({ src: shortUrl(i.currentSrc || i.src || i.getAttribute('data-src') || ''), w: i.naturalWidth, h: i.naturalHeight, cls: trim(String(i.className), 40) })).filter((i) => i.src);
  const bgImgs = [...new Set(all.flatMap((e) => urlOf(getComputedStyle(e).backgroundImage)).map(shortUrl))];
  const ext = (s) => (s.match(/\.(png|jpe?g|webp|gif|svg|avif|json)(\?|$)/i) || [, 'other'])[1].toLowerCase();
  const media = {
    imgCount: imgs.length, byExt: count(imgs.map((i) => ext(i.src)).concat(bgImgs.map(ext))),
    images: imgs.slice(0, 120), backgrounds: bgImgs.slice(0, 60),
    audio: [...document.querySelectorAll('audio,audio source')].map((a) => shortUrl(a.currentSrc || a.src || '')).filter(Boolean),
    video: [...document.querySelectorAll('video,video source')].map((v) => shortUrl(v.currentSrc || v.src || '')).filter(Boolean),
    iframes: [...document.querySelectorAll('iframe')].map((f) => shortUrl(f.src || '')).filter(Boolean),
  };
  const icons = { fontAwesome: !!document.querySelector('[class*="fa-"]'), phosphor: !!document.querySelector('[class*="ph-"]'), svgInline: document.querySelectorAll('svg').length };
  const doc = { title: document.title, lang: document.documentElement.lang, height: Math.max(document.documentElement.scrollHeight, ...[...document.querySelectorAll('*')].slice(0, 3000).map((e) => e.scrollHeight)), metaDesc: (document.querySelector('meta[name=description]') || {}).content || '' };
  return JSON.stringify({ doc, sections, fonts, colors: { vars, text: colorFreq, backgrounds: bgFreq }, libs, scripts, animation: { aos: aosAll, aosDuration: aosDur, cssRunning: cssAnims, keyframes: [...new Set(keyframes)].slice(0, 80), canvases }, media, icons });
})()`;

const FIND_SCROLLER = String.raw`(() => {
  const se = document.scrollingElement || document.documentElement;
  const c = [se, ...document.querySelectorAll('body *')].filter((e) => { if (e === se) return se.scrollHeight > innerHeight + 50; const cs = getComputedStyle(e); return /(auto|scroll)/.test(cs.overflowY) && e.scrollHeight > e.clientHeight + 50 && e.clientHeight > innerHeight * 0.5; });
  c.sort((a, b) => b.scrollHeight - a.scrollHeight);
  window.__scroller = c[0] || se;
  const s = window.__scroller; return JSON.stringify({ el: s === se ? 'window' : (s.id || String(s.className).slice(0, 50)), scrollHeight: s.scrollHeight, clientHeight: s === se ? innerHeight : s.clientHeight });
})()`;
const SCROLL_STEP = (px) => `(() => { const s = window.__scroller, se = document.scrollingElement || document.documentElement; const before = s === se ? scrollY : s.scrollTop;
  if (s === se) window.scrollBy(0, ${px}); else s.scrollTop += ${px};
  if (s === se && scrollY === before && before + innerHeight < se.scrollHeight - 5) {
    // page still scroll-locked (cover handler not fired): unlock for capture only
    for (const el of [document.documentElement, document.body]) { el.style.setProperty('overflow', 'auto', 'important'); el.style.setProperty('height', 'auto', 'important'); }
    window.scrollBy(0, ${px});
  }
  const after = s === se ? scrollY : s.scrollTop; return JSON.stringify({ before, after, max: s.scrollHeight - (s === se ? innerHeight : s.clientHeight) }); })()`;
const FIND_OPEN = (sel) => String.raw`(() => {
  const shown = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== 'hidden'; };
  let el = ${JSON.stringify(sel)} ? document.querySelector(${JSON.stringify(sel)}) : null;
  const cands = [...document.querySelectorAll('button,a,[role=button],[class*=btn],[class*=button],[class*=open]')].filter(shown)
    .filter((e) => (e.textContent || '').trim().length < 40 && !/link|map|stream|filter|kalender|calendar/i.test(e.textContent || ''));
  for (const re of [/buka undangan|open (the )?invitation|lihat undangan|click to open|tap to open|let'?s go|step inside|start the journey|enter/i, /\b(buka|open|mulai|masuk)\b/i]) { if (!el) el = cands.find((e) => re.test(e.textContent || '')); }
  if (!el) for (const s of ['#openInvTrigger', '.open-trigger', '#openBtn', '[class*=open-btn]', '[class*=btn-open]']) { el = [...document.querySelectorAll(s)].find(shown); if (el) break; }
  if (!el) return JSON.stringify({ found: false });
  el.scrollIntoView({ block: 'center' }); window.__openEl = el;
  const r = el.getBoundingClientRect();
  return JSON.stringify({ found: true, how: el.id ? '#' + el.id : el.tagName.toLowerCase() + '.' + String(el.className).split(' ')[0], text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40), x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) });
})()`;
const proc = spawn(chrome, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', '--mute-audio', '--autoplay-policy=no-user-gesture-required',
  `--remote-debugging-port=${port}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'cdp-'))}`, 'about:blank'], { stdio: 'ignore' });

let ws, seq = 0;
const pending = new Map(), logs = [];
const send = (method, params = {}) => new Promise((res, rej) => { const id = ++seq; pending.set(id, { res, rej }); ws.send(JSON.stringify({ id, method, params })); });
const evalJson = async (expr) => { const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text); return JSON.parse(r.result.value); };
const shot = async (file, params = {}) => { const s = await send('Page.captureScreenshot', { format: 'png', ...params }); writeFileSync(join(out, file), Buffer.from(s.data, 'base64')); return file; };
const device = async (w, h) => { await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 700 }); await send('Emulation.setTouchEmulationEnabled', { enabled: w < 700 }); };

try {
  let target;
  for (let i = 0; i < 50 && !target; i++) { await sleep(200); try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); } catch { /* not up */ } }
  if (!target) throw new Error('chrome did not start');
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  ws.addEventListener('message', (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.rej(new Error(m.error.message)) : p.res(m.result); }
    if (m.method === 'Runtime.exceptionThrown') logs.push('EXCEPTION ' + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text).slice(0, 200));
  });
  await send('Runtime.enable'); await send('Page.enable');
  const meta = { url, capturedAt: new Date().toISOString(), viewport: { width, height } };

  // 1) desktop first screen
  if (!flag('no-desktop')) {
    await device(1440, 900); await send('Page.navigate', { url }); await sleep(wait);
    await shot('desktop.png');
  }
  // 2) phone: cover
  await device(width, height); await send('Page.navigate', { url }); await sleep(wait);
  await shot('cover.png');
  meta.cover = await evalJson(EXTRACT);

  // 3) open
  meta.open = await evalJson(FIND_OPEN(openSel));
  if (meta.open.found) {
    // real pointer click first (handlers bound to touch/mouse events), DOM click() as fallback
    const before = await evalJson('JSON.stringify(document.elementFromPoint(' + meta.open.x + ',' + meta.open.y + ') === window.__openEl || window.__openEl.contains(document.elementFromPoint(' + meta.open.x + ',' + meta.open.y + ')))');
    const x = Math.min(Math.max(meta.open.x, 1), width - 1), y = Math.min(Math.max(meta.open.y, 1), height - 1);
    await send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
    await send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await sleep(1500);
    const still = await evalJson('JSON.stringify(!!window.__openEl && window.__openEl.getBoundingClientRect().width > 0 && getComputedStyle(window.__openEl).visibility !== "hidden" && getComputedStyle(window.__openEl).opacity !== "0")');
    if (still) { await evalJson('JSON.stringify(window.__openEl.click() || 1)'); meta.open.fallbackClick = true; }
    await sleep(2500);
    // last resort (capture only): if the cover still sits on top, hide its full-screen container and unlock scrolling
    meta.open.forcedHide = await evalJson(String.raw`(() => {
      const el = window.__openEl; if (!el || !el.isConnected) return false;
      const r = el.getBoundingClientRect(); if (!(r.width > 0) || getComputedStyle(el).visibility === 'hidden' || getComputedStyle(el).opacity === '0') return false;
      if (document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2) !== el && !el.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2))) return false;
      let n = el; while (n && n !== document.body) { const b = n.getBoundingClientRect(), cs = getComputedStyle(n);
        if ((cs.position === 'fixed' || cs.position === 'absolute') && b.width >= innerWidth * 0.9 && b.height >= innerHeight * 0.9) { n.style.setProperty('display', 'none', 'important'); break; } n = n.parentElement; }
      if (!n || n === document.body) return false;
      for (const x of [document.documentElement, document.body]) x.style.setProperty('overflow', 'auto', 'important');
      return true; })()`);
    meta.open.hitTest = before;
  }
  await sleep(3500);
  await shot('opened.png');

  // 4) scroll through, one frame per step
  meta.scroller = await evalJson(FIND_SCROLLER);
  const frames = []; const step = Math.round(height * 0.85);
  for (let i = 0; i < maxFrames; i++) {
    frames.push(await shot(`f${String(i).padStart(2, '0')}.png`));
    let s;
    if (flag('gesture')) {
      const pos = () => evalJson('JSON.stringify((() => { const s = window.__scroller, se = document.scrollingElement || document.documentElement; return s === se ? scrollY : s.scrollTop; })())');
      const before = await pos();
      await send('Input.synthesizeScrollGesture', { x: Math.round(width / 2), y: Math.round(height * 0.7), yDistance: -step, speed: 1600, gestureSourceType: 'touch' });
      s = { before, after: await pos() };
    } else s = await evalJson(SCROLL_STEP(step));
    if (s.after <= s.before) break;
    await sleep(stepWait);
  }
  // fallback for pages that refuse to scroll at all (scroll-lock libraries): reveal every AOS element and slice a
  // beyond-viewport capture into frames instead
  const docH = await evalJson('JSON.stringify(document.documentElement.scrollHeight)');
  if (frames.length === 1 && docH > height * 1.5) {
    meta.clipMode = true;
    await evalJson(`JSON.stringify((() => { document.querySelectorAll('[data-aos]').forEach((e) => e.classList.add('aos-animate')); return 1; })())`);
    await sleep(2500);
    for (let y = step, i = 1; y < docH && i < maxFrames; y += step, i++) {
      frames.push(await shot(`f${String(i).padStart(2, '0')}.png`, { captureBeyondViewport: true, clip: { x: 0, y, width, height: Math.min(height, docH - y), scale: 1 } }));
    }
  }
  meta.frames = frames.length;
  meta.full = await evalJson(EXTRACT);
  meta.logs = logs.slice(0, 30);

  // 5) contact sheets (render a local HTML grid in the same browser)
  const perSheet = 20, sheets = [];
  for (let s = 0; s * perSheet < frames.length; s++) {
    const part = frames.slice(s * perSheet, (s + 1) * perSheet);
    const html = `<!doctype html><meta charset=utf-8><style>body{margin:0;background:#222;font:12px sans-serif;color:#ddd}
      .g{display:grid;grid-template-columns:repeat(5,${width / 2}px);gap:6px;padding:6px}figure{margin:0}img{width:${width / 2}px;display:block}
      figcaption{padding:2px 0}</style><div class=g>${part.map((f) => `<figure><img src="${f}"><figcaption>${f}</figcaption></figure>`).join('')}</div>`;
    const file = join(out, `sheet-${s + 1}.html`); writeFileSync(file, html);
    const rows = Math.ceil(part.length / 5), sw = Math.ceil(5 * (width / 2) + 36), sh = Math.ceil(rows * (height / 2 + 24) + 12);
    await device(sw, sh); await send('Page.navigate', { url: pathToFileURL(file).href }); await sleep(1200);
    sheets.push(await shot(`sheet-${s + 1}.png`));
  }
  meta.sheets = sheets;
  writeFileSync(join(out, 'meta.json'), JSON.stringify(meta, null, 1));
  console.log(`saved ${out}: ${frames.length} frames, ${sheets.length} sheet(s), open=${meta.open.found}${meta.open.fallbackClick ? "(dom)" : ""}${logs.length ? ', ' + logs.length + ' page errors' : ''}`);
} catch (e) {
  console.error('capture failed:', e.message); process.exitCode = 1;
} finally {
  try { ws?.close(); } catch { /* ignore */ }
  proc.kill();
}

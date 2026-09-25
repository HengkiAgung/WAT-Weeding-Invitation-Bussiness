// Build a template package for production: validate → bundle → minify → obfuscate → copyright header → content-hashed files.
//
// Output (disposable, gitignored; the app deploy step in S5/S7 runs this):
//   dist/templates/_core/core.<hash>.js          shared runtime (templates/_core/runtime/core.js)
//   dist/templates/<id>/index.html               markers kept (<!--@HEAD/@VARIANT/@INVITE/@CORE-->), comments stripped
//   dist/templates/<id>/js/<id>.<hash>.js        manifest.scripts bundled + minified + obfuscated
//   dist/templates/<id>/css/<id>.<hash>.css      manifest.styles bundled + minified
//   dist/templates/<id>/variants/<v>.<hash>.css  per variant
//   dist/templates/<id>/assets/**                copied as-is (incl. generated ornament sets)
//   dist/templates/<id>/manifest.json            source manifest + build{version, hash, core, files{path: sha256}}
// tools/render_template.py accepts the dist folder (uses build.core instead of the source runtime).
//
// Usage:
//   node tools/build_template.mjs templates/sekar
//   node tools/build_template.mjs templates/rimbun --no-obfuscate      # debugging a prod-only issue
//   node tools/build_template.mjs --all                                # every templates/<id>/manifest.json
// Options: --out dist/templates  --skip-validate  --no-obfuscate
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transform } from 'esbuild';
import JavaScriptObfuscator from 'javascript-obfuscator';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (n) => args.includes('--' + n);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i > -1 ? args[i + 1] : d; };
const OUT = resolve(ROOT, opt('out', 'dist/templates'));
const OBFUSCATE = !flag('no-obfuscate');
const COPYRIGHT = 'WAT Wedding Invitation';
const LEGAL = `(c) ${COPYRIGHT}. All rights reserved. Licensed per invitation; copying, redistribution or reuse on another domain is prohibited.`;
const MARKER = /^<!--@(HEAD|VARIANT|INVITE|CORE)-->$/;

const sha = (buf) => createHash('sha256').update(buf).digest('hex');
const read = (p) => readFileSync(p, 'utf8');
const header = (name, version, hash) => `/*! ${name} v${version} · build ${hash} · ${LEGAL} */\n`;

async function minifyJs(code) {
  const min = (await transform(code, { loader: 'js', minify: true, target: 'es2017', legalComments: 'none' })).code;
  if (!OBFUSCATE) return min;
  const obf = JavaScriptObfuscator.obfuscate(min, {
    compact: true,
    target: 'browser',
    seed: parseInt(sha(code).slice(0, 8), 16), // reproducible output for identical input
    identifierNamesGenerator: 'hexadecimal',
    renameGlobals: false, // WeddingCore / INVITE / library globals must keep their names
    transformObjectKeys: false, // W.V.* paths are the binding contract
    stringArray: true, stringArrayThreshold: 0.75, stringArrayEncoding: ['base64'], stringArrayRotate: true, stringArrayShuffle: true,
    splitStrings: false, controlFlowFlattening: false, deadCodeInjection: false, // keep runtime cost low on cheap phones
    selfDefending: false, debugProtection: false, disableConsoleOutput: false, unicodeEscapeSequence: false,
    sourceMap: false,
  }).getObfuscatedCode();
  // the obfuscator hoists its string-array helpers (_0x…) to program scope → wrap so they stay out of window
  // (core + template bundles share one page; colliding helper names would break both)
  return `(function(){${obf}\n})();`;
}

async function minifyCss(code) {
  return (await transform(code, { loader: 'css', minify: true, legalComments: 'none' })).code;
}

function minifyHtml(html, name, version, hash) {
  html = html.replace(/<!--([\s\S]*?)-->/g, (m) => (MARKER.test(m) ? m : ''));
  html = html.replace(/[ \t]*\n[ \t\n]*/g, '\n').replace(/[ \t]{2,}/g, ' ');
  return html.replace(/^<!DOCTYPE html>\n?/i, `<!DOCTYPE html>\n<!-- ${name} v${version} · build ${hash} · ${LEGAL} -->\n`);
}

/** Write `content` as `<dir>/<stem>.<hash8>.<ext>`; returns the path relative to the package root. */
function emitHashed(pkgDir, dir, stem, ext, content, files) {
  const h = sha(content).slice(0, 10);
  const rel = `${dir}/${stem}.${h}.${ext}`;
  mkdirSync(join(pkgDir, dir), { recursive: true });
  writeFileSync(join(pkgDir, rel), content);
  files[rel] = sha(content);
  return rel;
}

function validate(tplDir) {
  const r = spawnSync('python', [join(ROOT, 'tools/validate_template.py'), tplDir, '--json'], { encoding: 'utf8' });
  if (r.error) throw new Error('cannot run python: ' + r.error.message);
  let res;
  try { res = JSON.parse(r.stdout); } catch { throw new Error('validator output not JSON:\n' + r.stdout + r.stderr); }
  if (!res.ok) throw new Error(`validation failed for ${tplDir}:\n  ` + res.errors.join('\n  '));
}

async function buildCore() {
  const src = read(join(ROOT, 'templates/_core/runtime/core.js'));
  const code = header('WeddingCore', '1', sha(src).slice(0, 10)) + await minifyJs(src);
  const files = {};
  const rel = emitHashed(OUT, '_core', 'core', 'js', code, files);
  return { rel, files };
}

async function buildTemplate(tplDir, core) {
  const m = JSON.parse(read(join(tplDir, 'manifest.json')));
  if (!flag('skip-validate')) validate(tplDir);
  const pkg = join(OUT, m.id);
  rmSync(pkg, { recursive: true, force: true });
  mkdirSync(pkg, { recursive: true });
  const srcHash = sha(m.scripts.concat(m.styles, [m.entry]).map((f) => read(join(tplDir, f))).join('\n')).slice(0, 10);
  const files = {};

  // JS: bundle manifest.scripts in order (each is a self-contained IIFE)
  const js = m.scripts.map((f) => read(join(tplDir, f))).join(';\n');
  const jsRel = emitHashed(pkg, 'js', m.id, 'js', header(m.name, m.version, srcHash) + await minifyJs(js), files);

  // CSS: bundle manifest.styles (kept under css/ so relative url(../assets/...) still resolves)
  const css = m.styles.map((f) => read(join(tplDir, f))).join('\n');
  const cssRel = emitHashed(pkg, 'css', m.id, 'css', header(m.name, m.version, srcHash) + await minifyCss(css), files);

  const variants = [];
  for (const v of m.variants) {
    const vRel = emitHashed(pkg, 'variants', v.id, 'css', header(`${m.name} · ${v.name}`, m.version, srcHash) + await minifyCss(read(join(tplDir, v.css))), files);
    variants.push({ ...v, css: vRel });
  }

  // assets (ornaments, generated variant sets, images)
  if (existsSync(join(tplDir, 'assets'))) {
    cpSync(join(tplDir, 'assets'), join(pkg, 'assets'), { recursive: true });
    const walk = (d) => readdirSync(d, { withFileTypes: true }).forEach((e) => {
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p); else files[relative(pkg, p).replaceAll('\\', '/')] = sha(readFileSync(p));
    });
    walk(join(pkg, 'assets'));
  }

  // HTML: point at the hashed bundles, drop the per-file tags beyond the first
  let html = read(join(tplDir, m.entry));
  m.styles.forEach((f, i) => { html = html.replace(new RegExp(`<link rel="stylesheet" href="${f.replace(/[.]/g, '\\.')}">\\n?`), i === 0 ? `<link rel="stylesheet" href="${cssRel}">\n` : ''); });
  m.scripts.forEach((f, i) => { html = html.replace(new RegExp(`<script src="${f.replace(/[.]/g, '\\.')}"></script>\\n?`), i === 0 ? `<script src="${jsRel}"></script>\n` : ''); });
  for (const f of [...m.styles, ...m.scripts]) if (html.includes(`"${f}"`)) throw new Error(`${m.entry}: could not rewrite reference to ${f}`);
  html = minifyHtml(html, m.name, m.version, srcHash);
  writeFileSync(join(pkg, 'index.html'), html);
  files['index.html'] = sha(html);

  const out = {
    ...m, entry: 'index.html', styles: [cssRel], scripts: [jsRel], variants,
    build: { version: m.version, hash: srcHash, builtAt: new Date().toISOString(), obfuscated: OBFUSCATE, core: '../' + core.rel, files },
  };
  writeFileSync(join(pkg, 'manifest.json'), JSON.stringify(out, null, 2) + '\n');
  const size = Object.keys(files).filter((f) => /\.(js|css|html)$/.test(f)).map((f) => `${f} ${(readFileSync(join(pkg, f)).length / 1024).toFixed(1)}kB`);
  console.log(`${m.id} v${m.version} → ${relative(ROOT, pkg)}  (${size.join(', ')}, ${Object.keys(files).length} files)`);
}

try {
  const targets = flag('all')
    ? readdirSync(join(ROOT, 'templates'), { withFileTypes: true }).filter((e) => e.isDirectory() && !e.name.startsWith('_') && existsSync(join(ROOT, 'templates', e.name, 'manifest.json'))).map((e) => join(ROOT, 'templates', e.name))
    : args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--out').map((a) => resolve(a));
  if (!targets.length) { console.error('usage: node tools/build_template.mjs <templates/id>... | --all  [--out dist/templates] [--no-obfuscate] [--skip-validate]'); process.exit(2); }
  mkdirSync(OUT, { recursive: true });
  const core = await buildCore();
  console.log(`core → ${relative(ROOT, join(OUT, core.rel))}`);
  for (const t of targets) await buildTemplate(t, core);
} catch (e) {
  console.error('build failed: ' + (e && e.message || e));
  process.exit(1);
}

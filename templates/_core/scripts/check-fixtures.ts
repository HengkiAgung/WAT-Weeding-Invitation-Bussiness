// Validates every fixture against the Zod schema + checks label/preset consistency.
// Run: npm run schema:check   (exit 1 on any failure)
import { readFileSync, readdirSync } from 'node:fs';
import { z } from 'zod';
import { InvitationData, Guest, Runtime, Sections, EVENT_TYPES, RELIGIONS } from '../schema.ts';

const core = new URL('../', import.meta.url);
const read = (p: string) => JSON.parse(readFileSync(new URL(p, core), 'utf8'));
let failed = 0;
const fail = (msg: string) => { failed++; console.error('FAIL', msg); };

for (const f of readdirSync(new URL('fixtures/', core)).filter((f) => f.startsWith('sample-') && f.endsWith('.json'))) {
  const r = InvitationData.safeParse(read('fixtures/' + f));
  if (r.success) console.log('ok  ', f, `(${r.data.events.length} events, lang ${r.data.lang}, ${r.data.religion})`);
  else fail(`${f}\n${z.prettifyError(r.error)}`);
}
const rc = read('fixtures/render-context.json');
for (const [name, schema, val] of [['guest', Guest, rc.guest], ['runtime', Runtime, rc.runtime], ['sections', Sections, rc.sections]] as const) {
  const r = (schema as z.ZodType).safeParse(val);
  if (!r.success) fail(`render-context.${name}\n${z.prettifyError(r.error)}`);
}

const id = read('i18n/id.json'), en = read('i18n/en.json');
for (const k of Object.keys(id)) if (!(k in en)) fail(`label ${k} missing in en.json`);
for (const k of Object.keys(en)) if (!(k in id)) fail(`label ${k} missing in id.json`);
for (const t of EVENT_TYPES) if (!id['event.type.' + t]) fail(`label event.type.${t} missing`);
const reg = read('sections.json');
for (const s of reg.sections) if (!id[s.label]) fail(`section label ${s.label} missing`);

const presets = read('presets/religion.json');
for (const rel of RELIGIONS) {
  const p = presets.religions[rel];
  if (!p) { fail(`preset religion ${rel} missing`); continue; }
  for (const lang of ['id', 'en']) for (const k of ['greeting', 'opening', 'closingText', 'closingGreeting']) if (!p[lang]?.[k]) fail(`preset ${rel}.${lang}.${k} missing`);
  if (p.defaultVerse && !presets.verses[p.defaultVerse]) fail(`preset ${rel}.defaultVerse ${p.defaultVerse} unknown`);
}
console.log(failed ? `\n${failed} failure(s)` : '\nall checks passed');
process.exit(failed ? 1 : 0);

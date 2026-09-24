// Parse + normalize InvitationData JSON (applies Zod defaults). Prints normalized JSON to stdout.
// Exit 1 with readable errors on invalid input. Used by tools/render_template.py.
// Usage: node --experimental-strip-types --no-warnings templates/_core/scripts/parse-data.ts <file.json>
import { readFileSync } from 'node:fs';
import { z } from 'zod';
import { InvitationData } from '../schema.ts';

const file = process.argv[2];
if (!file) { console.error('usage: parse-data.ts <file.json>'); process.exit(2); }
const r = InvitationData.safeParse(JSON.parse(readFileSync(file, 'utf8')));
if (!r.success) { console.error(z.prettifyError(r.error)); process.exit(1); }
process.stdout.write(JSON.stringify(r.data));

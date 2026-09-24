// Writes templates/_core/schema.json (JSON Schema draft 2020-12) from the Zod source of truth.
// Used by tools/validate_template.py to validate fixtures without Node. Run: npm run schema:export
import { writeFileSync } from 'node:fs';
import { z } from 'zod';
import { InvitationData, Guest, Theme, Sections, Runtime } from '../schema.ts';

const out = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $comment: 'GENERATED from templates/_core/schema.ts — do not edit. npm run schema:export',
  $defs: {
    InvitationData: z.toJSONSchema(InvitationData, { io: 'input', unrepresentable: 'any' }),
    Guest: z.toJSONSchema(Guest, { io: 'input', unrepresentable: 'any' }),
    Theme: z.toJSONSchema(Theme, { io: 'input', unrepresentable: 'any' }),
    Sections: z.toJSONSchema(Sections, { io: 'input', unrepresentable: 'any' }),
    Runtime: z.toJSONSchema(Runtime, { io: 'input', unrepresentable: 'any' }),
  },
};
const file = new URL('../schema.json', import.meta.url);
writeFileSync(file, JSON.stringify(out, null, 2) + '\n');
console.log('wrote', file.pathname);

/*!
 * Core invitation data schema — shared by every template, the editor (S6) and the render route (S7).
 * One schema for all templates → a couple can switch template/variant without re-entering data.
 * Copy (section titles, button text, salam, ayat) is NOT stored here; it comes from i18n labels +
 * religion presets. Users override single labels through `copy`.
 * (c) WAT Wedding Invitation. All rights reserved.
 */
import { z } from 'zod';
import registry from './sections.json' with { type: 'json' };

export const LANGS = ['id', 'en'] as const;
export const RELIGIONS = ['islam', 'kristen', 'katolik', 'hindu', 'buddha', 'konghucu', 'umum'] as const;
export const EVENT_TYPES = [
  'akad', 'pemberkatan', 'pawiwahan', 'resepsi', 'siraman', 'midodareni',
  'mappacci', 'ngunduh_mantu', 'sangjit', 'tea_pai', 'lainnya',
] as const;
export const TIMEZONES = ['WIB', 'WITA', 'WIT'] as const;
export const TZ_OFFSET: Record<(typeof TIMEZONES)[number], string> = { WIB: '+07:00', WITA: '+08:00', WIT: '+09:00' };
export const SECTION_IDS = registry.sections.map((s) => s.id) as [string, ...string[]];

/* ---------- primitives ---------- */
const text = (max: number) => z.string().trim().max(max);
const req = (max: number) => z.string().trim().min(1).max(max);

/** Asset reference: R2 object key / template-relative path (no `..`) or https URL. Signed at render time. */
export const AssetRef = z
  .string()
  .trim()
  .min(1)
  .max(500)
  .refine((s) => !s.includes('..') && (/^https:\/\/[^\s"'<>]+$/.test(s) || /^[A-Za-z0-9_\-./]+$/.test(s)), {
    message: 'Asset must be a relative path or https URL',
  });
export const HttpsUrl = z.url({ protocol: /^https$/ }).max(500);
export const IsoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((s) => { const d = new Date(s + 'T00:00:00Z'); return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s; }, { message: 'Invalid date' });
export const Time = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'HH:mm');
export const HexColor = z.string().regex(/^#[0-9a-fA-F]{6}$/);
export const GroupName = z.string().trim().regex(/^[\p{L}\p{N} _-]{1,30}$/u);
export const SectionId = z.enum(SECTION_IDS);

/* ---------- content ---------- */
/** 1..12 = urutan anak ("putra pertama"), or the words bungsu / tunggal. */
export const ChildOrder = z.union([z.number().int().min(1).max(12), z.enum(['bungsu', 'tunggal'])]);

export const Person = z.object({
  fullName: req(80), // with titles, e.g. "dr. Nurul Aisyah, Sp.A"
  nickname: req(30),
  childOrder: ChildOrder.optional(),
  father: text(80).optional(), // name only — "Bapak"/"Mr." prefix comes from labels
  mother: text(80).optional(),
  parentsText: text(200).optional(), // free-text override of the generated parents line
  instagram: z.string().regex(/^[A-Za-z0-9._]{1,30}$/).optional(),
  photo: AssetRef.optional(),
});

export const Event = z.object({
  id: z.string().regex(/^[a-z0-9_-]{1,24}$/).optional(), // runtime assigns ev1.. when absent
  type: z.enum(EVENT_TYPES),
  title: text(60).optional(), // override of the type label
  date: IsoDate,
  timeStart: Time,
  timeEnd: Time.optional(), // absent → "s/d selesai"
  tz: z.enum(TIMEZONES).default('WIB'),
  venue: req(100),
  address: text(250).optional(),
  mapUrl: HttpsUrl.optional(),
  photo: AssetRef.optional(),
  guestGroups: z.array(GroupName).max(10).default([]), // empty = visible to everyone
});

export const GiftAccount = z.object({
  type: z.enum(['bank', 'ewallet']).default('bank'),
  provider: req(40), // BCA, Mandiri, GoPay, DANA …
  number: z.string().trim().regex(/^[0-9 +\-]{4,30}$/),
  holder: req(80),
});

export const StoryItem = z.object({
  date: text(40).optional(), // free text: "2019", "Juni 2021"
  title: req(60),
  text: text(600),
  photo: AssetRef.optional(),
});

export const InvitationData = z.object({
  schemaVersion: z.literal(1).default(1),
  lang: z.enum(LANGS).default('id'),
  religion: z.enum(RELIGIONS).default('umum'),
  photoless: z.boolean().default(false),
  coupleOrder: z.enum(['groom_first', 'bride_first']).default('groom_first'),
  groom: Person,
  bride: Person,
  hashtag: z.string().regex(/^#?[\p{L}\p{N}_]{1,40}$/u).optional(),
  events: z.array(Event).min(1).max(8),

  opening: z.object({ greeting: text(120).optional(), text: text(600).optional() }).prefault({}),
  verse: z
    .object({ preset: z.string().regex(/^[a-z0-9-]{1,40}$/).optional(), text: text(800).optional(), source: text(80).optional() })
    .prefault({}),
  closing: z
    .object({ greeting: text(120).optional(), text: text(600).optional(), familyNames: text(200).optional() })
    .prefault({}),

  story: z.array(StoryItem).max(8).default([]),
  gallery: z.array(AssetRef).max(60).default([]),
  video: z
    .object({
      youtubeId: z.string().regex(/^[A-Za-z0-9_-]{11}$/).optional(),
      src: AssetRef.optional(),
      poster: AssetRef.optional(),
    })
    .refine((v) => v.youtubeId || v.src, { message: 'video needs youtubeId or src' })
    .optional(),
  live: z.object({ platform: text(30).optional(), url: HttpsUrl, schedule: text(80).optional() }).optional(),
  rundown: z.array(z.object({ time: Time, title: req(80) })).max(24).default([]),
  gift: z
    .object({
      accounts: z.array(GiftAccount).max(8).default([]),
      qris: AssetRef.optional(), // couple's own QRIS image — not a payment through us
      address: z.object({ name: req(80), phone: text(30).optional(), text: req(300) }).optional(),
    })
    .optional(),
  rsvp: z
    .object({
      maxPax: z.number().int().min(1).max(20).default(2), // guest.maxPax wins when set
      deadline: IsoDate.optional(),
      askEvents: z.boolean().default(true), // let guest pick which events they attend (when >1 visible)
    })
    .prefault({}),
  inviters: z
    .object({ groom: z.array(req(80)).max(40).default([]), bride: z.array(req(80)).max(40).default([]) })
    .prefault({}),
  igFilter: z.object({ url: HttpsUrl }).optional(),
  dresscode: z.object({ text: text(400).optional(), colors: z.array(HexColor).max(6).default([]) }).optional(),
  protocol: z.object({ text: text(600).optional() }).optional(),
  music: z.object({ src: AssetRef, autoplay: z.boolean().default(true), title: text(80).optional() }).optional(),
  images: z
    .object({
      cover: z.array(AssetRef).max(5).default([]),
      hero: AssetRef.optional(),
      couple: AssetRef.optional(),
      background: AssetRef.optional(),
      closing: AssetRef.optional(),
    })
    .prefault({}),
  /** Per-invitation label overrides, keyed by i18n key (e.g. "gift.title"). */
  copy: z.record(z.string().regex(/^[a-zA-Z0-9_.]{1,60}$/), text(300)).default({}),
});

/* ---------- render context (injected by the server, see _core/README.md) ---------- */
export const Guest = z.object({
  name: req(60),
  code: z.string().regex(/^[A-Za-z0-9]{4,16}$/),
  group: GroupName.optional(),
  maxPax: z.number().int().min(1).max(20).optional(),
  phone: z.string().regex(/^\+?[0-9]{8,15}$/).optional(),
});

export const Theme = z.object({
  variant: z.string().regex(/^[a-z0-9-]{1,30}$/),
  ornamentBase: z.string().max(200).optional(), // e.g. "assets/ornaments/sage/"
  tokens: z.record(z.string().regex(/^--[a-z0-9-]{1,40}$/), z.string().max(60)).default({}),
});

export const Sections = z.partialRecord(SectionId, z.boolean());

export const Runtime = z.object({
  mode: z.enum(['preview', 'demo', 'live']),
  slug: z.string().regex(/^[a-z0-9-]{3,60}$/).optional(),
  endpoint: z.string().max(200).nullable().default(null), // null → RSVP/wishes kept in localStorage
  token: z.string().max(500).optional(), // HMAC render token (S7)
  brand: z.object({ name: req(60), url: HttpsUrl.optional() }).prefault({ name: 'Undangan Digital' }),
});

export type InvitationData = z.infer<typeof InvitationData>;
export type InvitationInput = z.input<typeof InvitationData>;
export type Event = z.infer<typeof Event>;
export type Person = z.infer<typeof Person>;
export type Guest = z.infer<typeof Guest>;
export type Theme = z.infer<typeof Theme>;
export type Sections = z.infer<typeof Sections>;
export type Runtime = z.infer<typeof Runtime>;

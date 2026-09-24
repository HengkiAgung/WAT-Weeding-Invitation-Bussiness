/*!
 * WeddingCore runtime v1 — shared by every invitation template.
 * (c) WAT Wedding Invitation. All rights reserved. Licensed per invitation; copying,
 * redistribution or reuse on another domain is prohibited.
 *
 * Input (injected by the server / tools/render_template.py BEFORE this script):
 *   window.INVITE = { data, theme, sections, guest, runtime, labels, presets, registry, template }
 * Output: window.WeddingCore (W) with W.V = view model. Template scripts run after this file.
 * Contract: templates/_core/README.md. Binding paths: templates/_core/view-model.json.
 */
(function (root) {
  'use strict';

  var ctx = root.INVITE;
  if (!ctx || !ctx.data) { console.error('[core] window.INVITE missing'); return; }

  var doc = root.document;
  var D = ctx.data;
  var RT = ctx.runtime || { mode: 'preview', endpoint: null };
  var THEME = ctx.theme || {};
  var LABELS = ctx.labels || {};
  var PRESETS = ctx.presets || { religions: {}, verses: {} };
  var REGISTRY = ctx.registry || { sections: [] };
  var TPL = ctx.template || { sections: [] };
  var TZ_OFFSET = { WIB: '+07:00', WITA: '+08:00', WIT: '+09:00' };
  var CEREMONY = ['akad', 'pemberkatan', 'pawiwahan'];

  var W = { version: 1, ctx: ctx, errors: [] };
  root.WeddingCore = W;
  root.__INVITE_ERRORS__ = W.errors;

  /* ---------- helpers ---------- */
  var $ = W.$ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = W.$$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var get = W.get = function (o, p) { return String(p).split('.').reduce(function (a, k) { return a == null ? a : a[k]; }, o); };
  var esc = W.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  };
  var safe = W.safe = function (name, fn) {
    try { return fn(); } catch (e) { W.errors.push(name + ': ' + (e && e.message)); console.warn('[core] ' + name + ' failed:', e); }
  };
  var empty = W.empty = function (v) {
    return v == null || v === '' || (Array.isArray(v) && v.length === 0) ||
      (typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 0);
  };
  /** Only https/http, root/relative paths, data:image. Blocks javascript: and friends. */
  var safeUrl = W.safeUrl = function (u) {
    u = String(u == null ? '' : u).trim();
    if (!u) return '';
    if (/^(https?:)?\/\//i.test(u) || /^data:image\//i.test(u)) return u;
    if (/^[a-z][a-z0-9+.-]*:/i.test(u)) return '';
    return u;
  };
  var cssUrl = W.cssUrl = function (u) {
    u = safeUrl(u);
    return u ? 'url("' + u.replace(/["\\\n\r]/g, function (c) { return '\\' + c.charCodeAt(0).toString(16) + ' '; }) + '")' : '';
  };
  var interp = function (s, vars) {
    return String(s).replace(/\{(\w+)\}/g, function (m, k) { return vars && vars[k] != null ? vars[k] : m; });
  };

  /** Label lookup: per-invitation override (data.copy) → template/core labels → key. */
  var t = W.t = function (key, vars) {
    var s = (D.copy && D.copy[key] != null) ? D.copy[key] : (LABELS[key] != null ? LABELS[key] : key);
    return interp(s, vars);
  };

  /* ---------- dates (event wall-clock time in its own zone, independent of viewer TZ) ---------- */
  var locale = LABELS.$locale || (D.lang === 'en' ? 'en-GB' : 'id-ID');
  var ymd = function (iso) { var p = String(iso).split('-'); return Date.UTC(+p[0], +p[1] - 1, +p[2]); };
  var fmtDate = W.fmtDate = function (iso, opts) {
    try { return new Intl.DateTimeFormat(locale, Object.assign({ timeZone: 'UTC' }, opts)).format(ymd(iso)); } catch (e) { return iso; }
  };
  var dateLong = function (iso) { return fmtDate(iso, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }); };
  var dateShort = function (iso) { var p = String(iso).split('-'); return p[2] + '.' + p[1] + '.' + p[0]; };
  var fmtTime = W.fmtTime = function (hhmm) { return D.lang === 'id' ? String(hhmm).replace(':', '.') : String(hhmm); };
  var instant = W.instant = function (date, time, tz) { return date + 'T' + (time || '00:00') + ':00' + (TZ_OFFSET[tz] || TZ_OFFSET.WIB); };

  /* ---------- guest ---------- */
  var guest = null;
  if (ctx.guest && ctx.guest.name) {
    guest = { name: ctx.guest.name, code: ctx.guest.code || null, group: ctx.guest.group || null, maxPax: ctx.guest.maxPax || null };
  } else {
    var q = safe('guest param', function () { return (new URLSearchParams(root.location.search).get('to') || '').replace(/\s+/g, ' ').trim().slice(0, 40); });
    if (q) guest = { name: q, code: null, group: null, maxPax: null };
  }

  /* ---------- view model ---------- */
  var V = W.V = {};
  var rp = (PRESETS.religions && PRESETS.religions[D.religion]) || (PRESETS.religions && PRESETS.religions.umum) || {};
  var rpl = rp[D.lang] || rp.id || {};

  function person(p, role) {
    p = p || {};
    var order = p.childOrder != null ? t('order.' + p.childOrder) : null;
    var childLine = order ? t(role === 'groom' ? 'couple.sonOf' : 'couple.daughterOf', { order: order }) : t('couple.childOf');
    var parents = p.father && p.mother ? t('couple.parents', { father: p.father, mother: p.mother })
      : p.father ? t('couple.father', { father: p.father }) : p.mother ? t('couple.mother', { mother: p.mother }) : '';
    return {
      role: role,
      label: t(role === 'groom' ? 'couple.groom' : 'couple.bride'),
      fullName: p.fullName || p.nickname || '',
      nickname: p.nickname || (p.fullName || '').split(' ')[0],
      childLine: p.parentsText ? '' : (parents ? childLine : ''),
      parentsNames: p.parentsText ? '' : parents,
      parentsLine: p.parentsText || (parents ? childLine + ' ' + parents : ''),
      instagram: p.instagram ? '@' + p.instagram : '',
      instagramUrl: p.instagram ? 'https://instagram.com/' + encodeURIComponent(p.instagram) : '',
      photo: D.photoless ? '' : (p.photo || '')
    };
  }
  V.groom = person(D.groom, 'groom');
  V.bride = person(D.bride, 'bride');
  var pair = D.coupleOrder === 'bride_first' ? [V.bride, V.groom] : [V.groom, V.bride];
  V.couple = {
    first: pair[0], second: pair[1],
    names: pair[0].nickname + ' ' + t('common.and') + ' ' + pair[1].nickname,
    fullNames: pair[0].fullName + ' ' + t('common.and') + ' ' + pair[1].fullName,
    monogram: (pair[0].nickname.charAt(0) + pair[1].nickname.charAt(0)).toUpperCase()
  };
  V.lang = D.lang;
  V.religion = D.religion;
  V.photoless = !!D.photoless;
  V.hashtag = D.hashtag ? (D.hashtag.charAt(0) === '#' ? D.hashtag : '#' + D.hashtag) : '';

  V.guest = { has: !!guest, name: guest ? guest.name : t('cover.guestFallback'), code: guest && guest.code || '', group: guest && guest.group || '' };

  var allEvents = (D.events || []).map(function (e, i) {
    return {
      id: e.id || 'ev' + (i + 1),
      type: e.type,
      title: e.title || t('event.type.' + e.type),
      date: e.date,
      dateLong: dateLong(e.date),
      dateShort: dateShort(e.date),
      time: e.timeEnd
        ? t('events.time', { start: fmtTime(e.timeStart), end: fmtTime(e.timeEnd), tz: e.tz || 'WIB' })
        : t('events.timeOpen', { start: fmtTime(e.timeStart), tz: e.tz || 'WIB' }),
      tz: e.tz || 'WIB',
      startISO: instant(e.date, e.timeStart, e.tz),
      endISO: instant(e.date, e.timeEnd || e.timeStart, e.tz),
      venue: e.venue || '',
      address: e.address || '',
      mapUrl: safeUrl(e.mapUrl || ''),
      photo: D.photoless ? '' : (e.photo || ''),
      guestGroups: e.guestGroups || []
    };
  });
  /** Restricted events (guestGroups set) are only shown to guests in one of those groups. */
  V.events = allEvents.filter(function (e) { return !e.guestGroups.length || (guest && guest.group && e.guestGroups.indexOf(guest.group) > -1); });
  if (!V.events.length) V.events = allEvents.slice(0, 1);
  V.mainEvent = V.events.filter(function (e) { return CEREMONY.indexOf(e.type) > -1; })[0] || V.events[0];
  var me = V.mainEvent;
  V.date = {
    iso: me.date, startISO: me.startISO, endISO: me.endISO,
    long: me.dateLong, short: me.dateShort,
    weekday: fmtDate(me.date, { weekday: 'long' }), day: fmtDate(me.date, { day: '2-digit' }),
    month: fmtDate(me.date, { month: 'long' }), year: fmtDate(me.date, { year: 'numeric' })
  };

  var verse = (function () {
    var v = D.verse || {};
    if (v.text) return { text: v.text, source: v.source || '' };
    var id = v.preset || rp.defaultVerse;
    var pv = id && PRESETS.verses && PRESETS.verses[id];
    var pl = pv && (pv[D.lang] || pv.id);
    return pl ? { text: pl.text, source: pl.source } : { text: '', source: '' };
  })();
  V.verse = verse;
  V.opening = { greeting: get(D, 'opening.greeting') || rpl.greeting || '', text: get(D, 'opening.text') || rpl.opening || '' };
  V.closing = {
    greeting: get(D, 'closing.greeting') || rpl.closingGreeting || '',
    text: get(D, 'closing.text') || rpl.closingText || '',
    signature: t('closing.signature'),
    familyNames: get(D, 'closing.familyNames') || ''
  };

  var img = D.images || {};
  var cover = D.photoless ? [] : (img.cover || []).slice();
  V.images = {
    cover: cover,
    hero: D.photoless ? '' : (img.hero || cover[0] || img.couple || ''),
    couple: D.photoless ? '' : (img.couple || img.hero || cover[0] || ''),
    background: D.photoless ? '' : (img.background || img.hero || cover[0] || ''),
    closing: D.photoless ? '' : (img.closing || img.background || img.hero || '')
  };
  V.story = D.photoless ? (D.story || []).map(function (s) { return Object.assign({}, s, { photo: '' }); }) : (D.story || []);
  V.gallery = D.photoless ? [] : (D.gallery || []);
  V.video = D.video ? {
    youtubeId: D.video.youtubeId || '', src: D.video.src || '',
    poster: D.video.poster || (D.video.youtubeId ? 'https://img.youtube.com/vi/' + D.video.youtubeId + '/hqdefault.jpg' : V.images.background)
  } : null;
  V.rundown = (D.rundown || []).map(function (r) { return { time: fmtTime(r.time), title: r.title }; });
  V.live = D.live ? { url: safeUrl(D.live.url), platform: D.live.platform || '', schedule: D.live.schedule || '' } : { url: '', platform: '', schedule: '' };
  V.igFilter = { url: D.igFilter ? safeUrl(D.igFilter.url) : '' };
  V.dresscode = { text: get(D, 'dresscode.text') || '', colors: get(D, 'dresscode.colors') || [] };
  V.protocol = { text: get(D, 'protocol.text') || t('protocol.text') };
  V.gift = {
    accounts: get(D, 'gift.accounts') || [],
    qris: get(D, 'gift.qris') || '',
    address: get(D, 'gift.address') || null
  };
  V.inviters = { groom: get(D, 'inviters.groom') || [], bride: get(D, 'inviters.bride') || [] };
  V.music = D.music ? { src: D.music.src, autoplay: D.music.autoplay !== false, title: D.music.title || '' } : { src: '', autoplay: false, title: '' };
  V.rsvp = {
    maxPax: (guest && guest.maxPax) || get(D, 'rsvp.maxPax') || 2,
    deadline: get(D, 'rsvp.deadline') ? t('rsvp.deadline', { date: dateLong(D.rsvp.deadline) }) : '',
    askEvents: get(D, 'rsvp.askEvents') !== false && V.events.length > 1
  };
  V.meta = { title: t('meta.title', { names: V.couple.names }), description: t('meta.description', { names: V.couple.names, date: V.date.long }) };
  var brand = RT.brand || { name: 'Undangan Digital' };
  V.credit = { text: t('footer.credit', { brand: brand.name }), url: safeUrl(brand.url || '') };

  /* ---------- sections ---------- */
  var regById = {};
  (REGISTRY.sections || []).forEach(function (s) { regById[s.id] = s; });
  var tplById = {};
  (TPL.sections || []).forEach(function (s) { tplById[typeof s === 'string' ? s : s.id] = typeof s === 'string' ? {} : s; });

  function ruleMet(r) {
    switch (r) {
      case '@verse': return !!V.verse.text;
      case '@video': return !!(V.video && (V.video.youtubeId || V.video.src));
      case '@gift': return !!(V.gift.accounts.length || V.gift.qris || V.gift.address);
      case '@inviters': return !!(V.inviters.groom.length || V.inviters.bride.length);
      case '@guest': return !!(guest && guest.code);
      case '@dresscode': return !!(V.dresscode.text || V.dresscode.colors.length);
      default: return !empty(get(D, r));
    }
  }
  var onMap = {};
  (REGISTRY.sections || []).forEach(function (s) {
    var inTpl = !!tplById[s.id];
    var on;
    if (!inTpl) on = false;
    else if (s.status === 'core') on = true;
    else if (ctx.sections && ctx.sections[s.id] != null) on = !!ctx.sections[s.id];
    else on = tplById[s.id].default != null ? !!tplById[s.id].default : !!s.default;
    if (on && s.hideWhenPhotoless && D.photoless) on = false;
    if (on && (s.requires || []).some(function (r) { return !ruleMet(r); })) on = false;
    onMap[s.id] = on;
  });
  if (V.gallery.length === 0) onMap.gallery = false;
  W.isOn = function (id) { return !!onMap[id]; };
  W.sectionsOn = onMap;
  /** Run a template renderer only when its section is on; failures never break the page. */
  W.section = function (id, fn) { if (onMap[id]) safe('section ' + id, fn); };

  /* ---------- DOM application ---------- */
  function applyTheme() {
    var html = doc.documentElement;
    html.lang = D.lang || 'id';
    if (THEME.variant) html.setAttribute('data-variant', THEME.variant);
    Object.keys(THEME.tokens || {}).forEach(function (k) { if (/^--[a-z0-9-]+$/.test(k)) html.style.setProperty(k, String(THEME.tokens[k])); });
    html.classList.toggle('is-photoless', !!D.photoless);
    html.classList.add('mode-' + (RT.mode || 'preview'));
    doc.title = V.meta.title;
    var md = $('meta[name="description"]'); if (md) md.setAttribute('content', V.meta.description);
  }

  function applySections() {
    $$('[data-section]').forEach(function (el) { if (!onMap[el.getAttribute('data-section')]) el.parentNode.removeChild(el); });
    if (D.photoless) $$('[data-photo]').forEach(function (el) { el.parentNode.removeChild(el); });
  }

  W.bind = function (scope) {
    var r = scope || doc;
    $$('[data-if]', r).forEach(function (el) {
      var p = el.getAttribute('data-if'), neg = p.charAt(0) === '!', v = get(V, neg ? p.slice(1) : p);
      if (neg ? !empty(v) && v !== false : empty(v) || v === false) el.parentNode.removeChild(el);
    });
    $$('[data-t]', r).forEach(function (el) { var v = get(V, el.getAttribute('data-t')); el.textContent = v == null ? '' : v; });
    $$('[data-l]', r).forEach(function (el) { el.textContent = t(el.getAttribute('data-l')); });
    $$('[data-l-attr]', r).forEach(function (el) {
      el.getAttribute('data-l-attr').split(';').forEach(function (pair) {
        var kv = pair.split(':'); if (kv.length === 2) el.setAttribute(kv[0].trim(), t(kv[1].trim()));
      });
    });
    $$('[data-href]', r).forEach(function (el) { var u = safeUrl(get(V, el.getAttribute('data-href'))); if (u) el.setAttribute('href', u); else el.removeAttribute('href'); });
    $$('[data-src]', r).forEach(function (el) { var u = safeUrl(get(V, el.getAttribute('data-src'))); if (u) el.setAttribute('src', u); });
    $$('[data-bg]', r).forEach(function (el) { var u = get(V, el.getAttribute('data-bg')); if (u) el.style.backgroundImage = cssUrl(u); });
    var ornBase = THEME.ornamentBase || 'assets/svg/';
    $$('img[data-orn]', r).forEach(function (el) { el.setAttribute('src', ornBase + el.getAttribute('data-orn')); });
  };

  /* ---------- UI utilities ---------- */
  var toastTimer;
  W.toast = function (msg) {
    var el = $('#toast');
    if (!el) { el = doc.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite'); doc.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2200);
  };
  W.copy = function (text, okMsg) {
    var done = function () { W.toast(okMsg || t('common.copied')); };
    var fallback = function () {
      var ta = doc.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;opacity:0';
      doc.body.appendChild(ta); ta.select();
      try { doc.execCommand('copy'); done(); } catch (e) { W.toast(t('common.copyFailed')); }
      doc.body.removeChild(ta);
    };
    if (navigator.clipboard && root.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  };
  W.download = function (blobOrUrl, filename) {
    var url = typeof blobOrUrl === 'string' ? blobOrUrl : URL.createObjectURL(blobOrUrl);
    var a = doc.createElement('a'); a.href = url; a.download = filename; doc.body.appendChild(a); a.click(); doc.body.removeChild(a);
    if (typeof blobOrUrl !== 'string') setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  };
  W.fileSlug = (V.groom.nickname + '-' + V.bride.nickname).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'undangan';

  /** Countdown to the main event. cb({days,hours,minutes,seconds,done}) every second. */
  W.countdown = function (cb) {
    var target = new Date(V.date.startISO).getTime();
    var pad = function (n) { return n < 10 ? '0' + n : String(n); };
    function tick() {
      var d = Math.max(0, target - Date.now());
      var days = Math.floor(d / 864e5); d -= days * 864e5;
      var hrs = Math.floor(d / 36e5); d -= hrs * 36e5;
      var min = Math.floor(d / 6e4); d -= min * 6e4;
      cb({ days: pad(days), hours: pad(hrs), minutes: pad(min), seconds: pad(Math.floor(d / 1e3)), done: target <= Date.now() });
    }
    tick(); return setInterval(tick, 1000);
  };

  /* ---------- calendar ---------- */
  var icsDate = function (iso) { return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); };
  var icsEsc = function (s) { return String(s).replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n'); };
  var calTitle = function () { return t('countdown.calendarTitle', { names: V.couple.names }); };
  var calPlace = function () { return [me.venue, me.address].filter(Boolean).join(', '); };
  W.calendar = {
    ics: function () {
      var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//WAT Wedding Invitation//ID', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
        'UID:' + icsDate(me.startISO) + '-' + W.fileSlug + '@invitation', 'DTSTAMP:' + icsDate(new Date().toISOString()),
        'DTSTART:' + icsDate(me.startISO), 'DTEND:' + icsDate(me.endISO),
        'SUMMARY:' + icsEsc(calTitle()), 'LOCATION:' + icsEsc(calPlace()), 'DESCRIPTION:' + icsEsc(V.hashtag || V.meta.description),
        'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
      W.download(new Blob([ics], { type: 'text/calendar;charset=utf-8' }), 'undangan-' + W.fileSlug + '.ics');
      W.toast(t('countdown.icsDone'));
    },
    gcalUrl: function () {
      return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(calTitle()) +
        '&dates=' + icsDate(me.startISO) + '/' + icsDate(me.endISO) +
        '&details=' + encodeURIComponent(V.hashtag || V.meta.description) + '&location=' + encodeURIComponent(calPlace());
    }
  };

  /* ---------- storage + API (RSVP / wishes) ---------- */
  var storeKey = 'inv:' + (RT.slug || W.fileSlug) + ':';
  var store = W.store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(storeKey + k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(storeKey + k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  function call(method, path, body) {
    var headers = { 'Accept': 'application/json' };
    if (body) headers['Content-Type'] = 'application/json';
    if (RT.token) headers['X-Render-Token'] = RT.token;
    return fetch(RT.endpoint.replace(/\/$/, '') + path, { method: method, headers: headers, body: body ? JSON.stringify(body) : undefined, credentials: 'omit' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.status === 204 ? null : r.json(); });
  }
  var remote = function () { return !!RT.endpoint && RT.mode === 'live'; };
  W.api = {
    /** payload: { name, attending: 'yes'|'no'|'maybe', pax, events: [eventId] }. Guest code is attached automatically. */
    rsvp: function (payload) {
      var r = Object.assign({}, payload, { code: V.guest.code || null, at: new Date().toISOString() });
      var p = remote() ? call('POST', '/rsvp', r) : Promise.resolve(null);
      return p.then(function () { store.set('rsvp', r); return r; });
    },
    savedRsvp: function () { return store.get('rsvp'); },
    /** Returns Promise<{ items: [{name, message, at}], next: cursor|null }>. */
    wishes: function (cursor) {
      if (remote()) return call('GET', '/wishes' + (cursor ? '?cursor=' + encodeURIComponent(cursor) : ''));
      return Promise.resolve({ items: store.get('wishes') || [], next: null });
    },
    addWish: function (w) {
      var item = { name: w.name, message: w.message, code: V.guest.code || null, at: new Date().toISOString() };
      if (remote()) return call('POST', '/wishes', item).then(function (res) { return (res && res.item) || item; });
      store.set('wishes', [item].concat(store.get('wishes') || []).slice(0, 200));
      return Promise.resolve(item);
    }
  };

  /* ---------- music ---------- */
  W.music = {
    audio: null, button: null,
    attach: function (audio, button) {
      var m = this; m.audio = audio; m.button = button;
      if (!audio || !button || !V.music.src) { if (button) button.hidden = true; return; }
      audio.src = V.music.src;
      var set = function (on) { button.classList.toggle('playing', on); button.setAttribute('aria-pressed', on ? 'true' : 'false'); };
      audio.addEventListener('error', function () { button.hidden = true; });
      audio.addEventListener('play', function () { set(true); });
      audio.addEventListener('pause', function () { set(false); });
      button.addEventListener('click', function () { audio.paused ? audio.play().catch(function () {}) : audio.pause(); });
      doc.addEventListener('visibilitychange', function () { if (doc.hidden && !audio.paused) { audio.pause(); m.resume = true; } else if (!doc.hidden && m.resume) { m.resume = false; audio.play().catch(function () {}); } });
    },
    start: function () { if (this.audio && V.music.src && V.music.autoplay) this.audio.play().catch(function () {}); }
  };

  /* ---------- guest QR (qrcode-generator, MIT) ---------- */
  W.qr = function (el, text) {
    if (!el || !root.qrcode) return false;
    var q = root.qrcode(0, 'M'); q.addData(text); q.make();
    el.innerHTML = q.createSvgTag({ cellSize: 6, margin: 2, scalable: true });
    var svg = el.querySelector('svg'); if (svg) svg.setAttribute('role', 'img');
    return true;
  };
  W.guestQrText = function () { return V.guest.code ? 'INV:' + (RT.slug || W.fileSlug) + ':' + V.guest.code : ''; };

  /* ---------- open event ---------- */
  var openFns = [];
  W.onOpen = function (fn) { openFns.push(fn); };
  W.open = function () {
    if (W.opened) return; W.opened = true;
    openFns.forEach(function (fn) { safe('onOpen', fn); });
    doc.dispatchEvent(new Event('invitation-open'));
  };

  /* ---------- boot ---------- */
  safe('theme', applyTheme);
  safe('sections', applySections);
  safe('bind', function () { W.bind(); });
  W.ready = true;
})(window);

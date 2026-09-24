/*!
 * Sekar template behaviour — list renderers, gate opening, reveal, gallery, forms.
 * Runs after templates/_core/runtime/core.js (window.WeddingCore). All copy via W.t(), all data via W.V.
 * No animation library: reveal = IntersectionObserver on [data-rv], gate = CSS transitions.
 * (c) WAT Wedding Invitation. All rights reserved. Licensed per invitation;
 * copying, redistribution or reuse on another domain is prohibited.
 */
(function () {
  'use strict';

  var W = window.WeddingCore;
  if (!W || !W.ready) { console.error('[sekar] core runtime missing'); return; }
  var V = W.V, t = W.t, esc = W.esc, $ = W.$, $$ = W.$$, safe = W.safe;
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var staticPreview = /[?&]open=1\b/.test(location.search); // editor preview / screenshots
  var ornBase = (W.ctx.theme && W.ctx.theme.ornamentBase) || 'assets/svg/';
  var attr = function (s) { return esc(W.safeUrl(s)); };

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  /* ---------- cover: falling melati ---------- */
  W.section('cover', function () {
    if (reduceMotion || staticPreview) return;
    var box = $('#petals'), html = '';
    for (var i = 0; i < 14; i++) {
      html += '<img src="' + attr(ornBase + 'melati.svg') + '" alt="" style="left:' + Math.round(Math.random() * 100) + '%;animation-duration:' +
        (9 + Math.random() * 8).toFixed(1) + 's;animation-delay:-' + (Math.random() * 12).toFixed(1) + 's;width:' + Math.round(12 + Math.random() * 12) + 'px">';
    }
    box.innerHTML = html;
  });

  /* ---------- events ---------- */
  W.section('events', function () {
    $('#eventList').innerHTML = V.events.map(function (e) {
      return '<article class="event" data-rv><div class="event-in">' +
        (e.photo ? '<img class="event-photo" src="' + attr(e.photo) + '" alt="' + esc(e.title) + '" loading="lazy">' : '') +
        '<h3>' + esc(e.title) + '</h3>' +
        '<p class="ev-date"><span>' + esc(W.fmtDate(e.date, { weekday: 'long' })) + '</span><b>' + esc(W.fmtDate(e.date, { day: '2-digit' })) +
        '</b><span>' + esc(W.fmtDate(e.date, { month: 'long', year: 'numeric' })) + '</span></p>' +
        '<p>' + esc(e.time) + '</p><p class="ev-place">' + esc(e.venue) + '</p>' + (e.address ? '<p class="ev-addr">' + esc(e.address) + '</p>' : '') +
        (e.mapUrl ? '<a class="btn" target="_blank" rel="noopener" href="' + attr(e.mapUrl) + '"><i class="ph ph-map-pin" aria-hidden="true"></i> ' + esc(t('events.map')) + '</a>' : '') +
        '</div></article>';
    }).join('');
  });

  W.section('rundown', function () {
    $('#timeline').innerHTML = V.rundown.map(function (r) {
      return '<li data-rv><b>' + esc(r.time) + '</b>' + esc(r.title) + '</li>';
    }).join('');
  });

  /* ---------- countdown + calendar ---------- */
  W.section('countdown', function () {
    W.countdown(function (c) { $('#cdD').textContent = c.days; $('#cdH').textContent = c.hours; $('#cdM').textContent = c.minutes; $('#cdS').textContent = c.seconds; });
    $('#addToCalendar').addEventListener('click', function () { W.calendar.ics(); });
    $('#gcalLink').href = W.calendar.gcalUrl();
  });

  /* ---------- story ---------- */
  W.section('story', function () {
    $('#storyList').innerHTML = V.story.map(function (s) {
      return '<li data-rv>' + (s.photo ? '<img class="st-photo" src="' + attr(s.photo) + '" alt="' + esc(s.title) + '" loading="lazy">'
        : '<img class="st-flower" src="' + attr(ornBase + 'melati.svg') + '" alt="">') +
        (s.date ? '<time>' + esc(s.date) + '</time>' : '') + '<h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></li>';
    }).join('');
  });

  /* ---------- gallery (masonry columns + GLightbox) ---------- */
  W.section('gallery', function () {
    $('#galleryGrid').innerHTML = V.gallery.map(function (p, i) {
      var label = esc(t('gallery.photo', { n: i + 1 }));
      return '<a href="' + attr(p) + '" class="glightbox" data-gallery="sekar" aria-label="' + label + '" data-rv><img src="' + attr(p) + '" alt="' + label + '" loading="lazy"></a>';
    }).join('');
    safe('glightbox', function () { if (window.GLightbox) window.GLightbox({ selector: '#galleryGrid .glightbox', touchNavigation: true, loop: true }); });
  });

  /* ---------- video (own modal: YouTube nocookie iframe or native <video>) ---------- */
  W.section('video', function () {
    var box = $('#videoBox'), modal = $('#videoModal'), host = $('#videoHost'), v = V.video;
    var img = $('img', box);
    if (img) img.addEventListener('error', function () { this.onerror = null; if (V.images.background) this.src = V.images.background; });
    var open = function () {
      host.innerHTML = v.youtubeId
        ? '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.youtubeId) + '?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="' + esc(t('video.title')) + '"></iframe>'
        : '<video controls autoplay playsinline src="' + attr(v.src) + '"></video>';
      modal.hidden = false;
      if (W.music.audio && !W.music.audio.paused) { W.music.audio.pause(); modal.dataset.resume = '1'; }
    };
    var close = function () {
      host.innerHTML = ''; modal.hidden = true;
      if (modal.dataset.resume) { delete modal.dataset.resume; W.music.audio.play().catch(function () {}); }
    };
    box.addEventListener('click', open);
    box.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    $('#videoClose').addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) close(); });
  });

  /* ---------- RSVP ---------- */
  function validate(fields) {
    var ok = true;
    fields.forEach(function (el) {
      var bad = !el.value.trim();
      el.classList.toggle('invalid', bad);
      if (bad) { ok = false; el.addEventListener('input', function h() { el.classList.remove('invalid'); el.removeEventListener('input', h); }); }
    });
    return ok;
  }
  function loadScript(src, globalFn) {
    return new Promise(function (resolve, reject) {
      if (globalFn()) return resolve(globalFn());
      var s = document.createElement('script'); s.src = src; s.async = true;
      s.onload = function () { globalFn() ? resolve(globalFn()) : reject({}); };
      s.onerror = function () { reject({ offline: true }); };
      document.head.appendChild(s);
    });
  }

  W.section('rsvp', function () {
    var form = $('#rsvpForm'), pax = $('#rsvpPax'), evBox = $('#rsvpEvents'), nameEl = $('#rsvpName');
    for (var g = 1; g <= V.rsvp.maxPax; g++) { var o = document.createElement('option'); o.value = g; o.textContent = t('rsvp.paxUnit', { n: g }); pax.appendChild(o); }
    if (V.rsvp.askEvents) {
      evBox.hidden = false;
      evBox.insertAdjacentHTML('beforeend', V.events.map(function (e) {
        return '<label><input type="checkbox" name="events" value="' + esc(e.id) + '" checked><span>' + esc(e.title) + '</span></label>';
      }).join(''));
    }
    if (V.guest.has) nameEl.value = V.guest.name;
    var attendingInputs = $$('input[name=attending]');
    var syncAttend = function () {
      var yes = $('input[name=attending]:checked').value !== 'no';
      $('#rsvpPaxRow').hidden = !yes; if (V.rsvp.askEvents) evBox.hidden = !yes;
    };
    attendingInputs.forEach(function (i) { i.addEventListener('change', syncAttend); });

    function show(r) {
      var yes = r.attending === 'yes', no = r.attending === 'no';
      $('#rsvpStatus').textContent = t(yes ? 'rsvp.yes' : no ? 'rsvp.no' : 'rsvp.maybe');
      $('#rsvpMsg').textContent = t(yes ? 'rsvp.thanksYes' : no ? 'rsvp.thanksNo' : 'rsvp.thanksMaybe');
      $('#ticketMeta').textContent = t('rsvp.meta', { name: r.name, pax: t('rsvp.paxUnit', { n: r.pax }), date: V.date.short });
      form.hidden = true; $('#rsvpDone').hidden = false;
      $('#saveTicket').hidden = r.attending !== 'yes';
    }
    var saved = W.api.savedRsvp(); if (saved) show(saved);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate([nameEl])) { nameEl.focus(); return; }
      var btn = form.querySelector('[type=submit]');
      var attending = $('input[name=attending]:checked').value;
      var payload = {
        name: nameEl.value.trim().slice(0, 60),
        attending: attending,
        pax: attending === 'no' ? 0 : (+pax.value || 1),
        events: attending === 'no' ? [] : (V.rsvp.askEvents ? $$('input[name=events]:checked', evBox).map(function (i) { return i.value; }) : V.events.map(function (x) { return x.id; }))
      };
      btn.disabled = true; btn.textContent = t('rsvp.sending');
      W.api.rsvp(payload).then(show, function () { W.toast(t('rsvp.error')); }).then(function () { btn.disabled = false; btn.textContent = t('rsvp.submit'); });
    });
    $('#changeRSVP').addEventListener('click', function () {
      var r = W.api.savedRsvp(); $('#rsvpDone').hidden = true; form.hidden = false;
      if (r) {
        nameEl.value = r.name;
        attendingInputs.forEach(function (i) { i.checked = i.value === r.attending; });
        if (r.pax) pax.value = r.pax;
        $$('input[name=events]', evBox).forEach(function (i) { i.checked = (r.events || []).indexOf(i.value) > -1; });
        syncAttend();
      }
      nameEl.focus();
    });
    $('#saveTicket').addEventListener('click', function () {
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', function () { return window.html2canvas; }).then(function (h2c) {
        var bg = getComputedStyle(document.documentElement).getPropertyValue('--c-bg').trim() || '#ffffff';
        return h2c($('#ticket'), { backgroundColor: bg, scale: 2 }).then(function (cv) { W.download(cv.toDataURL('image/png'), 'rsvp-' + W.fileSlug + '.png'); });
      }).catch(function (err) { W.toast(t(err && err.offline ? 'rsvp.saveOffline' : 'rsvp.saveFailed')); });
    });
  });

  /* ---------- guest QR ---------- */
  W.section('qrTicket', function () {
    if (!W.qr($('#qrBox'), W.guestQrText())) $('#qrBox').hidden = true;
    $('#qrBox').setAttribute('aria-label', t('qr.alt', { name: V.guest.name }));
    $('#qrCode').textContent = t('qr.code', { code: V.guest.code });
  });

  /* ---------- gift (card-style accounts, QRIS, address) ---------- */
  W.section('gift', function () {
    var g = V.gift;
    var cards = g.accounts.map(function (a) {
      return '<div class="gift-card" data-rv><div class="chip"></div>' +
        '<div class="gift-provider"><i class="ph ' + (a.type === 'ewallet' ? 'ph-wallet' : 'ph-bank') + '" aria-hidden="true"></i>' + esc(a.provider) + '</div>' +
        '<div class="gift-num">' + esc(a.number) + '</div><div class="gift-holder">' + esc(t('gift.holder', { name: a.holder })) + '</div>' +
        '<button class="btn btn-gold" type="button" data-copy="' + esc(String(a.number).replace(/\s+/g, '')) + '" data-copy-msg="gift.copied" aria-label="' + esc(t('gift.copyAria', { provider: a.provider })) + '"><i class="ph ph-copy" aria-hidden="true"></i> ' + esc(t('gift.copy')) + '</button></div>';
    });
    if (g.qris) {
      cards.push('<div class="gift-card plain" data-rv><div class="gift-provider"><i class="ph ph-qr-code" aria-hidden="true"></i>' + esc(t('gift.qris')) + '</div>' +
        '<img src="' + attr(g.qris) + '" alt="' + esc(t('gift.qrisAlt')) + '" loading="lazy"></div>');
    }
    if (g.address) {
      var ad = g.address;
      cards.push('<div class="gift-card plain" data-rv><div class="gift-provider"><i class="ph ph-gift" aria-hidden="true"></i>' + esc(t('gift.address')) + '</div>' +
        '<p><b>' + esc(ad.name) + '</b><br>' + (ad.phone ? esc(ad.phone) + '<br>' : '') + esc(ad.text) + '</p>' +
        '<button class="btn" type="button" data-copy="' + esc([ad.name, ad.phone, ad.text].filter(Boolean).join(', ')) + '" data-copy-msg="gift.addressCopied"><i class="ph ph-copy" aria-hidden="true"></i> ' + esc(t('gift.copyAddress')) + '</button></div>');
    }
    $('#gifts').innerHTML = cards.join('');
    $('#gifts').addEventListener('click', function (e) {
      var b = e.target.closest('[data-copy]'); if (b) W.copy(b.getAttribute('data-copy'), t(b.getAttribute('data-copy-msg')));
    });
  });

  /* ---------- wishes ---------- */
  W.section('wishes', function () {
    var list = $('#wishList'), more = $('#wishMore'), cursor = null, items = [];
    var when = function (at) { var d = new Date(at); return isNaN(d) ? '' : d.toLocaleDateString(W.ctx.labels.$locale || 'id-ID', { day: 'numeric', month: 'short', year: 'numeric' }); };
    var render = function () {
      list.innerHTML = items.length ? items.map(function (w) {
        return '<div class="wish-item"><b>' + esc(w.name) + '</b><time datetime="' + esc(w.at) + '">' + esc(when(w.at)) + '</time><p>' + esc(w.message) + '</p></div>';
      }).join('') : '<p class="wish-empty">' + esc(t('wishes.empty')) + '</p>';
      more.hidden = !cursor;
    };
    var load = function () {
      return W.api.wishes(cursor).then(function (res) { items = items.concat((res && res.items) || []); cursor = res && res.next || null; render(); }, function () { render(); });
    };
    load();
    more.addEventListener('click', load);
    if (V.guest.has) $('#wishName').value = V.guest.name;
    $('#wishForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var n = $('#wishName'), m = $('#wishMsg'), btn = this.querySelector('[type=submit]');
      if (!validate([n, m])) return;
      btn.disabled = true;
      W.api.addWish({ name: n.value.trim().slice(0, 60), message: m.value.trim().slice(0, 400) }).then(function (w) {
        items.unshift(w); m.value = ''; render(); list.scrollTop = 0; W.toast(t('wishes.thanks'));
      }, function () { W.toast(t('wishes.error')); }).then(function () { btn.disabled = false; });
    });
  });

  /* ---------- turut mengundang / dress code / ig ---------- */
  W.section('turutMengundang', function () {
    var col = function (key, names) { return names.length ? '<div><h3>' + esc(t(key)) + '</h3><ul>' + names.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul></div>' : ''; };
    var first = V.couple.first.role, second = V.couple.second.role;
    $('#inviters').innerHTML = col('inviters.' + first, V.inviters[first]) + col('inviters.' + second, V.inviters[second]);
  });
  W.section('dresscode', function () {
    $('#swatches').innerHTML = V.dresscode.colors.map(function (c) { return /^#[0-9a-f]{6}$/i.test(c) ? '<i style="background:' + c + '" title="' + c + '"></i>' : ''; }).join('');
  });
  W.section('igFilter', function () {
    var b = $('#hashCopy'); if (b) b.addEventListener('click', function () { W.copy(V.hashtag, t('igFilter.hashCopied')); });
  });

  /* ---------- music ---------- */
  W.music.attach($('#bgm'), $('#musicBtn'));

  /* ---------- reveal on scroll ---------- */
  var io = null;
  function reveal() {
    var els = $$('[data-rv]:not(.in)');
    if (staticPreview || reduceMotion || !('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('in'); }); return; }
    document.documentElement.classList.add('rv-on');
    io = io || new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- open the gate ---------- */
  var gate = $('#gate'), opened = false;
  function openInvitation(instant) {
    if (opened) return; opened = true;
    var finish = function () {
      document.documentElement.classList.remove('locked');
      if (gate) gate.classList.add('gone');
      $('#musicBtn').classList.add('show');
      var target = location.hash && /^#[A-Za-z][\w-]*$/.test(location.hash) && $(location.hash); // deep link, e.g. editor preview ?open=1#gift
      if (target) target.scrollIntoView(); else window.scrollTo(0, 0);
    };
    W.open();
    W.music.start();
    reveal();
    if (!gate || instant === true || reduceMotion) { finish(); return; }
    gate.classList.add('open');
    setTimeout(finish, 1900);
  }

  /* ---------- boot ---------- */
  if (gate) {
    document.documentElement.classList.add('locked');
    $('#openBtn').addEventListener('click', function () { openInvitation(); });
  }
  if (!gate || staticPreview) openInvitation(true); // no cover section, or editor preview / screenshots
  var loaded = false;
  function ready() {
    if (loaded) return; loaded = true;
    $('#loader').classList.add('done');
    setTimeout(function () { $('#loader').style.display = 'none'; }, 900);
  }
  window.addEventListener('load', function () {
    var fonts = document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, new Promise(function (r) { setTimeout(r, 2500); })]) : Promise.resolve();
    fonts.then(function () { setTimeout(ready, 300); });
  });
  setTimeout(ready, 6000); // never leave the visitor on the loader
})();

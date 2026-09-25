/*!
 * Sekar template behaviour — list renderers, gate opening, gallery. Forms/RSVP/wishes/video/QR/reveal = core W.ui.
 * Runs after templates/_core/runtime/core.js (window.WeddingCore). All copy via W.t(), all data via W.V.
 * No animation library: reveal = W.ui.reveal() on [data-rv], gate = CSS transitions.
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
  W.section('countdown', W.ui.countdown);

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

  /* ---------- shared widgets (behaviour in core W.ui; markup/ids in index.html) ---------- */
  W.section('video', W.ui.video);
  W.section('rsvp', W.ui.rsvp);
  W.section('qrTicket', W.ui.qrTicket);
  W.section('wishes', function () { W.ui.wishes(); });

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
    W.ui.copyButtons($('#gifts'));
  });

  /* ---------- turut mengundang / dress code / ig ---------- */
  W.section('turutMengundang', function () { $('#inviters').innerHTML = W.ui.inviters(); });
  W.section('dresscode', function () { $('#swatches').innerHTML = W.ui.swatches(); });
  W.section('igFilter', function () {
    var b = $('#hashCopy'); if (b) b.addEventListener('click', function () { W.copy(V.hashtag, t('igFilter.hashCopied')); });
  });

  /* ---------- music ---------- */
  W.music.attach($('#bgm'), $('#musicBtn'));

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
    W.ui.reveal(staticPreview);
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

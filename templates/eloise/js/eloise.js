/*!
 * Eloise template behaviour — list renderers, libraries, envelope animation.
 * Runs after templates/_core/runtime/core.js (window.WeddingCore). All copy via W.t(), all data via W.V.
 * (c) WAT Wedding Invitation. All rights reserved. Licensed per invitation;
 * copying, redistribution or reuse on another domain is prohibited.
 */
(function () {
  'use strict';

  var W = window.WeddingCore;
  if (!W || !W.ready) { console.error('[eloise] core runtime missing'); return; }
  var V = W.V, t = W.t, esc = W.esc, $ = W.$, $$ = W.$$, safe = W.safe;
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ornBase = (W.ctx.theme && W.ctx.theme.ornamentBase) || 'assets/svg/';
  var attr = function (s) { return esc(W.safeUrl(s)); };

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!$('#envPolaroid')) $('#envelope').classList.add('no-polaroid');

  /* ---------- cover (Swiper fade + particles) ---------- */
  var particles;
  W.section('cover', function () {
    var imgs = V.images.cover.length ? V.images.cover : (V.images.hero ? [V.images.hero] : []);
    var host = $('#coverSlides');
    if (!host) return;
    host.innerHTML = imgs.map(function (u) { return '<div class="swiper-slide"><div class="cover-slide" style="background-image:' + esc(W.cssUrl(u)) + '"></div></div>'; }).join('');
    safe('cover swiper', function () {
      if (!window.Swiper || !imgs.length) return;
      new window.Swiper('#coverSwiper', {
        effect: 'fade', fadeEffect: { crossFade: true }, speed: 2200, loop: imgs.length > 1, allowTouchMove: false,
        autoplay: imgs.length > 1 && !reduceMotion ? { delay: 5000, disableOnInteraction: false } : false
      });
    });
    safe('particles', function () {
      if (reduceMotion || !window.tsParticles) return;
      window.tsParticles.load({
        id: 'tsparticles',
        options: {
          fullScreen: { enable: false }, fpsLimit: 60, detectRetina: true, background: { color: 'transparent' },
          particles: {
            number: { value: 26, density: { enable: true, area: 900 } },
            shape: { type: 'image', options: { image: { src: ornBase + 'petal.svg', width: 40, height: 40 } } },
            size: { value: { min: 8, max: 18 } },
            opacity: { value: { min: .25, max: .75 } },
            rotate: { value: { min: 0, max: 360 }, direction: 'random', animation: { enable: true, speed: 6 } },
            wobble: { enable: true, distance: 16, speed: { min: -4, max: 4 } },
            move: { enable: true, direction: 'bottom', speed: { min: .5, max: 1.3 }, random: true, straight: false, outModes: { default: 'out' } }
          },
          interactivity: { events: { resize: { enable: true } } }
        }
      }).then(function (c) { particles = c; });
    });
  });

  /* ---------- couple ---------- */
  function person(p, aos) {
    return '<p class="p-label" data-aos="fade-up" data-aos-duration="2000">' + esc(p.label) + '</p>' +
      '<h3 class="script p-name" data-aos="' + aos.a + '" data-aos-duration="' + aos.d + '" data-aos-delay="' + aos.t + '">' + esc(p.nickname) + '</h3>' +
      '<p class="p-full" data-aos="fade-up" data-aos-duration="2200" data-aos-delay="' + (aos.t + 200) + '">' + esc(p.fullName) + '</p>' +
      (p.parentsLine ? '<p class="p-parents" data-aos="fade-up" data-aos-duration="2400" data-aos-delay="' + (aos.t + 300) + '">' +
        (p.childLine ? esc(p.childLine) + '<br>' + esc(p.parentsNames) : esc(p.parentsLine)) + '</p>' : '') +
      (p.instagramUrl ? '<a class="p-ig" data-aos="fade-up" data-aos-duration="2400" data-aos-delay="' + (aos.t + 500) + '" target="_blank" rel="noopener" href="' + attr(p.instagramUrl) + '"><i class="ph ph-instagram-logo" aria-hidden="true"></i>' + esc(p.instagram) + '</a>' : '');
  }
  W.section('couple', function () {
    $('#personFirst').innerHTML = person(V.couple.first, { a: 'fade-up-right', d: 3000, t: 500 });
    $('#personSecond').innerHTML = person(V.couple.second, { a: 'zoom-in', d: 3400, t: 1000 });
  });

  /* ---------- love story ---------- */
  W.section('story', function () {
    $('#storyStage').innerHTML = V.story.map(function (c, i) {
      return '<article class="story-item' + (c.photo ? ' has-photo' : '') + '">' +
        (c.photo ? '<div class="story-photo"><img src="' + attr(c.photo) + '" alt="' + esc(c.title) + '" loading="lazy"><span class="story-num">' + ('0' + (i + 1)).slice(-2) + '</span></div>' : '') +
        (c.date ? '<p class="story-date">' + esc(c.date) + '</p>' : '') +
        '<h3>' + esc(c.title) + '</h3><p>' + esc(c.text) + '</p></article>';
    }).join('');
    $('#storyDots').innerHTML = V.story.map(function (_, i) { return '<i class="' + (i === 0 ? 'on' : '') + '"></i>'; }).join('');
  });

  /* ---------- countdown + calendar ---------- */
  W.section('countdown', function () {
    W.countdown(function (c) { $('#cdD').textContent = c.days; $('#cdH').textContent = c.hours; $('#cdM').textContent = c.minutes; $('#cdS').textContent = c.seconds; });
    $('#addToCalendar').addEventListener('click', function () { W.calendar.ics(); });
    $('#gcalLink').href = W.calendar.gcalUrl();
  });

  /* ---------- events / rundown ---------- */
  W.section('events', function () {
    $('#eventList').innerHTML = V.events.map(function (e) {
      return '<article class="event' + (e.photo ? '' : ' no-photo') + '">' +
        (e.photo ? '<div class="event-photo" data-aos="zoom-in" data-aos-duration="2600" data-aos-delay="100"><img src="' + attr(e.photo) + '" alt="' + esc(e.title) + '" loading="lazy"></div>' : '') +
        '<div class="event-card" data-aos="fade-up" data-aos-duration="2400" data-aos-delay="400">' +
        '<h3>' + esc(e.title) + '</h3><p class="ev-date">' + esc(e.dateLong) + '</p><p>' + esc(e.time) + '</p>' +
        '<p class="ev-place">' + esc(e.venue) + '</p>' + (e.address ? '<p class="ev-addr">' + esc(e.address) + '</p>' : '') +
        (e.mapUrl ? '<a class="btn" target="_blank" rel="noopener" href="' + attr(e.mapUrl) + '"><i class="ph ph-map-pin"></i> ' + esc(t('events.map')) + '</a>' : '') +
        '</div></article>';
    }).join('');
  });

  W.section('rundown', function () {
    $('#timeline').innerHTML = V.rundown.map(function (r, i) {
      return '<li data-aos="fade-up" data-aos-duration="1600" data-aos-delay="' + Math.min(i * 100, 600) + '"><span class="tl-time">' + esc(r.time) + '</span><span class="tl-title">' + esc(r.title) + '</span></li>';
    }).join('');
  });

  /* ---------- RSVP ---------- */
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
      $('#rsvpStatus').textContent = t(r.attending === 'yes' ? 'rsvp.yes' : r.attending === 'no' ? 'rsvp.no' : 'rsvp.maybe');
      $('#rsvpMsg').textContent = t(r.attending === 'yes' ? 'rsvp.thanksYes' : r.attending === 'no' ? 'rsvp.thanksNo' : 'rsvp.thanksMaybe');
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

  /* ---------- guest QR ---------- */
  W.section('qrTicket', function () {
    if (!W.qr($('#qrBox'), W.guestQrText())) $('#qrBox').hidden = true;
    $('#qrBox').setAttribute('aria-label', t('qr.alt', { name: V.guest.name }));
    $('#qrCode').textContent = t('qr.code', { code: V.guest.code });
  });

  /* ---------- gallery (Swiper coverflow + justified grid + GLightbox) ---------- */
  W.section('gallery', function () {
    var photos = V.gallery;
    $('#swiperWrap').innerHTML = photos.slice(0, 5).map(function (p, i) {
      return '<div class="swiper-slide"><img src="' + attr(p) + '" alt="' + esc(t('gallery.photo', { n: i + 1 })) + '" loading="lazy" data-idx="' + i + '"></div>';
    }).join('');
    $('#flexbin').innerHTML = photos.map(function (p, i) {
      return '<a href="' + attr(p) + '" class="glightbox" data-gallery="wedding" aria-label="' + esc(t('gallery.photo', { n: i + 1 })) + '"><img src="' + attr(p) + '" alt="' + esc(t('gallery.photo', { n: i + 1 })) + '" loading="lazy"></a>';
    }).join('');
    $$('#flexbin a').forEach(function (a) {
      var img = $('img', a);
      var fit = function () { var r = img.naturalWidth / (img.naturalHeight || 1) || 1; a.style.flex = (r * 100) + ' 1 ' + (r * 190) + 'px'; };
      img.complete ? fit() : img.addEventListener('load', fit);
    });
    var lb;
    safe('glightbox', function () { if (window.GLightbox) lb = window.GLightbox({ selector: '#flexbin .glightbox', touchNavigation: true, loop: true, openEffect: 'fade', closeEffect: 'fade' }); });
    safe('swiper', function () {
      if (!window.Swiper) return;
      new window.Swiper('#gallerySwiper', {
        effect: 'coverflow', grabCursor: true, centeredSlides: true, slidesPerView: 'auto', speed: 900,
        coverflowEffect: { rotate: 18, stretch: 0, depth: 110, modifier: 1, slideShadows: false },
        autoplay: reduceMotion ? false : { delay: 3600, disableOnInteraction: false },
        pagination: { el: '#gallerySwiper .swiper-pagination', clickable: true }
      });
    });
    $('#swiperWrap').addEventListener('click', function (e) { var i = e.target.getAttribute && e.target.getAttribute('data-idx'); if (i != null && lb) lb.openAt(+i); });
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

  /* ---------- instagram filter ---------- */
  W.section('igFilter', function () {
    var b = $('#hashCopy'); if (b) b.addEventListener('click', function () { W.copy(V.hashtag, t('igFilter.hashCopied')); });
  });

  /* ---------- gift ---------- */
  W.section('gift', function () {
    var g = V.gift, i = 0;
    var cards = g.accounts.map(function (a) {
      return '<div class="kado-card" data-aos="fade-up" data-aos-duration="1800" data-aos-delay="' + (i++ * 150) + '">' +
        '<div class="kado-bank"><i class="ph ' + (a.type === 'ewallet' ? 'ph-wallet' : 'ph-bank') + '" aria-hidden="true"></i>' + esc(a.provider) + '</div>' +
        '<div class="kado-num">' + esc(a.number) + '</div><div class="kado-holder">' + esc(t('gift.holder', { name: a.holder })) + '</div>' +
        '<button class="btn" type="button" data-copy="' + esc(String(a.number).replace(/\s+/g, '')) + '" data-copy-msg="gift.copied" aria-label="' + esc(t('gift.copyAria', { provider: a.provider })) + '"><i class="ph ph-copy"></i> ' + esc(t('gift.copy')) + '</button></div>';
    });
    if (g.qris) {
      cards.push('<div class="kado-card light kado-qris" data-aos="fade-up" data-aos-duration="1800" data-aos-delay="' + (i++ * 150) + '">' +
        '<div class="kado-bank"><i class="ph ph-qr-code" aria-hidden="true"></i>' + esc(t('gift.qris')) + '</div>' +
        '<img src="' + attr(g.qris) + '" alt="' + esc(t('gift.qrisAlt')) + '" loading="lazy"></div>');
    }
    if (g.address) {
      var ad = g.address;
      cards.push('<div class="kado-card light" data-aos="fade-up" data-aos-duration="1800" data-aos-delay="' + (i++ * 150) + '">' +
        '<div class="kado-bank"><i class="ph ph-gift" aria-hidden="true"></i>' + esc(t('gift.address')) + '</div>' +
        '<div class="kado-num">' + esc(ad.name) + '</div><div class="kado-holder">' + (ad.phone ? esc(ad.phone) + '<br>' : '') + esc(ad.text) + '</div>' +
        '<button class="btn" type="button" data-copy="' + esc([ad.name, ad.phone, ad.text].filter(Boolean).join(', ')) + '" data-copy-msg="gift.addressCopied"><i class="ph ph-copy"></i> ' + esc(t('gift.copyAddress')) + '</button></div>');
    }
    $('#kado').innerHTML = cards.join('');
    $('#kado').addEventListener('click', function (e) {
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

  /* ---------- turut mengundang / dress code ---------- */
  W.section('turutMengundang', function () {
    var col = function (key, names) { return names.length ? '<div><h3>' + esc(t(key)) + '</h3><ul>' + names.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul></div>' : ''; };
    var first = V.couple.first.role, second = V.couple.second.role;
    var box = $('#inviters');
    box.innerHTML = col('inviters.' + first, V.inviters[first]) + col('inviters.' + second, V.inviters[second]);
    if (V.inviters.groom.length && V.inviters.bride.length) box.classList.add('two');
  });
  W.section('dresscode', function () {
    $('#swatches').innerHTML = V.dresscode.colors.map(function (c) { return /^#[0-9a-f]{6}$/i.test(c) ? '<i style="background:' + c + '" title="' + c + '"></i>' : ''; }).join('');
  });

  /* ---------- music ---------- */
  W.music.attach($('#bgm'), $('#musicBtn'));

  /* ---------- GSAP: story pin, hero parallax ---------- */
  function initScroll() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger); if (window.Observer) gsap.registerPlugin(Observer);

    var items = $$('.story-item'), dots = $$('#storyDots i'), n = items.length;
    if (n > 1 && $('#loveStory')) {
      gsap.set(items.slice(1), { autoAlpha: 0, y: 60 });
      var tl = gsap.timeline({
        defaults: { ease: 'power1.inOut' },
        scrollTrigger: {
          trigger: '#loveStory', start: 'top top', end: function () { return '+=' + Math.round(window.innerHeight * .9 * (n - 1)); },
          pin: true, scrub: .8, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: function (self) { var idx = Math.round(self.progress * (n - 1)); dots.forEach(function (d, i) { d.classList.toggle('on', i === idx); }); }
        }
      });
      tl.to({}, { duration: .4 });
      for (var i = 1; i < n; i++) {
        tl.to(items[i - 1], { autoAlpha: 0, y: -60, duration: 1 })
          .fromTo(items[i], { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 1 }, '<.35')
          .to({}, { duration: .5 });
      }
    }
    if (!$('#heroBg')) return;
    var mm = gsap.matchMedia();
    mm.add('(max-width: 991px)', function () {
      gsap.to('#heroBg', { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '#primaryPane', start: 'top top', end: 'bottom top', scrub: true } });
    });
    mm.add('(min-width: 992px) and (hover: hover)', function () {
      if (!window.Observer) return;
      var xTo = gsap.quickTo('#heroBg', 'x', { duration: 1.8, ease: 'power3' }), yTo = gsap.quickTo('#heroBg', 'y', { duration: 1.8, ease: 'power3' });
      Observer.create({ target: window, type: 'pointer', onMove: function (s) { xTo(-(s.x / innerWidth - .5) * 34); yTo(-(s.y / innerHeight - .5) * 22); } });
    });
  }

  /* ---------- AOS ---------- */
  var aosReady = false;
  var staticPreview = /[?&]open=1\b/.test(location.search); // editor preview / screenshots: no reveal animations
  if (staticPreview) $$('[data-aos]').forEach(function (el) { el.removeAttribute('data-aos'); });
  safe('aos', function () {
    if (!window.AOS || staticPreview) return;
    window.AOS.init({ once: true, offset: 70, startEvent: 'invitation-open', disable: function () { return reduceMotion; } });
    aosReady = true;
  });
  if (!window.AOS) $$('[data-aos]').forEach(function (el) { el.removeAttribute('data-aos'); }); // CDN failed → never hide content

  /* ---------- open the envelope ---------- */
  var opened = false;
  function openInvitation(instant) {
    if (opened) return; opened = true;
    var seal = $('#openBtn'); seal.style.animation = 'none'; seal.disabled = true;
    var finish = function () {
      document.documentElement.classList.remove('locked'); document.body.classList.remove('locked');
      window.scrollTo(0, 0);
      $('#topCover').classList.add('fromtop');
      W.open();
      $('#musicBtn').classList.add('show');
      W.music.start();
      if (window.gsap && instant !== true) gsap.to('[data-hero]', { opacity: 1, y: 0, duration: 2.2, ease: 'power2.out', stagger: .35, delay: .7 }); else $$('[data-hero]').forEach(function (e) { e.style.opacity = 1; });
      if (window.ScrollTrigger) setTimeout(function () { ScrollTrigger.refresh(); if (aosReady) AOS.refresh(); }, 300);
      setTimeout(function () {
        $('#topCover').style.display = 'none'; if (particles) particles.destroy(); if (window.ScrollTrigger) ScrollTrigger.refresh();
        var target = location.hash && /^#[A-Za-z][\w-]*$/.test(location.hash) && $(location.hash); // deep link, e.g. editor preview ?open=1#gift
        if (target) target.scrollIntoView();
      }, 1700);
    };
    if (!window.gsap || reduceMotion || instant === true) { finish(); return; }
    gsap.set('[data-hero]', { y: 34 });
    gsap.timeline({ defaults: { ease: 'power2.inOut' } })
      .to('.click-hint', { autoAlpha: 0, duration: .4 }, 0)
      .to(seal, { scale: 1.3, autoAlpha: 0, duration: .7, ease: 'back.in(2)' }, 0)
      .to('#envPolaroid', { y: '-46%', duration: 1.3, ease: 'power3.out' }, .5)
      .to('#envCard', { y: '-62%', duration: 1.4, ease: 'power3.out' }, .65)
      .to('.env-pearls, .env-flowers', { autoAlpha: 0, duration: .8 }, 1.1)
      .to('.envelope', { y: 70, scale: .96, duration: 1 }, 1.35)
      .add(finish, '+=.05');
  }
  $('#openBtn').addEventListener('click', function () { openInvitation(); });
  $('#openHint').addEventListener('click', function () { openInvitation(); });

  /* ---------- boot ---------- */
  document.documentElement.classList.add('locked');
  if (/[?&]open=1\b/.test(location.search)) openInvitation(true); // editor preview / screenshots: skip the envelope animation
  var loaded = false;
  function ready() {
    if (loaded) return; loaded = true;
    $('#loader').classList.add('done');
    setTimeout(function () { $('#loader').style.display = 'none'; }, 900);
    safe('scroll', initScroll);
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }
  window.addEventListener('load', function () {
    var fonts = document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, new Promise(function (r) { setTimeout(r, 2500); })]) : Promise.resolve();
    fonts.then(function () { setTimeout(ready, 350); });
  });
  setTimeout(ready, 6000); // never leave the visitor on the loader
})();

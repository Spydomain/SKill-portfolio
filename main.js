import { generateAndOpenResumePDF } from './cv-generator.js';
if (typeof window !== 'undefined') window.generateAndOpenResumePDF = generateAndOpenResumePDF;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const debounce = (fn, ms = 120) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

function init() {
  console.log("MAIN.JS: init() running");
  initMenu();
  initPages();
  initContactForm();
  startMatrix();
  if (typeof initSpyBot === 'function') initSpyBot();
  generateFavicon();

  // V86 Boot — triggered by Enter or click
  var v86Loading = document.getElementById('v86-loading');

  function bootV86() {
    if (window.emulatorStarted) return;
    window.emulatorStarted = true;
    console.log("MAIN.JS: bootV86() triggered");
    if (v86Loading) {
      v86Loading.innerHTML = '<p style="color: #0f0;">> Booting SpydomainOS...</p><p style="color: #666;">[WASM x86 Emulator Loading]</p>';
    }
    const statusEl = document.getElementById('v86-status');
    if (statusEl) {
      statusEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> BOOTING';
      statusEl.style.color = '#ffbd2e';
    }
    if (window.startEmulator) {
      console.log("MAIN.JS: Calling window.startEmulator()");
      window.startEmulator();
    } else {
      console.error("MAIN.JS: window.startEmulator is not defined!");
    }
  }

  if (v86Loading) {
    v86Loading.style.cursor = 'pointer';
    v86Loading.addEventListener('click', bootV86);
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !window.emulatorStarted) {
      bootV86();
    }
  });
}

// Handle both cases: DOMContentLoaded may or may not have fired
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* ══════════════════════════════════════════════════
   CLOUD SHELL SECURE LAUNCHER
══════════════════════════════════════════════════ */
// Cloud Shell Launch removed

function initScrollProgress() {
  const progress = document.getElementById('scroll-progress');
  if (!progress) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        const s = document.documentElement.scrollTop;
        const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (h > 0) progress.style.width = (s / h * 100) + '%';
        ticking = false;
      });
    }
  }, { passive: true });
}

/* ══════════════════════════════════════════════════
   REVEAL ANIMATIONS (Intersection Observer)
══════════════════════════════════════════════════ */
function initRevealAnimations() {
  const cards = $$('.reveal-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  cards.forEach(card => observer.observe(card));
}

/* trigger reveals when page switches (since pages are display:none initially) */
function triggerPageReveals(pageId) {
  const page = document.getElementById(pageId);
  if (!page) return;

  // Small delay for the page to become visible
  setTimeout(() => {
    const cards = page.querySelectorAll('.reveal-card');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 80);
    });

    // Trigger skill bars if on skills page
    if (pageId === 'skills') {
      animateSkillBars(page);
    }
  }, 100);
}

/* ══════════════════════════════════════════════════
   STAT COUNTERS
══════════════════════════════════════════════════ */
function initStatCounters() {
  const counters = $$('.stat-number[data-target]');
  if (!counters.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => animateCounter(counter));
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutCubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ══════════════════════════════════════════════════
   SKILL BARS
══════════════════════════════════════════════════ */
function initSkillBars() {
  // Will be triggered on page switch
}

function animateSkillBars(container) {
  const fills = container.querySelectorAll('.skill-bar-fill[data-width]');
  fills.forEach((fill, i) => {
    setTimeout(() => {
      fill.classList.add('animated');
      fill.style.width = fill.dataset.width + '%';
    }, i * 120);
  });
}

/* ══════════════════════════════════════════════════
   HAMBURGER MENU
══════════════════════════════════════════════════ */
function initMenu() {
  const btn = $('.hamburger');
  const panel = $('.nav-links');
  if (!btn || !panel) return;

  let overlay = $('.nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
  }

  btn.removeAttribute('style');
  panel.removeAttribute('style');
  $$('.nav-links li, .nav-links a').forEach(el => {
    el.removeAttribute('style');
    el.style.cssText = '';
  });

  let open = false;

  function openMenu() {
    open = true;
    btn.classList.add('is-open');
    panel.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    open = false;
    btn.classList.remove('is-open');
    panel.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    open ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) closeMenu(); });

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-page]');
    if (!el) return;

    e.preventDefault();
    const page = el.getAttribute('data-page');
    if (page) {
      showPage(page);
    }
    if (window.innerWidth <= 992) closeMenu();
  });

  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 992) {
      closeMenu();
      panel.removeAttribute('style');
      btn.removeAttribute('style');
    }
  }));
}

/* ══════════════════════════════════════════════════
   PAGE NAVIGATION
══════════════════════════════════════════════════ */
function initPages() {
  const hash = window.location.hash.slice(1);
  showPage(hash || 'home');

  window.addEventListener('popstate', () => showPage(window.location.hash.slice(1) || 'home'));
  window.addEventListener('hashchange', () => showPage(window.location.hash.slice(1) || 'home'));
}

function showPage(id) {
  if (!id || !document.getElementById(id)) id = 'home';
  $$('.page').forEach(p => { p.classList.remove('active'); p.style.display = 'none'; });
  const page = document.getElementById(id);
  if (!page) return;
  page.style.display = 'block';
  page.classList.add('active');
  $$('.nav-links a').forEach(a => a.classList.toggle('active', a.getAttribute('data-page') === id));
  window.history.pushState({ id }, '', '#' + id);
  window.scrollTo(0, 0);

  // Trigger reveal animations for the new page
  triggerPageReveals(id);
}

/* ══════════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════════ */
function initContactForm() {
  const form = $('.contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, { method: form.method, body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(r => { if (r.ok) { alert('Message sent!'); form.reset(); } else throw 0; })
      .catch(() => alert('Error sending message. Please try again.'));
  });
}

/* ══════════════════════════════════════════════════
   BINARY RAIN
══════════════════════════════════════════════════ */
function startMatrix() {
  const canvas = document.getElementById('binary-rain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: false });
  const FS = 16;
  let drops = [];
  const FPS = 24; // lower fps for performance — still looks smooth
  const FRAME_MS = 1000 / FPS;
  let lastFrame = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops = Array(Math.floor(canvas.width / FS)).fill(1);
  }
  resize();
  window.addEventListener('resize', debounce(resize));
  ctx.font = FS + 'px monospace';

  function draw(now) {
    requestAnimationFrame(draw);
    if (now - lastFrame < FRAME_MS) return;
    lastFrame = now;

    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#39ff14';
    const len = drops.length;
    for (let i = 0; i < len; i++) {
      ctx.fillText(Math.random() > 0.5 ? '1' : '0', i * FS, drops[i] * FS);
      if (drops[i] * FS > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  requestAnimationFrame(draw);
}

/* ══════════════════════════════════════════════════
   FAVICON
══════════════════════════════════════════════════ */
function generateFavicon() {
  try {
    const S = 64;
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const x = c.getContext('2d');
    x.fillStyle = '#0b0f19'; x.fillRect(0, 0, S, S);
    const g = x.createRadialGradient(S / 2, S / 2, 8, S / 2, S / 2, S / 2);
    g.addColorStop(0, '#003322'); g.addColorStop(1, '#00110a');
    x.fillStyle = g; x.beginPath(); x.arc(S / 2, S / 2, S / 2 - 2, 0, Math.PI * 2); x.fill();
    x.fillStyle = 'rgba(0,255,153,0.2)'; x.font = 'bold 10px monospace';
    for (let y = 10; y < S; y += 12) for (let i = 6; i < S; i += 12) x.fillText(Math.random() > .5 ? '1' : '0', i, y);
    x.font = 'bold 28px Roboto Mono,monospace'; x.fillStyle = '#00ff99';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    x.shadowColor = '#00ff99'; x.shadowBlur = 8;
    x.fillText('BS', S / 2, S / 2 + 2);
    $$('link[rel="icon"]').forEach(e => e.remove());
    const lnk = document.createElement('link');
    lnk.rel = 'icon'; lnk.type = 'image/png'; lnk.href = c.toDataURL('image/png');
    document.head.appendChild(lnk);
  } catch (_) { }
}


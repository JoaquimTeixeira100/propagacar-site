/* ── LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1900);
});

/* ── NAV ── */
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50), { passive: true });

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.classList.toggle('menu-open', isOpen);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn.classList.remove('menu-open');
}));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const href = a.getAttribute('href');
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const t = document.querySelector(href);
    if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
  });
});

/* ── REVEAL ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: .1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── FAQ ── */
function toggleFaq(el) {
  const item = el.parentElement;
  const ans  = item.querySelector('.faq-a');
  const open = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-a').style.maxHeight = '0';
  });
  if (!open) {
    item.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
}

// Abre o primeiro item imediatamente (antes das fontes carregarem)
(function() {
  const firstAns = document.querySelector('.faq-item.open .faq-a');
  if (firstAns) firstAns.style.maxHeight = firstAns.scrollHeight + 'px';
})();

// Fixa a altura do painel direito do FAQ para não redimensionar ao abrir itens
document.fonts.ready.then(() => {
  const faqRightInner = document.querySelector('.faq-right-inner');
  if (!faqRightInner) return;
  const items   = [...document.querySelectorAll('.faq-item')];
  const answers = items.map(i => i.querySelector('.faq-a'));

  // Desabilita transições e fecha tudo para medir com precisão
  answers.forEach(a => { a.style.transition = 'none'; a.style.maxHeight = '0'; });
  items.forEach(i => i.classList.remove('open'));
  void faqRightInner.offsetHeight;

  let maxH = 0;
  items.forEach((item, i) => {
    item.classList.add('open');
    answers[i].style.maxHeight = answers[i].scrollHeight + 'px';
    void faqRightInner.offsetHeight;
    maxH = Math.max(maxH, faqRightInner.offsetHeight);
    item.classList.remove('open');
    answers[i].style.maxHeight = '0';
    void faqRightInner.offsetHeight;
  });

  // Restaura transições e trava a altura mínima no painel
  answers.forEach(a => { a.style.transition = ''; });
  faqRightInner.style.minHeight = maxH + 'px';

  // Reabre o primeiro item
  items[0].classList.add('open');
  answers[0].style.maxHeight = answers[0].scrollHeight + 'px';
});

/* ── COMO FUNCIONA TABS ── */
document.querySelectorAll('.como-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.como-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.como-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    document.querySelectorAll('#tab-' + tab.dataset.tab + ' .reveal').forEach(el => {
      el.classList.remove('vis');
      obs.observe(el);
    });
  });
});

/* ── HERO TABLET 3D TILT ── */
const heroSection = document.getElementById('hero');
const tablet = document.getElementById('tabletTilt');
if (tablet && heroSection) {
  const REST = { rotY: -6, rotX: 3, scale: 1 };
  const cur  = { rotY: -6, rotX: 3, scale: 1 };
  const tgt  = { rotY: -6, rotX: 3, scale: 1 };
  let rafId        = null;
  let tiltStrength = 0;
  let tiltTarget   = 0;

  const shine = document.createElement('div');
  shine.className = 'tablet-shine';
  tablet.appendChild(shine);

  const lerp = (a, b, t) => a + (b - a) * t;

  function tick() {
    tiltStrength = lerp(tiltStrength, tiltTarget, 0.05);

    const effRotY  = REST.rotY  + (tgt.rotY  - REST.rotY)  * tiltStrength;
    const effRotX  = REST.rotX  + (tgt.rotX  - REST.rotX)  * tiltStrength;
    const effScale = REST.scale + (tgt.scale - REST.scale) * tiltStrength;

    cur.rotY  = lerp(cur.rotY,  effRotY,  0.08);
    cur.rotX  = lerp(cur.rotX,  effRotX,  0.08);
    cur.scale = lerp(cur.scale, effScale, 0.08);

    tablet.style.transform =
      `rotateY(${cur.rotY}deg) rotateX(${cur.rotX}deg) scale(${cur.scale})`;

    const moving =
      Math.abs(cur.rotY  - effRotY)  > 0.004 ||
      Math.abs(cur.rotX  - effRotX)  > 0.004 ||
      Math.abs(cur.scale - effScale) > 0.0003 ||
      Math.abs(tiltStrength - tiltTarget) > 0.002;

    rafId = moving ? requestAnimationFrame(tick) : null;
  }

  function startTick() { if (!rafId) rafId = requestAnimationFrame(tick); }

  heroSection.addEventListener('mousemove', e => {
    tiltTarget = 1;
    const hr = heroSection.getBoundingClientRect();
    const nx = (e.clientX - hr.left) / hr.width  - 0.5;
    const ny = (e.clientY - hr.top)  / hr.height - 0.5;

    tgt.rotY  =  nx * 26;
    tgt.rotX  = -ny * 20;
    tgt.scale = 1.04;

    const tr = tablet.getBoundingClientRect();
    const sx = ((e.clientX - tr.left) / tr.width)  * 100;
    const sy = ((e.clientY - tr.top)  / tr.height) * 100;
    shine.style.background =
      `radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,.18) 0%, rgba(255,255,255,.04) 40%, transparent 70%)`;
    shine.style.opacity = '1';

    startTick();
  });

  heroSection.addEventListener('mouseleave', () => {
    tiltTarget = 0;
    shine.style.opacity = '0';
    startTick();
  });
}

/* ── MODALS ── */
function openModal(id) {
  document.getElementById(id).classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
  document.body.style.overflow = '';
}

document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) closeModal(m.id); });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.show').forEach(m => closeModal(m.id));
});

/* ── ROTA AO VIVO ── */
{
  const rtPath    = document.getElementById('rt-routePath');
  const rtSvg     = document.getElementById('rt-map');
  const rtWrap    = document.querySelector('.rota-svg-wrap');
  const rtCar     = document.getElementById('rt-car');
  const rtCarGlow = document.getElementById('rt-carGlow');
  const rtCarDot  = document.getElementById('rt-carDot');
  const rtAdCard  = document.getElementById('rt-adCard');
  const rtReplay  = document.getElementById('rt-replayBtn');

  if (rtPath && rtSvg) {
    const RT_LEN   = 1400;
    const RT_DRAW  = 2400;
    const RT_DRIVE = 8000;
    const ADVERTISERS = [
      { icon:'🍕', name:'Pizzaria Morumbi',  tag:'20% OFF hoje'       },
      { icon:'💇', name:'Salão Bella Vista',  tag:'Combo especial'     },
      { icon:'🏥', name:'Clínica Vida+',      tag:'1ª consulta grátis' },
      { icon:'☕', name:'Café do Bairro',      tag:'Fidelidade dobrada' },
    ];
    const WAYPOINTS = [0, 0.28, 0.55, 0.78];

    let rtRaf = null, rtT0 = null, rtPhase = 'draw', rtLastAd = -1;
    let rtPts = [];

    const rtPulses = ['rt-pz1','rt-pz2','rt-pz3'].map(id => document.getElementById(id));
    const rtGlows  = ['rt-g1','rt-g2','rt-g3'].map(id  => document.getElementById(id));

    function rtPrecompute() {
      rtPts = [];
      for (let i = 0; i <= 1000; i++)
        rtPts.push(rtPath.getPointAtLength((i / 1000) * RT_LEN));
    }

    function rtSvgToPx(sx, sy) {
      const sr = rtSvg.getBoundingClientRect();
      const wr = rtWrap.getBoundingClientRect();
      return {
        x: sx * (sr.width / 700)  + (sr.left - wr.left),
        y: sy * (sr.height / 340) + (sr.top  - wr.top),
      };
    }

    function rtMoveCar(pt) {
      [rtCar, rtCarGlow, rtCarDot].forEach(el => {
        el.setAttribute('cx', pt.x);
        el.setAttribute('cy', pt.y);
      });
    }

    function rtPositionAd(sx, sy) {
      const px = rtSvgToPx(sx, sy);
      const cw = rtAdCard.offsetWidth || 200;
      const ch = rtAdCard.offsetHeight || 56;
      const ww = rtWrap.offsetWidth;
      const left = Math.max(8, Math.min(px.x - cw / 2, ww - cw - 8));
      rtAdCard.style.left = left + 'px';
      rtAdCard.style.top  = (px.y - ch - 22) + 'px';
    }

    function rtSetAd(idx) {
      if (idx === rtLastAd) return;
      rtLastAd = idx;
      const a = ADVERTISERS[idx % ADVERTISERS.length];
      rtAdCard.style.opacity = '0';
      setTimeout(() => {
        document.getElementById('rt-adIcon').textContent = a.icon;
        document.getElementById('rt-adName').textContent = a.name;
        document.getElementById('rt-adTag').textContent  = a.tag;
        rtAdCard.style.opacity = '';
      }, 200);
    }

    function rtShowPulses(p) {
      if (p > 0.07) { rtPulses[0].style.opacity='1'; rtGlows[0].style.opacity='1'; }
      if (p > 0.55) { rtPulses[1].style.opacity='1'; rtGlows[1].style.opacity='1'; }
      if (p > 0.55) { rtPulses[2].style.opacity='1'; rtGlows[2].style.opacity='1'; }
    }

    function rtTick(ts) {
      if (!rtT0) rtT0 = ts;
      const elapsed = ts - rtT0;

      if (rtPhase === 'draw') {
        const p = Math.min(elapsed / RT_DRAW, 1);
        rtPath.setAttribute('stroke-dashoffset', RT_LEN * (1 - p));
        rtShowPulses(p);
        if (p >= 1) { rtPhase = 'drive'; rtT0 = ts; rtAdCard.classList.add('visible'); }
      } else {
        const raw = (elapsed % RT_DRIVE) / RT_DRIVE;
        const pt  = rtPts[Math.min(Math.floor(raw * 1000), 999)];
        rtMoveCar(pt);
        rtPositionAd(pt.x, pt.y);
        const wpIdx = WAYPOINTS.findLastIndex(w => raw >= w);
        if (wpIdx >= 0) rtSetAd(wpIdx);
      }
      rtRaf = requestAnimationFrame(rtTick);
    }

    function rtStart() {
      if (rtRaf) cancelAnimationFrame(rtRaf);
      rtT0 = null; rtPhase = 'draw'; rtLastAd = -1;
      rtPath.setAttribute('stroke-dashoffset', RT_LEN);
      rtPulses.forEach(p => p.style.opacity = '0');
      rtGlows.forEach(g  => g.style.opacity = '0');
      rtAdCard.classList.remove('visible');
      rtMoveCar({ x: 0, y: 180 });
      rtRaf = requestAnimationFrame(rtTick);
    }

    function rtStop() {
      if (rtRaf) { cancelAnimationFrame(rtRaf); rtRaf = null; }
    }

    rtPrecompute();
    rtReplay.addEventListener('click', rtStart);
    window.addEventListener('resize', () => {
      const pt = rtPts[0];
      if (pt) rtPositionAd(pt.x, pt.y);
    });

    /* inicia só quando a seção entra na viewport */
    const rtObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { rtStart(); rtObserver.disconnect(); }
      });
    }, { threshold: 0.3 });
    rtObserver.observe(document.querySelector('.rota-card'));
  }
}

/* ── COMO FUNCIONA: altura estável ao trocar abas ── */
function stabilizeComoHeight() {
  const comoContents = document.querySelectorAll('.como-content');
  if (!comoContents.length) return;
  comoContents.forEach(c => { c.style.minHeight = ''; c.style.display = 'block'; c.style.visibility = 'hidden'; });
  const maxH = Math.max(...[...comoContents].map(c => c.offsetHeight));
  comoContents.forEach(c => { c.style.display = ''; c.style.visibility = ''; c.style.minHeight = maxH + 'px'; });
}
document.fonts.ready.then(stabilizeComoHeight);
window.addEventListener('resize', stabilizeComoHeight, { passive: true });

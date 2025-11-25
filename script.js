// ================== THEME TOGGLE (DARK MODE DEFAULT) ==================
const body = document.body;
const themeToggle = document.getElementById('themeToggle');

// baca preferensi dari localStorage
const savedTheme = localStorage.getItem('taskmaster-theme');

if (savedTheme === 'light') {
  // kalau pernah pilih light
  body.classList.add('light');
  themeToggle.innerHTML = '<span>🌙</span> Mode Gelap';
} else {
  // default pertama kali dark mode
  body.classList.add('dark');
  themeToggle.innerHTML = '<span>☀️</span> Mode Terang';
}

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  if (isDark) {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('taskmaster-theme', 'light');
    themeToggle.innerHTML = '<span>🌙</span> Mode Gelap';
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('taskmaster-theme', 'dark');
    themeToggle.innerHTML = '<span>☀️</span> Mode Terang';
  }
});

// ================== NAV TOGGLE (MOBILE) ==================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ================== SCROLL REVEAL ANIMATIONS ==================
const revealElements = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((el) => observer.observe(el));

// ================== CUSTOM CURSOR ==================
const cursorDot = document.querySelector('.cursor-dot');

window.addEventListener('mousemove', (e) => {
  cursorDot.style.top = e.clientY + 'px';
  cursorDot.style.left = e.clientX + 'px';
});

window.addEventListener('mousedown', () => {
  cursorDot.classList.add('click');
});

window.addEventListener('mouseup', () => {
  cursorDot.classList.remove('click');
});

// efek membesar saat hover 
const interactiveSelectors =
  'a, button, .feature-card, .hero-preview, .showcase-image-frame';
const interactiveEls = document.querySelectorAll(interactiveSelectors);

interactiveEls.forEach((el) => {
  el.addEventListener('mouseenter', () =>
    cursorDot.classList.add('link-hover')
  );
  el.addEventListener('mouseleave', () =>
    cursorDot.classList.remove('link-hover')
  );
});

// ================== PARALLAX EFFECT HERO BG ==================
const heroBg = document.querySelector('.hero-parallax-bg');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  heroBg.style.transform = `translate3d(0, ${scrollY * -0.25}px, 0)`;
});

// ==================  ANIMATION TEXT ==================
const typed = new Typed('#func-title', {
  strings: ['mengatur semua tugasmu.', 'mengingatkan tugasmu.', 'menyimpan daftar tugasmu.', 'membuatmu lebih produktif.'],
  typeSpeed: 75,
  loop: true,
});

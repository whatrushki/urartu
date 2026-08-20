// ==========================================
// 1️⃣ РЕГИСТРИРУЕМ SCROLLTRIGGER
// ==========================================
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 2️⃣ НАСТРОЙКА SCROLLTRIGGER
// ==========================================
ScrollTrigger.config({
  ignoreMobileResize: true,
  // markers: true // выключите на проде
});

// ==========================================
// 3️⃣ ИНИЦИАЛИЗАЦИЯ LENIS
// ==========================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1.5,
});

// ==========================================
// 4️⃣ СВЯЗЫВАЕМ LENIS С SCROLLTRIGGER (В ОБЕ СТОРОНЫ!)
// ==========================================
// 1. Lenis передает координаты в ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

// 2. ScrollTrigger при изменении высоты (pinning) обновляет размеры Lenis:
ScrollTrigger.addEventListener('refresh', () => {
  lenis.resize();
});

// ==========================================
// 5️⃣ ИНТЕГРАЦИЯ С GSAP TICKER
// ==========================================
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// ==========================================
// 6️⃣ ЗАПУСКАЕМ ВСЁ ПОСЛЕ ЗАГРУЗКИ DOM
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const initSafe = (fn) => {
    try { if (typeof fn === 'function') fn(); } catch (e) { console.warn(e); }
  };

  // На info.html нужны только эти секции:
  initSafe(initDecorations);
  initSafe(initContacts);
  initSafe(initHero);
  initSafe(initHistory);
  initSafe(initSymbols);
  initSafe(initDances);
  initSafe(initCostumes);
  initSafe(initDirector);
  initSafe(initEnsemble);
  initSafe(initDevelopers);
  initSafe(initContacts);
  initSafe(initTextAnimations);

  ScrollTrigger.refresh();
  lenis.resize();
});

// ==========================================
// 7️⃣ ОБНОВЛЯЕМ ПРИ ПОЛНОЙ ЗАГРУЗКЕ КАРТИНОК И РЕСАЙЗЕ
// ==========================================
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  lenis.resize();
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
    lenis.resize();
  }, 250);
});
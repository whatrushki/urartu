// ==========================================
// 1️⃣ РЕГИСТРИРУЕМ SCROLLTRIGGER
// ==========================================
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 2️⃣ НАСТРОЙКА SCROLLTRIGGER (ГЛОБАЛЬНАЯ)
// ==========================================
ScrollTrigger.config({
  ignoreMobileResize: true,
  markers: true
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
// 4️⃣ СВЯЗЫВАЕМ LENIS С SCROLLTRIGGER
// ==========================================
lenis.on('scroll', ScrollTrigger.update); // 👈 ИСПРАВЛЕНО

// ==========================================
// 5️⃣ ИНТЕГРАЦИЯ С GSAP TICKER
// ==========================================
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// ==========================================
// 6️⃣ ТВОИ АНИМАЦИИ
// ==========================================
console.log(typeof initHero);

// ==========================================
// 7️⃣ ЗАПУСКАЕМ ВСЁ ПОСЛЕ ЗАГРУЗКИ
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initHistory();
  initCostumes();
  initDecorations();
  
  // Обновляем ScrollTrigger
  ScrollTrigger.refresh(); // 👈 ИСПРАВЛЕНО
});

// ==========================================
// 8️⃣ ОБНОВЛЯЕМ ПРИ РЕСАЙЗЕ
// ==========================================
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh(); // 👈 ИСПРАВЛЕНО
  }, 250);
});
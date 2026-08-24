// ==========================================
// 1️⃣ РЕГИСТРАЦИЯ GSAP И ПЛАГИНОВ
// ==========================================
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true, // Игнорировать скачки адресной строки
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // Не делать лишних refresh при скролле
});

// ==========================================
// 2️⃣ ИНИЦИАЛИЗАЦИЯ LENIS
// ==========================================

// Проверяем: мобилка или ПК
const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;

// Инициализируем Lenis ТОЛЬКО если это компьютер
let lenis = null;

if (!isMobile) {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  ScrollTrigger.addEventListener('refresh', () => lenis?.resize());

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Блокируем скролл на старте
  lenis.stop();
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

// ==========================================
// 3️⃣ УМНЫЙ ФИЛЬТР КРИТИЧЕСКИХ ИЗОБРАЖЕНИЙ
// ==========================================
function isCriticalImage(img) {
  // 1. Ноты в танцах ОБЯЗАТЕЛЬНО ждем
  if (img.classList.contains('dances__note') || img.closest('.dances__notes')) {
    return true;
  }

  // 2. Игнорируем обычные декоративные элементы (они absolute)
  if (img.classList.contains('decoration')) {
    return false;
  }

  // 3. Игнорируем облака и фон
  if (img.closest('.contacts__clouds') || img.closest('.director__clouds') || img.classList.contains('symbols__carpet')) {
    return false;
  }

  // 4. Игнорируем мелкие детали-орнаменты костюмов (ждем только главную иллюстрацию 1-го костюма)
  if (img.classList.contains('costume__asset')) {
    return false;
  }

  // Все остальные (Hero, Церковь, Фото руководителя, Карточки танцев, Ансамбль, Команда) — ЖДЕМ
  return true;
}

// Переменная для бесконечной анимации логотипа
let logoLoopTimeline = null;

// ==========================================
// 1️⃣ ЗАПУСК БЕСКОНЕЧНОЙ ЖИВОЙ АНИМАЦИИ ЛОГОТИПА
// ==========================================
function startInfiniteLogoAnimation() {
  const logoPaths = document.querySelectorAll('.preloader-logo-svg path, .preloader-logo-svg circle');
  if (!logoPaths.length) return;

  // Измеряем точную длину каждого штриха
  logoPaths.forEach(path => {
    if (path.getTotalLength) {
      const length = path.getTotalLength();
      path.dataset.length = length;
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    }
  });

  // Создаем бесконечный бесшовный цикл: зарисовка -> мерцание -> возврат
  logoLoopTimeline = gsap.timeline({ repeat: -1, yoyo: true });

  logoLoopTimeline
    .to(logoPaths, {
      strokeDashoffset: 0,
      duration: 1.6,
      ease: "power2.inOut",
      stagger: {
        amount: 0.3,
        from: "center"
      }
    })
    .to(logoPaths, {
      fillOpacity: 0.7,
      duration: 0.5,
      ease: "power1.inOut"
    }, "-=0.2");
}

// ==========================================
// 2️⃣ ЗАГРУЗКА КРИТИЧЕСКИХ ФАЙЛОВ (ОБНОВЛЯЕТ ТОЛЬКО ПРОГРЕСС-БАР)
// ==========================================
function preloadCriticalAssets() {
  const progressBar = document.getElementById('preloaderProgress');
  const percentText = document.getElementById('preloaderPercent');

  const allImages = Array.from(document.querySelectorAll('img'));
  const criticalImages = allImages.filter(isCriticalImage);

  criticalImages.forEach(img => {
    img.loading = 'eager';
  });

  const uniqueSrcs = Array.from(
    new Set(
      criticalImages
        .map(img => img.src || img.getAttribute('src'))
        .filter(src => src && !src.startsWith('data:'))
    )
  );

  let loadedCount = 0;
  const total = uniqueSrcs.length || 1;

  const updateProgress = () => {
    loadedCount++;
    const percent = Math.min(100, Math.round((loadedCount / total) * 100));

    // Обновляем шкалу и проценты независимо от логотипа
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (percentText) percentText.textContent = `${percent}%`;
  };

  const promises = uniqueSrcs.map(src => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;

      const onFinish = () => {
        if (img.decode) {
          img.decode().then(() => { updateProgress(); resolve(); })
            .catch(() => { updateProgress(); resolve(); });
        } else {
          updateProgress();
          resolve();
        }
      };

      if (img.complete && img.naturalWidth !== 0) {
        onFinish();
      } else {
        img.onload = onFinish;
        img.onerror = () => { updateProgress(); resolve(); };
      }
    });
  });

  const fontsPromise = document.fonts ? document.fonts.ready : Promise.resolve();
  return Promise.all([...promises, fontsPromise]);
}

// ==========================================
// 3️⃣ ОБЩИЙ ЗАПУСК
// ==========================================
async function initAppPreloader() {
  const preloader = document.getElementById('preloader');

  if (!preloader) {
    startApplication();
    return;
  }

  // 🚀 1. Сразу же запускаем бесконечную анимацию орнамента
  startInfiniteLogoAnimation();

  // ⏳ 2. Ждем реальной загрузки картинок в фоне
  await preloadCriticalAssets();

  // 🎯 3. Картинки загружены: останавливаем цикл и заливаем логотип на 100%
  if (logoLoopTimeline) {
    logoLoopTimeline.kill();
  }

  const logoPaths = document.querySelectorAll('.preloader-logo-svg path, .preloader-logo-svg circle');

  // Эффектная финальная фиксация логотипа
  await new Promise(resolve => {
    gsap.to(logoPaths, {
      strokeDashoffset: 0,
      fillOpacity: 1,
      strokeWidth: 0,
      duration: 0.35,
      ease: "power2.out",
      onComplete: resolve
    });
  });

  await new Promise(r => setTimeout(r, 200));

  // 🚀 4. Убираем прелоадер и стартуем сайт
  gsap.to(preloader, {
    opacity: 0,
    y: -30,
    duration: 0.6,
    ease: "power3.inOut",
    onComplete: () => {
      preloader.style.display = 'none';
      startApplication();
    }
  });
}

function startApplication() {
  // Разблокируем скролл
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';

  if (!isMobile) {
    lenis?.start();
  }

  const runSafe = (fn) => {
    try { if (typeof fn === 'function') fn(); } catch (e) { console.warn(e); }
  };

  // Запуск секций
  runSafe(initHero);
  runSafe(initHistory);
  runSafe(initSymbols);
  runSafe(initDances);
  runSafe(initCostumes);
  runSafe(initDirector);
  runSafe(initEnsemble);
  runSafe(initDevelopers);
  runSafe(initDecorations);
  runSafe(initContacts);

  if (window.innerWidth > 768) {
    runSafe(initTextAnimations);
  }

  // Двойной RAF для идеального расчета ScrollTrigger
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      lenis.resize();
    });
  });
}

// Старт
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAppPreloader);
} else {
  initAppPreloader();
}

// Resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
    lenis?.resize();
  }, 250);
});
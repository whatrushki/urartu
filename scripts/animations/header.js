// =========================================================
// ФИКСИРОВАННАЯ ШАПКА, ДИНАМИЧЕСКИЙ ФОН И БУРГЕР-МЕНЮ
// =========================================================

function initSiteHeader() {
  const header = document.querySelector("#site-header");
  const burger = document.querySelector("#burger-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu__link, .site-header__link");

  if (!header) return;

  // Секции сайта, на которых шапка становится тёмной со светлым текстом
  const darkSections = new Set([
    "history",
    "symbols",
    "dances",
    "costumes",
    "director",
    "ensemble",
    "developers"
  ]);

  const sections = Array.from(document.querySelectorAll("section[id]"));

  let isMenuOpen = false;

  const costumesSection = document.querySelector("#costumes");
  const directorSection = document.querySelector("#director");

  // 1. Определение активной темы, видимости и состояния скролла
  const updateHeaderState = () => {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Стеклянный фон появляется при скролле дальше 30px
    if (scrollY > 30) {
      header.classList.add("site-header--scrolled");
    } else {
      header.classList.remove("site-header--scrolled");
    }

    // Скрытие шапки перед блоком костюмов и возвращение на блоке преподавателя
    if (costumesSection && directorSection) {
      const costumesRect = costumesSection.getBoundingClientRect();
      const directorRect = directorSection.getBoundingClientRect();

      // "Немного не доходя до блока костюмов" (~220px до верха экрана)
      // и пока блок преподавателя не приблизился к шапке (directorRect.top > 80)
      const inCostumesZone = costumesRect.top <= 120 && directorRect.top > 80;

      if (inCostumesZone && !isMenuOpen) {
        header.classList.add("site-header--hidden");
      } else {
        header.classList.remove("site-header--hidden");
      }
    }

    // Определяем секцию под шапкой (на линии 55px от верха)
    const probeY = 55;
    let currentDark = false;

    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= probeY && rect.bottom > probeY) {
        if (darkSections.has(sections[i].id)) {
          currentDark = true;
        }
        break;
      }
    }

    if (currentDark) {
      header.classList.add("site-header--dark-theme");
    } else {
      header.classList.remove("site-header--dark-theme");
    }
  };

  // Слушатель скролла (пассивный для максимальной производительности)
  window.addEventListener("scroll", updateHeaderState, { passive: true });
  if (window.lenis) {
    window.lenis.on("scroll", updateHeaderState);
  }
  updateHeaderState();

  // 2. Логика бургер-меню для мобилок
  if (burger && mobileMenu) {

    const openMenu = () => {
      isMenuOpen = true;
      header.classList.add("menu-is-open");
      header.classList.remove("site-header--hidden");
      burger.classList.add("is-active");
      burger.setAttribute("aria-expanded", "true");
      mobileMenu.classList.add("is-open");
      mobileMenu.setAttribute("aria-hidden", "false");

      // Блокируем скролл страницы
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (window.lenis) window.lenis.stop();
    };

    const closeMenu = () => {
      isMenuOpen = false;
      header.classList.remove("menu-is-open");
      burger.classList.remove("is-active");
      burger.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("is-open");
      mobileMenu.setAttribute("aria-hidden", "true");

      // Разблокируем скролл страницы
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (window.lenis) window.lenis.start();

      updateHeaderState();
    };

    burger.addEventListener("click", () => {
      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    const closeBtn = document.querySelector("#mobile-menu-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeMenu);
    }

    // Закрытие по Escape
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    });

    // Плавный скролл при клике на пункты меню
    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            if (isMenuOpen) {
              closeMenu();
            }

            // Плавная прокрутка через Lenis или нативный скролл
            if (window.lenis) {
              window.lenis.scrollTo(target, { offset: -70 });
            } else {
              const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 70;
              window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
              });
            }
          }
        }
      });
    });

    // Клик на затемненную область оверлея закрывает меню
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu && isMenuOpen) {
        closeMenu();
      }
    });
  }

  // Клик на логотип плавно скроллит наверх
  const logoLink = document.querySelector(".site-header__logo-link");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }
}

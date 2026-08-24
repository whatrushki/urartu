/* =========================================================
   ОБЩИЕ НАСТРОЙКИ
========================================================= */

const textDefaults = {
    duration: 0.8,
    ease: "power3.out",
    opacity: 0,
    y: 35,
    once: true
};


/* =========================================================
   ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ
========================================================= */

function animateText(selector, options = {}) {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    gsap.set(elements, {
        opacity: 0,
        y: options.y ?? textDefaults.y
    });

    elements.forEach((element, index) => {

        gsap.to(element, {
            opacity: 1,
            y: 0,

            duration: options.duration ?? textDefaults.duration,
            delay: options.delay
                ? options.delay * index
                : 0,

            ease: options.ease ?? textDefaults.ease,

            scrollTrigger: {
                trigger: element,
                start: options.start ?? "top 85%",
                toggleActions: "play none none none",
                once: true
            }
        });

    });
}


/* =========================================================
   HERO
========================================================= */

function animateHeroText() {

    const title = document.querySelector(".hero__title");
    const subtitle = document.querySelector(".hero__subtitle");
    const links = document.querySelectorAll(".hero__link");

    if (title) {

        gsap.from(title, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });

    }

    if (subtitle) {

        gsap.from(subtitle, {
            opacity: 0,
            y: 25,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.7
        });

    }

    if (links.length) {

        gsap.from(links, {
            opacity: 0,
            y: -20,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.3
        });

    }
}


/* =========================================================
   HISTORY
========================================================= */

function animateHistoryText() {

    // Все заголовки истории
    animateText(".history__title", {
        y: 50,
        duration: 0.9
    });


    // Дата
    animateText(".history__date", {
        y: 30,
        duration: 0.7
    });


    // Основные тексты
    animateText(".history__text", {
        y: 25,
        duration: 0.8
    });


    // Подпись священника
    animateText(".history__priest-label", {
        y: 20,
        duration: 0.7
    });


    // Цитата
    animateText(".history__quote-armenian", {
        y: 30,
        duration: 0.9
    });


    animateText(".history__quote-translation", {
        y: 20,
        duration: 0.7
    });
}


/* =========================================================
   SYMBOLS
========================================================= */

function animateSymbolsText() {

    // Главный заголовок
    animateText(".symbols__title", {
        y: 50,
        duration: 0.9
    });


    // Основное описание
    animateText(".symbols__description", {
        y: 30,
        duration: 0.8
    });


    // Подписи элементов символа
    animateText(".symbols__element-label", {
        y: 25,
        duration: 0.7,
        delay: 0.1
    });


    // Текст перед названием
    animateText(".symbols__name-text", {
        y: 25,
        duration: 0.8
    });


    // Само URARTU
    animateText(".symbols__name-title", {
        y: 40,
        duration: 0.9
    });


    // Описание названия
    animateText(".symbols__name-description", {
        y: 25,
        duration: 0.8
    });
}


/* =========================================================
   DANCES
========================================================= */

function animateDancesText() {

    // Главный заголовок
    animateText(".dances__title", {
        y: 50,
        duration: 0.9
    });


    // Подзаголовок
    animateText(".dances__subtitle", {
        y: 25,
        duration: 0.8
    });


    // Миссия
    animateText(".dances__mission-text", {
        y: 30,
        duration: 0.8
    });


    // Заголовок репертуара
    animateText(".dances__repertoire-title", {
        y: 25,
        duration: 0.8
    });


    // Названия карточек
    animateText(".dances__card-label", {
        y: 30,
        duration: 0.7,
        delay: 0.12
    });


    // Финальная цитата
    animateText(".dances__quote", {
        y: 35,
        duration: 0.9
    });
}


/* =========================================================
   COSTUMES
========================================================= */

function animateCostumesText() {

    // Заголовок
    animateText(".costumes__title", {
        y: 50,
        duration: 0.9
    });


    // Подзаголовок
    animateText(".costumes__subtitle", {
        y: 25,
        duration: 0.8
    });

    // // Категории костюмов
    // animateText(".costume__category", {
    //     y: 20,
    //     duration: 0.6
    // });


    // // Подписи деталей
    // animateText(".costume__asset-label", {
    //     y: 15,
    //     duration: 0.5
    // });


    // Финальная цитата
    animateText(".costumes__quote", {
        y: 35,
        duration: 0.9
    });
}


/* =========================================================
   DIRECTOR
========================================================= */

function animateDirectorText() {

    // Заголовок
    animateText(".director__title", {
        y: 50,
        duration: 0.9
    });


    // Имя
    animateText(".director__name", {
        y: 30,
        duration: 0.8
    });


    // Цитата
    animateText(".director__quote", {
        y: 25,
        duration: 0.8
    });


    // Биография
    animateText(".director__text", {
        y: 30,
        duration: 0.8
    });
}


/* =========================================================
   ENSEMBLE
========================================================= */

function animateEnsembleText() {

    // Главный заголовок
    animateText(".ensemble__title", {
        y: 50,
        duration: 0.9
    });


    // Первая цитата
    animateText(".ensemble__quote-text-1", {
        y: 35,
        duration: 0.9
    });


    // Вторая цитата
    animateText(".ensemble__quote-text-2", {
        y: 35,
        duration: 0.9
    });


    // Финальная цитата
    animateText(".ensemble__quote-text-3", {
        y: 35,
        duration: 0.9
    });


    // Кнопка
    animateText(".ensemble__link", {
        y: 25,
        duration: 0.7
    });
}


/* =========================================================
   DEVELOPERS
========================================================= */

function animateDevelopersText() {

    // Заголовок
    animateText(".developers__title", {
        y: 50,
        duration: 0.9
    });


    // Подзаголовок
    animateText(".developers__subtitle", {
        y: 25,
        duration: 0.8
    });
}

/* =========================================================
   ОБЩИЕ НАСТРОЙКИ
   ========================================================= */

const reveal = {
    duration: 1,
    ease: "power3.out",
    start: "top 82%",
};


/* =========================================================
   FILIALS
   ========================================================= */

function animateFilialsText() {

    const section = document.querySelector("#filials");

    if (!section) return;


    /* -----------------------------------------------------
       ЗАГОЛОВОК
    ----------------------------------------------------- */

    const title = section.querySelector(".filials-section__title");

    if (title) {

        gsap.from(title, {
            opacity: 0,
            y: 60,
            duration: 1.1,
            ease: "power3.out",
            clearProps: "transform",

            scrollTrigger: {
                trigger: title,
                start: reveal.start,
                once: true
            }
        });

    }


    /* -----------------------------------------------------
       ЛЕГЕНДА ГРУПП
    ----------------------------------------------------- */

    const groups = section.querySelector(".filials-section__groups");

    if (groups) {

        gsap.from(groups, {
            opacity: 0,
            y: 35,
            duration: 0.9,
            delay: 0.15,
            ease: "power3.out",
            clearProps: "transform",

            scrollTrigger: {
                trigger: groups,
                start: reveal.start,
                once: true
            }
        });

    }


    /* -----------------------------------------------------
       ГОРОД
    ----------------------------------------------------- */

    const city = section.querySelector(".filials__city");

    if (city) {

        gsap.from(city, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform",

            scrollTrigger: {
                trigger: city,
                start: reveal.start,
                once: true
            }
        });

    }


    /* -----------------------------------------------------
       КАРТОЧКИ
       
       НЕ АНИМИРУЕМ КАЖДУЮ КАРТОЧКУ ОТДЕЛЬНО.
       Весь контейнер появляется одним блоком.
    ----------------------------------------------------- */

    const cards = section.querySelector(".filials-section__cards");

    if (cards) {

        gsap.from(cards, {
            opacity: 0,
            y: 70,
            scale: 0.97,
            duration: 1.1,
            ease: "power3.out",

            /*
             * Очень важно:
             * после завершения GSAP убирает transform.
             *
             * Поэтому hover-анимации карточек,
             * заданные через CSS, продолжают работать.
             */
            clearProps: "transform",

            scrollTrigger: {
                trigger: cards,
                start: "top 80%",
                once: true
            }
        });

    }


    /* -----------------------------------------------------
       ДЕКОРАТИВНЫЕ ГРАНАТЫ
       
       Если decorations.js уже управляет ими,
       здесь НЕ трогаем.
    ----------------------------------------------------- */
}


/* =========================================================
   CONTACTS
   ========================================================= */

function animateContactsText() {

    const section = document.querySelector("#contacts");

    if (!section) return;


    /* -----------------------------------------------------
       ЗАГОЛОВОК
    ----------------------------------------------------- */

    const title = section.querySelector(".contacts-section__title");

    if (title) {

        gsap.from(title, {
            opacity: 0,
            y: 70,
            duration: 1.1,
            ease: "power3.out",
            clearProps: "transform",

            scrollTrigger: {
                trigger: title,
                start: "top 82%",
                once: true
            }
        });

    }


    /* -----------------------------------------------------
       БЛОК КОНТАКТОВ
       
       Телефон + соцсети появляются вместе.
    ----------------------------------------------------- */

    const contacts = section.querySelector(".footer__contacts");

    if (contacts) {

        gsap.from(contacts, {
            opacity: 0,
            y: 60,
            duration: 1,
            delay: 0.1,
            ease: "power3.out",
            clearProps: "transform",

            scrollTrigger: {
                trigger: contacts,
                start: "top 82%",
                once: true
            }
        });

    }


    /* -----------------------------------------------------
       КНОПКА "СВЯЗАТЬСЯ С НАМИ"
       
       Здесь специально не трогаем transform после появления,
       чтобы hover мог свободно работать.
    ----------------------------------------------------- */

    const cta = section.querySelector(".footer__cta-button");

    if (cta) {

        gsap.from(cta, {
            opacity: 0,
            y: 35,
            duration: 0.8,
            delay: 0.25,
            ease: "power3.out",
            clearProps: "transform",

            scrollTrigger: {
                trigger: contacts || cta,
                start: "top 82%",
                once: true
            }
        });

    }


    /* -----------------------------------------------------
       СОЦСЕТИ
       
       Весь блок появляется целиком.
    ----------------------------------------------------- */

    const socials = section.querySelector(".footer__socials");

    if (socials) {

        gsap.from(socials, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.4,
            ease: "power3.out",
            clearProps: "transform",

            scrollTrigger: {
                trigger: contacts || socials,
                start: "top 82%",
                once: true
            }
        });

    }


    /* -----------------------------------------------------
       ФИНАЛЬНЫЙ БЛОК
       
       Луна + фотография ансамбля.
       Анимация контейнера, а не каждого изображения.
    ----------------------------------------------------- */

    const finalBlock = section.querySelector(".footer__inner");

    if (finalBlock) {

        gsap.from(finalBlock, {
            opacity: 0,
            y: 80,
            scale: 0.98,
            duration: 1.2,
            delay: 0.1,
            ease: "power3.out",
            clearProps: "transform",

            scrollTrigger: {
                trigger: finalBlock,
                start: "top 85%",
                once: true
            }
        });

    }


    /* -----------------------------------------------------
       FOOTER
    ----------------------------------------------------- */

    const footer = section.querySelector(".developers__footer");

    if (footer) {

        gsap.from(footer, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform",

            scrollTrigger: {
                trigger: footer,
                start: "top 90%",
                once: true
            }
        });

    }
}



/* =========================================================
   ЗАПУСК
========================================================= */

function initTextAnimations() {

    animateHeroText();

    animateHistoryText();

    animateSymbolsText();

    animateDancesText();

    animateCostumesText();

    animateDirectorText();

    animateEnsembleText();

    animateDevelopersText();

    animateFilialsText();

    // animateContactsText();

    ScrollTrigger.refresh();
}
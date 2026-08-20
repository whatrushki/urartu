function initEnsemble() {
    const element = document.querySelector("#ensemble");
    if (!element) return;

    const cloud1 = document.querySelector(".ensemble__cloud--1");
    const cloud2 = document.querySelector(".ensemble__cloud--2");
    const cloud3 = document.querySelector(".ensemble__cloud--3");
    const cloud4 = document.querySelector(".ensemble__cloud--4");
    const moon = document.querySelector(".ensemble__moon");

    if (moon) {
        gsap.fromTo(moon, {
            rotation: '-=10deg'
        }, {
            rotation: '+=10deg',
            duration: 4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    }

    if (cloud1) {
        gsap.to(cloud1, {
            x: "-=8vw",
            duration: 5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    }

    if (cloud2) {
        gsap.to(cloud2, {
            x: "+=5vw",
            duration: 4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    }

    if (cloud3) {
        gsap.to(cloud3, {
            x: "+=10vw",
            duration: 6,
            delay: 1.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    }

    if (cloud4) {
        gsap.to(cloud4, {
            x: "-=7vw",
            duration: 4.5,
            delay: 2.1,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    }

    const quote = document.querySelector(".ensemble__quote-3");
    const star = quote?.querySelector(".ensemble__quote-star");

    if (quote && star) {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: quote,
                start: "top 90%",
                end: "bottom 40%",
                scrub: 1
            }
        });

        // 1. Комета прилетает снизу
        tl.fromTo(star,
            {
                y: '15vw',
                x: '-70vw',
                rotation: -30
            },
            {
                y: 0,
                x: 0,
                rotation: 0,
                ease: "power2.out",
                duration: 1
            }
        );

        // 2. Немного покачалась на месте
        tl.to(star, {
            rotation: 8,
            duration: 0.1,
            ease: "sine.inOut"
        });

        tl.to(star, {
            rotation: -6,
            duration: 0.1,
            ease: "sine.inOut"
        });

        tl.to(star, {
            rotation: 4,
            duration: 0.1,
            ease: "sine.inOut"
        });

        tl.to(star, {
            rotation: 0,
            duration: 0.1,
            ease: "sine.inOut"
        });

        // 3. Улетает вниз
        tl.to(star, {
            y: "15vw",
            x: '70vw',
            rotation: 30,
            ease: "power2.in",
            duration: 1
        });
    }
}
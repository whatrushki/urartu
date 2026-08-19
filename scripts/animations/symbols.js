function initSymbols() {
    const element = document.querySelector("#symbols");
    if (!element) return;

    gsap.fromTo('.symbols__main-image',
        {
            scale: 0.8,
            y: '6vw',
            x: '2vw'
        },
        {
            scale: 1,
            y: 0,
            x: '2vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.symbols__title',
                start: 'bottom bottom',
                end: 'bottom 50%',
                scrub: 1
            }
        }
    );

    gsap.utils.toArray(".symbols__carpet").forEach((carpet, i) => {
        const speeds = [-10, -15, -20, -12];

        gsap.to(carpet, {
            y: `${speeds[i]}vh`,
            ease: "none",
            scrollTrigger: {
                trigger: carpet,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

    });

    gsap.utils.toArray(".symbols__element").forEach((el, i) => {
        gsap.fromTo(el,
            {
                scale: 0.7
            },
            {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom 80%",
                    scrub: 1
                }
            });
    });
}
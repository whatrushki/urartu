function initDevelopers() {
    const element = document.querySelector("#developers");
    if (!element) return;

    const scrubVal = window.getAppScrub ? window.getAppScrub(0.8) : 0.8;

    gsap.fromTo('.developers__column--left',
        {
            x: '-20vw'
        },
        {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.developers__content',
                start: 'top bottom',
                end: 'top 50%',
                scrub: scrubVal
            }
        });

    gsap.fromTo('.developers__column--right',
        {
            x: '20vw'
        },
        {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.developers__content',
                start: 'top bottom',
                end: 'top 50%',
                scrub: scrubVal
            }
        });

    gsap.fromTo('.developers__team-image',
        {
            y: '14vw',
        },
        {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.developers__content',
                start: 'top bottom',
                end: 'top 60%',
                scrub: scrubVal
            }
        });
}
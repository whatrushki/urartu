function initDevelopers() {
    const element = document.querySelector("#developers");
    if (!element) return;

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
                scrub: 1
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
                scrub: 1
            }
    });
}
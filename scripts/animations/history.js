function initHistory() {
    const element = document.querySelector("#history");
    if (!element) return;

    gsap.to('.history__decoration--ishhanac-1', {
        x: '-28vw',
        ease: 'none',
        scrollTrigger: {
            trigger: '.history__date-block',
            start: 'top bottom',
            end: 'top 40%',
            scrub: 1
        }
    });

    gsap.to('.history__decoration--ishhanac-2', {
        x: '28vw',
        ease: 'none',
        scrollTrigger: {
            trigger: '.history__date-block',
            start: 'top bottom',
            end: 'top 40%',
            scrub: 1
        }
    });
}
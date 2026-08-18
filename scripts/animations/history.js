function initHistory() {
    const element = document.querySelector("#history");
    if (!element) return;

    gsap.to('.history__decoration--ishhanac-1', {
        x: '-28vw',
        scrollTrigger: {
            trigger: '.history__title--first',
            start: 'top bottom',
            scrub: 1
        }
    });

    gsap.to('.history__decoration--ishhanac-2', {
        x: '28vw',
        scrollTrigger: {
            trigger: '.history__title--first',
            start: 'top bottom',
            scrub: 1
        }
    });
}
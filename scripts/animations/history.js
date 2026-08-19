function initHistory() {
    const element = document.querySelector("#history");
    if (!element) return;

    gsap.to('.history__decoration--ishhanac-1', {
        x: '-28vw',
        ease: 'none',
        scrollTrigger: {
            trigger: '.history__date-block',
            start: 'top bottom',
            end: 'top 50%',
            scrub: 1
        }
    });

    gsap.to('.history__decoration--ishhanac-2', {
        x: '28vw',
        ease: 'none',
        scrollTrigger: {
            trigger: '.history__date-block',
            start: 'top bottom',
            end: 'top 50%',
            scrub: 1
        }
    });

    gsap.fromTo('.history__image--church',
        {
            x: '-20vw'
        },
        {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.history__title--second',
                start: 'top bottom',
                end: 'bottom 40%',
                scrub: 1
            }
        });

    gsap.fromTo('.history__image--alashkert',
        {
            y: '14vw',
            x: '-2vw'
        },
        {
            y: ' -5vw',
            x: '-2vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.history__text--secondary',
                start: 'bottom bottom',
                end: 'bottom 70%',
                scrub: 1
            }
        });
}
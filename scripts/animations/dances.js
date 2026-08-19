function initDances() {
    const element = document.querySelector("#dances");
    if (!element) return;

    gsap.fromTo('.dances__curtain--left',
        {
            y: '-2vw',
            x: '-6vw',
            scale: 0.8
        },
        {
            y: 0,
            x: '-0.5vw',
            scale: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.dances__curtain--left',
                start: 'top bottom',
                end: 'top 40%',
                scrub: 1
            }
        });

    gsap.fromTo('.dances__curtain--right',
        {
            y: '-2vw',
            x: '6vw',
            scale: 0.8
        },
        {
            y: 0,
            x: '0.5vw',
            scale: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.dances__curtain--right',
                start: 'top bottom',
                end: 'top 40%',
                scrub: 1
            }
        });

    gsap.fromTo('.dances__card-1',
        {
            x: '-12vw'
        },
        {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.dances__card-1',
                start: 'top bottom',
                end: 'top 40%',
                scrub: 1
            }
        });

    gsap.fromTo('.dances__card-2',
        {
            x: '10vw'
        },
        {
            x: '-6vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.dances__card-2',
                start: 'top bottom',
                end: 'top 40%',
                scrub: 1
            }
        });
}
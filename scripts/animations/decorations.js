function initDecorations() {
    const decorations = gsap.utils.toArray(".decoration");

    decorations.forEach((el) => {
        const base = gsap.getProperty(el, "rotation");
        const swing = gsap.utils.random(3, 6);

        gsap.fromTo(el,
            { rotation: base - swing },
            {
                rotation: base + swing,
                duration: gsap.utils.random(2.5, 4),
                delay: gsap.utils.random(0, 2),
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            }
        );
    });
}
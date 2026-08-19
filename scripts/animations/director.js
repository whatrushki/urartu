function initDirector() {
    const element = document.querySelector("#director");
    if (!element) return;

    const clouds = gsap.utils.toArray(".director__cloud");

    clouds.forEach((cloud) => {
        const x = gsap.utils.random(5, 10);
        const y = gsap.utils.random(1, 3);

        gsap.fromTo(
            cloud,
            {
                x: -x,
                y: y
            },
            {
                x: x,
                y: -y,
                duration: gsap.utils.random(3, 5),
                delay: gsap.utils.random(0, 3),
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            }
        );
    });
}
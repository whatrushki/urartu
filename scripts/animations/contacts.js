function initContacts() {
    const element = document.querySelector("#contacts");
    if (!element) return;

    const clouds = gsap.utils.toArray(".contacts__cloud");
    const tweens = [];

    clouds.forEach((cloud) => {
        const x = gsap.utils.random(5, 10);
        const y = gsap.utils.random(1, 3);

        tweens.push(
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
            )
        );
    });

    ScrollTrigger.create({
        trigger: element,
        onEnter: () => tweens.forEach(t => t.play()),
        onLeave: () => tweens.forEach(t => t.pause()),
        onEnterBack: () => tweens.forEach(t => t.resume()),
        onLeaveBack: () => tweens.forEach(t => t.pause())
    });
}
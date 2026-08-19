function initCostumes() {
    const section = document.querySelector("#costumes");
    const wrapper = section?.querySelector(".costumes__list");
    const track = section?.querySelector(".costumes__track");
    if (!section || !wrapper || !track) return;

    // Если ScrollTrigger уже создавался — удаляем старый
    ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
            trigger.kill();
        }
    });

    gsap.set(track, { x: 0 });

    const slides = [...track.querySelectorAll(".costume")];
    const getDistance = () =>
        Math.max(0, (slides.length - 1) * wrapper.clientWidth);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            pin: true,
            start: window.innerWidth < 630 ? "top" : "top -10%",
            end: () => `+=${getDistance()}`,
            scrub: 1,
            invalidateOnRefresh: true
        }
    });

    tl.to(track, {
        x: () => -getDistance(),
        ease: "none",
    });

    // tl.to(".costumes__header", {
    //     marginTop: "-4vw",
    //     ease: "none"
    // }, 0);

    ScrollTrigger.refresh();
}
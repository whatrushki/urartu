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

    initContactModal();
}

function initContactModal() {
    const ctaButton = document.querySelector(".footer__cta-button");
    const dialog = document.getElementById("contact-dialog");
    const closeBtn = document.getElementById("contactDialogClose");
    const copyBtn = document.getElementById("contactCopyBtn");

    if (!dialog || !ctaButton) return;

    ctaButton.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.showModal();
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            dialog.close();
        });
    }

    // Fallback для закрытия кликом по бекдропу (для браузеров без closedby)
    if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialog.addEventListener("click", (event) => {
            if (event.target !== dialog) return;
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (
                rect.top <= event.clientY &&
                event.clientY <= rect.bottom &&
                rect.left <= event.clientX &&
                event.clientX <= rect.right
            );
            if (!isInDialog) {
                dialog.close();
            }
        });
    }

    if (copyBtn) {
        const copyTextEl = copyBtn.querySelector(".contact-dialog__copy-text");
        const rawPhone = "+79882571929";

        copyBtn.addEventListener("click", async () => {
            let copied = false;
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(rawPhone);
                    copied = true;
                }
            } catch (err) {
                // Clipboard API может блокироваться без явного фокуса, пробуем fallback
            }

            if (!copied) {
                try {
                    const temp = document.createElement("input");
                    temp.value = rawPhone;
                    document.body.appendChild(temp);
                    temp.select();
                    copied = document.execCommand("copy");
                    document.body.removeChild(temp);
                } catch (e) {
                    console.warn("Fallback copy failed:", e);
                }
            }

            if (copied) {
                copyBtn.classList.add("copied");
                if (copyTextEl) copyTextEl.textContent = "Скопировано! ✓";

                setTimeout(() => {
                    copyBtn.classList.remove("copied");
                    if (copyTextEl) copyTextEl.textContent = "Скопировать";
                }, 2000);
            }
        });
    }
}
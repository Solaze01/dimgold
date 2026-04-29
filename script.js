const revealGroups = [
    ".header > *",
    ".hero-image",
    ".hero-overlay",
    ".companies",
    ".intro-grid > *",
    ".works-header > *",
    ".works-panel",
    ".testimonial-wrap > *",
    ".services-head > *",
    ".service-card",
    ".cta-panel > *"
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
    revealGroups.forEach((selector) => {
        const elements = document.querySelectorAll(selector);

        elements.forEach((element, index) => {
            element.classList.add("reveal");
            element.style.setProperty("--reveal-delay", `${index * 0.12}s`);
        });
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -12% 0px"
        }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
        observer.observe(element);
    });
}

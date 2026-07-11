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

const projectPages = {
    coocredit: {
        pageTitle: "DimGold - CooCredit",
        name: "CooCredit",
        title: "Digitizing African Contributions, Building Trust in Everyday Finance",
        aboutCopy: "CooCredit is a fintech platform designed to make money transfers, loans, bill payments, and Africa's traditional Ajo (cell contributions) simple, secure, and digital.",
        timeline: "2025 launch",
        team: "Cross-functional (design, dev, growth).",
        heroImage: "",
        galleryImages: []
    }
};

const renderProjectPage = () => {
    if (!document.body.classList.contains("project-page")) {
        return;
    }

    const slug = document.body.dataset.projectSlug || "coocredit";
    const project = projectPages[slug] || projectPages.coocredit;

    document.title = project.pageTitle || `DimGold - ${project.name}`;

    const titleEl = document.querySelector("[data-project-field='title']");
    if (titleEl) {
        titleEl.textContent = project.title;
    }

    document.querySelectorAll("[data-project-label='about']").forEach((element) => {
        element.textContent = `ABOUT ${project.name.toUpperCase()}`;
    });

    document.querySelectorAll("[data-project-copy='about']").forEach((element) => {
        element.textContent = project.aboutCopy;
    });

    document.querySelectorAll("[data-project-copy='timeline']").forEach((element) => {
        element.textContent = project.timeline;
    });

    document.querySelectorAll("[data-project-copy='team']").forEach((element) => {
        element.textContent = project.team;
    });

    const heroImageEl = document.querySelector("[data-project-hero-image]");
    if (heroImageEl && project.heroImage) {
        heroImageEl.src = project.heroImage;
        heroImageEl.alt = `${project.name} hero image`;
    }

    const galleryImages = document.querySelectorAll("[data-project-gallery-image]");
    galleryImages.forEach((element, index) => {
        const imagePath = project.galleryImages[index];
        if (imagePath) {
            element.src = imagePath;
            element.alt = `${project.name} gallery image ${index + 1}`;
        }
    });
};

renderProjectPage();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navBackdrop = document.querySelector(".nav-backdrop");
const navClose = document.querySelector(".nav-close");

const closeMenu = () => {
    if (!menuToggle || !nav) {
        return;
    }

    document.body.classList.remove("nav-open");
    nav.classList.remove("is-open");
    navBackdrop?.classList.remove("is-visible");
    menuToggle.setAttribute("aria-expanded", "false");
};

window.closeMobileNav = closeMenu;

const openMenu = () => {
    if (!menuToggle || !nav) {
        return;
    }

    document.body.classList.add("nav-open");
    nav.classList.add("is-open");
    navBackdrop?.classList.add("is-visible");
    menuToggle.setAttribute("aria-expanded", "true");
};

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        if (document.body.classList.contains("nav-open")) {
            closeMenu();
            return;
        }

        openMenu();
    });

    navBackdrop?.addEventListener("click", closeMenu);
    navBackdrop?.addEventListener("touchend", (event) => {
        event.preventDefault();
        closeMenu();
    });
    ["click", "touchend", "pointerup"].forEach((eventName) => {
        navClose?.addEventListener(eventName, (event) => {
            if (eventName !== "click") {
                event.preventDefault();
            }

            event.stopPropagation();
            closeMenu();
        });
    });

    nav.querySelectorAll("a, button").forEach((item) => {
        item.addEventListener("click", closeMenu);
    });

    nav.addEventListener("click", (event) => {
        const closeTrigger = event.target.closest("[data-close-nav]");

        if (!closeTrigger) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

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

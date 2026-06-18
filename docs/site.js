const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav");
const navOverlay = document.querySelector(".nav-overlay");

function setMenuState(isOpen) {
    if (!menuToggle || !navMenu || !navOverlay) {
        return;
    }

    navMenu.classList.toggle("open", isOpen);
    navOverlay.classList.toggle("active", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

if (menuToggle && navMenu && navOverlay) {
    menuToggle.addEventListener("click", () => {
        setMenuState(!navMenu.classList.contains("open"));
    });

    navOverlay.addEventListener("click", () => setMenuState(false));

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuState(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            setMenuState(false);
        }
    });
}

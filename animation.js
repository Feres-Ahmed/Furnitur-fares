document.addEventListener("DOMContentLoaded", function () {
    const animatedSections = document.querySelectorAll("#home, #shop, #about, #services, #blog, #contact");

    animatedSections.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.8s ease-out";
    });

    function revealOnScroll() {
        animatedSections.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            } else {
                el.style.opacity = 0;
                el.style.transform = "translateY(50px)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

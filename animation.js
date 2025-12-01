document.addEventListener("DOMContentLoaded", function () {
    // نخلي الانيميشن على كل العناصر ما عدا النيف بار
    const sections = document.querySelectorAll("section, #home, .container, .content-home");
    const navbar = document.querySelector("header"); // النيف بار

    sections.forEach(el => {
        if (el !== navbar) {
            el.style.opacity = 0;
            el.style.transform = "translateY(50px)";
            el.style.transition = "all 0.8s ease-out";
        }
    });

    function revealOnScroll() {
        sections.forEach(el => {
            if (el !== navbar) {
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
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
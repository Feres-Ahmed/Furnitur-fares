document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("#home, #shop, #about, #services, #blog, #contact");
    sections.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.8s ease-out";
    });

    function reveal() {
        sections.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 150) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            } else {
                el.style.opacity = 0;
                el.style.transform = "translateY(50px)";
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();

    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("password");
    const rules = document.getElementById("password-rules");

    const savedPasswords = ["Fares123", "FaresAhmed123", "FaresAhmed"];

    passInput.onfocus = () => rules.style.display = "block";
    passInput.onblur = () => rules.style.display = "none";

    form.addEventListener("submit", function (e) {

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passInput.value.trim();

        if (!name && !email && !password) {
            alert("Enter name, email & password");
            e.preventDefault();
        }
        else if (!name) {
            alert("Enter name");
            e.preventDefault();
        }
        else if (!email) {
            alert("Enter email");
            e.preventDefault();
        }
        else if (!password) {
            alert("Enter password");
            e.preventDefault();
        }
        else if (!savedPasswords.includes(password)) {
            alert("Error: Password not recognized");
            e.preventDefault();
        }
    
    });

});

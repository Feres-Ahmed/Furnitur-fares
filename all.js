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
            if(top < window.innerHeight - 150){
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
});

const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const pass  = document.getElementById("password");
const rules = document.getElementById("password-rules");
const send  = document.getElementById("send-btn");
const savedPasswords = ["Fares123","Hello2025","Secret99"];

pass.onfocus = () => rules.style.display = "block";
pass.onblur  = () => rules.style.display = "none";

send.onclick = () => {
    const name = nameInput.value.trim();
    const password = pass.value.trim();
    if(!name && !email.value && !password) alert("Enter name, email & password");
    else if(!name) alert("Enter name");
    else if(!email.value) alert("Enter email");
    else if(!password) alert("Enter password");
    else if(!savedPasswords.includes(password)) alert("Error: Password not recognized");
    else alert("Message Sent");
};

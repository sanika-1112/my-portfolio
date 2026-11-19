// Typing Animation

const typingText = document.getElementById("typing-text");

const roles = [
    "Frontend Developer",
    "Web Developer",
    "UI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {
        typingText.textContent = 
            currentRole.substring(0, charIndex - 1);
        
        charIndex--;

    }else {
        typingText.textContent = 
            currentRole.substring(0, charIndex + 1);

        charIndex++;
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        
        deleting = true;
        speed = 1200;

    } else if (deleting && charIndex === 0) {

        deleting = false;

        roleIndex = (roleIndex + 1)% roles.length;

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Dark / Light Theme Toggle

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
let savedTheme = localStorage.getItem("theme") || "dark";

document.documentElement.setAttribute("data-theme", savedTheme);

// Set correct button icon
themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

// Toggle theme on click
themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// Back to Top Button

const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Scroll to top on click
backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
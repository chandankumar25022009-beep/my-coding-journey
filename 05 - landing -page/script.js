const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

const startButton = document.getElementById("startButton");
const message = document.getElementById("message");

const year = document.getElementById("year");


/* Mobile Menu */

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close menu after clicking a link */

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* Start Button */

startButton.addEventListener("click", () => {

    message.textContent =
        "Your coding journey starts today! 🚀";

});


/* Current Year */

year.textContent = new Date().getFullYear();
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

const orderButton = document.getElementById("orderButton");
const message = document.getElementById("message");

const year = document.getElementById("year");


/* Mobile Menu */

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu */

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* Order Button */

orderButton.addEventListener("click", () => {

    message.textContent =
        "Thank you! Your order request has been received.";

});


/* Current Year */

year.textContent = new Date().getFullYear();
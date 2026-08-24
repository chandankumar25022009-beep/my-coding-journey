const form = document.getElementById("registrationForm");

const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        message.textContent = "Passwords do not match.";

        return;
    }

    if (phone.length < 10) {

        message.textContent = "Please enter a valid phone number.";

        return;
    }

    message.textContent =
        `Welcome, ${name}! Your registration was successful.`;

    form.reset();
});
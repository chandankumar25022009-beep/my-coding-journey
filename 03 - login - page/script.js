const loginForm = document.getElementById("loginForm");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const message = document.getElementById("message");

showPassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        showPassword.textContent = "Hide";
    } else {
        password.type = "password";
        showPassword.textContent = "Show";
    }

});

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const passwordValue = password.value.trim();

    if (email === "" || passwordValue === "") {
        message.textContent = "Please fill all fields.";
        return;
    }

    message.textContent = "Login form submitted successfully!";

});
const messageButton =
    document.getElementById("messageButton");

const message =
    document.getElementById("message");

const skillCount =
    document.querySelectorAll(".skills span").length;

const skillCountElement =
    document.getElementById("skillCount");

const projectCountElement =
    document.getElementById("projectCount");


skillCountElement.textContent = skillCount;

projectCountElement.textContent = "8";


messageButton.addEventListener("click", () => {

    message.textContent =
        "Keep learning, keep building and keep improving! 🚀";

});
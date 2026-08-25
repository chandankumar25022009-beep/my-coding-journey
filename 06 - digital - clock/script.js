const timeElement = document.getElementById("time");
const ampmElement = document.getElementById("ampm");
const dateElement = document.getElementById("date");
const formatButton = document.getElementById("formatButton");

let is24Hour = false;


function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let ampm = "";

    if (!is24Hour) {

        ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;

        if (hours === 0) {
            hours = 12;
        }

    }

    const formattedHours =
        String(hours).padStart(2, "0");

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");


    timeElement.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    ampmElement.textContent =
        is24Hour ? "" : ampm;


    dateElement.textContent =
        now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}


formatButton.addEventListener("click", () => {

    is24Hour = !is24Hour;

    formatButton.textContent =
        is24Hour
            ? "Switch to 12 Hour"
            : "Switch to 24 Hour";

    updateClock();
});


updateClock();

setInterval(updateClock, 1000);
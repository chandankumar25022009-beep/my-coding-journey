const weatherForm = document.getElementById("weatherForm");

const cityInput = document.getElementById("cityInput");

const city = document.getElementById("city");
const date = document.getElementById("date");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feels = document.getElementById("feels");

const message = document.getElementById("message");


// Demo weather data
const weatherData = {

    "new delhi": {
        temperature: 28,
        condition: "Clear Sky",
        humidity: "55%",
        wind: "12 km/h",
        feels: "30°C",
        icon: "☀️"
    },

    "mumbai": {
        temperature: 29,
        condition: "Partly Cloudy",
        humidity: "72%",
        wind: "15 km/h",
        feels: "32°C",
        icon: "⛅"
    },

    "patna": {
        temperature: 30,
        condition: "Sunny",
        humidity: "60%",
        wind: "10 km/h",
        feels: "33°C",
        icon: "☀️"
    },

    "delhi": {
        temperature: 28,
        condition: "Clear Sky",
        humidity: "55%",
        wind: "12 km/h",
        feels: "30°C",
        icon: "☀️"
    },

    "meerut": {
        temperature: 27,
        condition: "Cloudy",
        humidity: "58%",
        wind: "11 km/h",
        feels: "29°C",
        icon: "☁️"
    }

};


function showWeather(cityName) {

    const key = cityName.toLowerCase();

    const data = weatherData[key];

    if (!data) {

        message.textContent =
            "Demo data available for Delhi, Mumbai, Patna and Meerut.";

        return;
    }

    message.textContent = "";

    city.textContent = cityName;

    temperature.textContent = data.temperature;

    condition.textContent = data.condition;

    humidity.textContent = data.humidity;

    wind.textContent = data.wind;

    feels.textContent = data.feels;

    document.querySelector(".weather-icon").textContent =
        data.icon;

    date.textContent =
        new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}


weatherForm.addEventListener("submit", event => {

    event.preventDefault();

    const cityName = cityInput.value.trim();

    if (cityName === "") {
        return;
    }

    showWeather(cityName);

});
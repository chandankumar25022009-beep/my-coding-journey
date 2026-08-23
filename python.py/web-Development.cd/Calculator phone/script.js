const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

let current = "0";
let previous = "";
let operation = null;
let resetScreen = false;

function updateDisplay() {
    currentDisplay.textContent = current;
    previousDisplay.textContent =
        previous && operation ? `${previous} ${getOperationSymbol(operation)}` : "";
}

function getOperationSymbol(op) {
    const symbols = {
        "+": "+",
        "-": "−",
        "*": "×",
        "/": "÷"
    };

    return symbols[op] || op;
}

function appendNumber(number) {
    if (current === "Error" || resetScreen) {
        current = number === "." ? "0." : number;
        resetScreen = false;
        updateDisplay();
        return;
    }

    if (number === "." && current.includes(".")) {
        return;
    }

    if (current === "0" && number !== ".") {
        current = number;
    } else {
        current += number;
    }

    updateDisplay();
}

function chooseOperation(op) {
    if (current === "Error") return;

    if (operation && !resetScreen) {
        calculate();
    }

    previous = current;
    operation = op;
    resetScreen = true;

    updateDisplay();
}

function calculate() {
    if (!operation || previous === "") return;

    const first = parseFloat(previous);
    const second = parseFloat(current);

    let result;

    if (operation === "+") {
        result = first + second;
    } else if (operation === "-") {
        result = first - second;
    } else if (operation === "*") {
        result = first * second;
    } else if (operation === "/") {
        if (second === 0) {
            current = "Error";
            previous = "";
            operation = null;
            updateDisplay();
            return;
        }

        result = first / second;
    }

    current = Number.isInteger(result)
        ? String(result)
        : String(parseFloat(result.toFixed(10)));

    previous = "";
    operation = null;
    resetScreen = true;

    updateDisplay();
}

function clearCalculator() {
    current = "0";
    previous = "";
    operation = null;
    resetScreen = false;

    updateDisplay();
}

function deleteNumber() {
    if (current === "Error" || resetScreen) {
        current = "0";
        resetScreen = false;
    } else if (current.length > 1) {
        current = current.slice(0, -1);
    } else {
        current = "0";
    }

    updateDisplay();
}

function percentage() {
    if (current === "Error") return;

    current = String(parseFloat(current) / 100);
    updateDisplay();
}

document.querySelectorAll("[data-number]").forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.dataset.number);
    });
});

document.querySelectorAll("[data-operation]").forEach(button => {
    button.addEventListener("click", () => {
        chooseOperation(button.dataset.operation);
    });
});

document.querySelector('[data-action="clear"]').addEventListener("click", clearCalculator);

document.querySelector('[data-action="delete"]').addEventListener("click", deleteNumber);

document.querySelector('[data-action="percent"]').addEventListener("click", percentage);

document.querySelector('[data-action="calculate"]').addEventListener("click", calculate);

document.addEventListener("keydown", event => {
    if (!isNaN(event.key) || event.key === ".") {
        appendNumber(event.key);
    }

    if (["+", "-", "*", "/"].includes(event.key)) {
        chooseOperation(event.key);
    }

    if (event.key === "Enter" || event.key === "=") {
        calculate();
    }

    if (event.key === "Escape") {
        clearCalculator();
    }

    if (event.key === "Backspace") {
        deleteNumber();
    }

    if (event.key === "%") {
        percentage();
    }
});

updateDisplay();
const currentDisplay =
    document.getElementById("current");

const previousDisplay =
    document.getElementById("previous");


let currentValue = "0";

let previousValue = "";

let operator = null;

let shouldResetDisplay = false;


function updateDisplay() {

    currentDisplay.textContent =
        currentValue;

    previousDisplay.textContent =
        previousValue && operator
            ? `${previousValue} ${operator}`
            : "";
}


function inputNumber(number) {

    if (
        currentValue === "0" ||
        shouldResetDisplay
    ) {

        currentValue = number;

        shouldResetDisplay = false;

    } else {

        currentValue += number;

    }

    updateDisplay();
}


function inputDecimal() {

    if (shouldResetDisplay) {

        currentValue = "0.";

        shouldResetDisplay = false;

        updateDisplay();

        return;
    }

    if (!currentValue.includes(".")) {

        currentValue += ".";

    }

    updateDisplay();
}


function chooseOperator(selectedOperator) {

    if (operator !== null) {

        calculate();

    }

    previousValue = currentValue;

    operator = selectedOperator;

    shouldResetDisplay = true;

    updateDisplay();
}


function calculate() {

    if (
        operator === null ||
        previousValue === ""
    ) {
        return;
    }


    const firstNumber =
        Number(previousValue);

    const secondNumber =
        Number(currentValue);

    let result;


    switch (operator) {

        case "+":
            result =
                firstNumber + secondNumber;
            break;

        case "-":
            result =
                firstNumber - secondNumber;
            break;

        case "*":
            result =
                firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {

                currentValue =
                    "Cannot divide by 0";

                previousValue = "";

                operator = null;

                updateDisplay();

                return;
            }

            result =
                firstNumber / secondNumber;

            break;
    }


    currentValue =
        String(
            Number(result.toFixed(10))
        );

    previousValue = "";

    operator = null;

    shouldResetDisplay = true;

    updateDisplay();
}


function clearCalculator() {

    currentValue = "0";

    previousValue = "";

    operator = null;

    shouldResetDisplay = false;

    updateDisplay();
}


function deleteNumber() {

    if (
        currentValue.length === 1 ||
        currentValue === "Cannot divide by 0"
    ) {

        currentValue = "0";

    } else {

        currentValue =
            currentValue.slice(0, -1);

    }

    updateDisplay();
}


function calculatePercent() {

    const number =
        Number(currentValue);

    currentValue =
        String(number / 100);

    updateDisplay();
}


/* Number buttons */

document
    .querySelectorAll("[data-number]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                inputNumber(
                    button.dataset.number
                );

            }
        );

    });


/* Decimal */

document
    .querySelector("[data-action='decimal']")
    .addEventListener(
        "click",
        inputDecimal
    );


/* Operators */

document
    .querySelectorAll(
        "[data-action='operator']"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                chooseOperator(
                    button.dataset.value
                );

            }
        );

    });


/* Equals */

document
    .querySelector(
        "[data-action='equals']"
    )
    .addEventListener(
        "click",
        calculate
    );


/* Clear */

document
    .querySelector(
        "[data-action='clear']"
    )
    .addEventListener(
        "click",
        clearCalculator
    );


/* Delete */

document
    .querySelector(
        "[data-action='delete']"
    )
    .addEventListener(
        "click",
        deleteNumber
    );


/* Percentage */

document
    .querySelector(
        "[data-action='percent']"
    )
    .addEventListener(
        "click",
        calculatePercent
    );


/* Keyboard support */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            inputNumber(event.key);

        }

        else if (event.key === ".") {

            inputDecimal();

        }

        else if (
            ["+", "-", "*", "/"].includes(
                event.key
            )
        ) {

            chooseOperator(event.key);

        }

        else if (
            event.key === "Enter" ||
            event.key === "="
        ) {

            calculate();

        }

        else if (event.key === "Backspace") {

            deleteNumber();

        }

        else if (event.key === "Escape") {

            clearCalculator();

        }

    }
);


updateDisplay();
const display = document.querySelector(".display");

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener('click', addToDisplay)
});

function addToDisplay(symbol) {
    display.textContent = `${ symbol.target.id }`;
}

function operate (operator, a, b) {
    if(operator === "+") {
        add(a, b);
    }
    else if (operator === "-") {
        subtract(a, b);
    }
    else if (operator === "x") {
        multiply(a, b);
    }
    else if (operator === "/") {
        divide(a, b);
    }
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if(b === 0) {
        return "ERROR";
    }
    return a / b;
};
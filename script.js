
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
    return a / b;
};
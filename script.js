const display = document.querySelector(".display");

// Array of operators is important for error checking function
const operatorsList = ["/", "x", "-", "+"];

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += `${ button.id }`;
    });
});

const equals = document.querySelector("#equals");
equals.addEventListener('click', equate);

function equate () {
    equation = display.textContent;
    equationArray = equation.split("");
    if (errorCheck(equationArray) === true) {
        display.textContent = "ERROR";
    }
    cleanEquation = [];
    fullNumber = 0;
    for (i = 0; i < equationArray.length; i++) {
        if (operatorsList.includes(equationArray[i]) === true) {
            cleanEquation.push(fullNumber);
            fullNumber = 0;
            cleanEquation.push(equationArray[i]);
        }
        else if (fullNumber === 0) {
            fullNumber = equationArray[i];
        }
        else {
            fullNumber += equationArray[i];
            if (i === equationArray.length - 1) {
                cleanEquation.push(fullNumber);
                console.log("test");
            }
        }
    }
    console.log(` ${ fullNumber }`)
    console.log(`${ cleanEquation }`);
};

function errorCheck (eq) {   
    if (operatorsList.includes(eq[0]) === true) {
        return true;
    }
    else if (operatorsList.includes(eq[eq.length - 1]) === true) {
        return true;
    } 
    // Check for double operators
    for (let i = 1; i < eq.length - 1; i++) {
        if (operatorsList.includes(eq[i]) === true) {
            if (operatorsList.includes(eq[i - 1]) || operatorsList.includes(eq[i + 1])) {
                return true;
            }
        }
    }
};

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
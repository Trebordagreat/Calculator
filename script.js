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
            if (i === equationArray.length -1) {
                cleanEquation.push(fullNumber);
            }
        }
        else {
            fullNumber += equationArray[i];
            if (i === equationArray.length -1) {
                cleanEquation.push(fullNumber);
            }
        }
    }
    console.log(equationArray);
    console.log(fullNumber);
    console.log(`${ cleanEquation }`);
    solveOut(cleanEquation);
};

function solveOut (eqArray) {
    if (eqArray.length === 1) {
        display.textContent = `${ eqArray[0]}`;
    }
    else if (eqArray.includes("/")) {
        solveOut(partialSolve("/", eqArray));
    }
    else if (eqArray.includes("x")) {
        solveOut(partialSolve("x", eqArray));
    }
    else if (eqArray.includes("-")) {
        solveOut(partialSolve("-", eqArray));
    }
    else if (eqArray.includes("+")) {
        solveOut(partialSolve("+", eqArray));
    }
}

function partialSolve(operator, eqArray) {
    partiallySolved = [];
    for (let i = 0; i < eqArray.length; i++) {
        if (eqArray[i] === operator) {
            for (let j = 0; j < i - 1; j++) {
                partiallySolved.push(eqArray[j]);
            }
            let newNumber = operate(eqArray[i], eqArray[i - 1], eqArray[i + 1]);
            partiallySolved.push(newNumber);
            for (let j = i + 2; j < eqArray.length; j++) {
                partiallySolved.push(eqArray[j]);
            }
            console.log(partiallySolved);
            return partiallySolved;
        }
    }

}

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
        return add(Number(a), Number(b));
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "x") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
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
/**
 * Je dois sauvegarder displayVal a chaque fois que je clique sur un operateur ou egal
 * 
 * si il y a un operateur actif dans displayVal, effectuer loperation, stocker result dans previousResult et clear displayVal
 */

let displayVal = ''; //what will hold and evaluate the complete equation

let num1 = '';
let num2 = '';
let oper = '';

let operActive = false;

const display = document.getElementById('result');

const numbers = document.querySelectorAll("button.calc-number");
const operators = document.querySelectorAll("button.calc-operator")
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const commaBtn = document.getElementById("comma");
const plusminusBtn = document.getElementById('plusminus');
const percentBtn = document.getElementById('percent');


clearBtn.addEventListener('click', clearCalc);
equalsBtn.addEventListener('click', getResult);
commaBtn.addEventListener('click', addComma);
plusminusBtn.addEventListener('click', showNegative);
percentBtn.addEventListener('click', divideBy100);


numbers.forEach(num => {
    num.addEventListener('click', () => {
        let val = num.getAttribute('value');

        //Change 'All Clear' to 'Clear'
        if (val != '0') {
            clearBtn.innerText = 'C';
        }

        if (operActive) {
            clearDisplay();
            operActive = false;
        }


        if (display.innerText.startsWith('-')) {
            display.innerText = (display.innerText == '-0') ? getNegative(val) : display.innerText += val;

        } else {
            display.innerText = (display.innerText == '0') ? val : display.innerText += val;

        }

    });

});

operators.forEach(operator => {
    operator.addEventListener('click', () => {

        if (oper == '') {
            num1 = display.innerText;
            oper = operator.getAttribute('value');
            operActive = true;
        }

    });


});

function clearCalc() {
    clearBtn.innerText = 'AC';
    display.innerText = '0';
    displayVal = '';
    oper = '';
    num1 = '';
    num2 = '';
    console.log('displayVal CLEAR:', displayVal);


}

function showNegative() {
    if (display.innerText == '0' || operActive) {
        return display.innerText = '-0';
    } else {
        return display.innerText = parseInt(display.innerText) * -1;
    }
}

function divideBy100() {
    if (!displayIsClear()) {
        display.innerText = (parseFloat(display.innerText) / 100).toString().replace('.', ',');
        

    }
}


function getNegative(num) {
    return num * -1;
}

function clearDisplay() {
    display.innerText = '';
}

function displayIsClear() {
    return display.innerText == '0';
}

function isComma() {
    return display.innerText.includes(',');
}

function getResult() {
    let result = '';

    let firstNum = parseInt(num1);

    num2 = parseInt(display.innerText);

    if (oper != '') {
        switch (oper) {
            case '+':
                result = add(firstNum, num2);
                break;
            case '-':
                result = substract(firstNum, num2);
                break;
            case '*':
                result = multiply(firstNum, num2);
                break;
            case '/':
                result = divide(firstNum, num2);
                break;
            case 'percent':
                break;
        }


        display.innerText = result;
        num1 = result;
        num2 = '';
        oper = '';
        operActive = false;
    }
}

function addComma() {
    if (!isComma()) {
        display.innerText += ',';
        displayVal = display.innerText;
        console.log('displayVal COMMA:', displayVal);



    }
}

function containsOperator(str) {
    return /^([-+] ?)?[0-9]+(,[0-9]+)?$/.test(str);
}

const add = function (num1, num2) {
    return num1 + num2;
};

const substract = function (num1, num2) {
    return num1 - num2;
};

const multiply = function (num1, num2) {
    return num1 * num2;
};

const divide = function (num1, num2) {
    return num1 / num2;
};

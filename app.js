/**
 * Je dois sauvegarder displayVal a chaque fois que je clique sur un operateur ou egal
 * 
 * si il y a un operateur actif dans displayVal, effectuer loperation, stocker result dans previousResult et clear displayVal
 */

let displayVal = ''; //what will hold and evaluate the complete equation

let num1 = '';
let num2 = '';
let oper = '';

let previousResult = '';
let operActive = false;

const display = document.getElementById('result');

const numbers = document.querySelectorAll("button.calc-number");
const operators = document.querySelectorAll("button.calc-operator")
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const commaBtn = document.getElementById("comma");


/**
 * Check display length, format if needed
 */

clearBtn.addEventListener('click', clearCalc);
equalsBtn.addEventListener('click', getResult);
commaBtn.addEventListener('click', addComma);


numbers.forEach(num => {
    num.addEventListener('click', () => {
        let val = num.getAttribute('value');

        //Change 'All Clear' to 'Clear'
        if (val != '0') {
            clearBtn.innerText = 'C';
        }

        if (operActive){
            clearDisplay();
            operActive = false;
        }

        display.innerText = (display.innerText == '0') ? val : display.innerText += val;
    });

});

operators.forEach(operator => {
    operator.addEventListener('click', () => {

        if (oper == 'plusminus'){
            let num = parseInt(display.innerText);
            display.innerText = showNegative(num);
        }else if (oper == '') {
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
    previousResult = '';
    oper = '';
    console.log('displayVal CLEAR:', displayVal);


}

function clearDisplay(){
    display.innerText = '';
}

function displayIsClear() {
    return display.innerText = '0';
}

function isComma() {
    return display.innerText.includes(',');
}

function getResult() {
let firstNum = '';
let result = '';

if (previousResult != ''){
    firstNum = parseInt(previousResult)
}else{
    firstNum = parseInt(num1)
}
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
        previousResult = result;
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
  
const divide = function (num1, num2){
    return num1 / num2;
};

const showNegative = function(num){
    return num * -1;
}
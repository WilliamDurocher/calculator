let displayVal = '';

const display = document.getElementById('result');

const numbers = document.querySelectorAll("button.calc-number");
const operators = document.querySelectorAll("button.calc-operator");

const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const commaBtn = document.getElementById("comma");


/**
 * Check display length, format if needed
 */

clearBtn.addEventListener('click', clearDisplay);
equalsBtn.addEventListener('click', getResult);
commaBtn.addEventListener('click', addComma);


numbers.forEach(num => {
    num.addEventListener('click', () => {
        let val = num.getAttribute('value');
            if (val != '0'){
            clearBtn.innerText = 'C';
            }
            display.innerText = (display.innerText == '0') ? val : display.innerText += val;
            displayVal = display.innerText;
    });

});

operators.forEach(operator => {
    
});

function clearDisplay(){
    clearBtn.innerText = 'AC';
    display.innerText = '0' ;
    displayVal = display.innerText;

}

function displayIsClear(){
    return display.innerText = '0';
}

function isComma(){
    return display.innerText.includes(',');
}

function getResult(){

}

function addComma(){
 if(!isComma()){
display.innerText += ',';
 }
}
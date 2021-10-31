const calcContainer = document.getElementById('calc-container');
const calcBtns = [];

function makeCalculator() {

    for (c = 0; c < (5 * 4); c++) {
        let cell = document.createElement("button");
        calcContainer.appendChild(cell).className = "calc-btn";
        calcBtns.push(cell);
    };
};

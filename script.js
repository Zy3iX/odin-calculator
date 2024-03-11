const display = document.getElementById('display')
const method = document.getElementById('method');
const keys = document.querySelectorAll('#keys');
const operatorButtons = document.querySelectorAll('#operators')
const clearBtn = document.getElementById('clear')
const resultbtn = document.getElementById('resultButton')

result = false;
firstNum = '';
secondNum = '';
displayValue = '';



function add(a, b) {
    return (+a) + (+b);
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b;
}

const operate = (a, operator, b) => {
    firstNum = Number(a);
    secondNum = Number(b);
    if (operator == '+') {
        return add(a, b)
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b)
    } else if (operator == '/') {
        return divide(a, b)
    }
}



const calculatorDisplay = (e) => {
    display.textContent = '';
    const key = e.target.textContent;
    if (secondNum === '' && display.value === '') {
        firstNum += key;
        display.value = firstNum;
    } else if (!firstNum == '' && !secondNum == '' && result) {
        secondNum = key;
        display.value = secondNum;
    } else {
        secondNum += key;
        display.value = secondNum;
    }
    return
}

keys.forEach(number => number.addEventListener('click', (e) => {
    calculatorDisplay(e)
}))

operatorButtons.forEach(op => {
    op.addEventListener('click', (e) => {
        key = e.target.textContent;
        displayValue = key;
        calculatorDisplay.textContent = displayValue;
    })
})


clearBtn.addEventListener('click', (e) => {
    firstNum = '';
    secondNum = '';
    display.value = '';
})


resultbtn.addEventListener('click', (e) => {
    let result = operate(firstNum, key, secondNum)
    display.value = result;
})








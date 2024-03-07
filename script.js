const display = document.getElementById('display')
const method = document.getElementById('method');
const buttons = document.querySelectorAll('button')

const appendNumber  = (input) => {
    display.value += input;
}

const clearDisplay = () => {
    display.value = '';
}

function operate(a, operator, b) {
    if (operator == '+') {
        return a + b;
    } else if (operator == '-') {
        return a - b;
    } else if (operator == '*'){
        return a * b;
    } else if(operator =='/'){
        return a / b;
    } else{
        return null;
    }
}






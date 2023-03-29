// Calculator basic math functions
function add(a, b) { return a + b };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return a / b };

// Function to complete operations/right functions
function  operate(operator, num1, num2) {
    switch(operator) {
        case '÷':
            divide(num1, num2);
            break
        case 'x':
            multiply(num1, num2);
            break
        case '-':
            subtract(num1, num2);
            break
        case '+':
            add(num1, num2);
            break
    }
}
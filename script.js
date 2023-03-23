// Calculator basic math functions
function add(a, b) { return a + b };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return a / b };

// Text of display
const display = document.querySelector('.display');
let btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', (e) => {
    let choice = e.target.id
    display.textContent = choice
}));
// Calculator class + functions
class Calculator {
    constructor(previousNumText, currentNumText){
        this.previousNumText = previousNumText;
        this.currentNumText = currentNumText;
        this.clear()
    };

    clear() { 
        this.previousNumText = '';
        this.currentNumText = '';
        this.operation = undefined;
    };

    detele() {
        this.currentNum = this.currentNum.toString().slice(0, -1)
    };

    appendNumber(number) {
        if (number === '.' && this.currentNum.includes('.')) return
        this.currentNum = this.currentNum.toString() + number.toString();
    };

    chooseOperation(operation) {
        if (this.currentNum === '') return
        if (this.previousNum !== '') {
            this.operate()
        }
        this.operation = operation;
        this.previousNum = this.currentNum;
        this.currentNum = '';
    };

    operate() {
        let computation;
        const prev = parseFloat(this.previousNum);
        const curr = parseFloat(this.currentNum);
        if (isNaN(prev) || isNaN(curr)) return

        switch(this.operation) {
            case '÷':
                computation = prev / curr;
                break
            case 'x':
                computation = prev * curr;
                break
            case '-':
                computation = prev - curr;
                break
            case '+':
                computation = prev + curr;
                break
            default:
                return
        }
        
        this.currentNum = computation;
        this.operation = undefined;
        this.previousNum = '';
    };

    getDisplayNum(number) {
        const stringNum = number.toString();
        const integerDigits = parseFloat(stringNum.split('.')[0]);
        const decimalDigits = stringNum.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentNumText.innerText = this.getDisplayNum(this.currentNum);
        if (this.operation != null) {
            this.previousNumText.innerText =
                `${this.getDisplayNum(this.previousNum)} ${this.operation}`
        } else {
            this.previousNumText.innerText = ''
        }
    };
    
}

// Initializing buttons + display text elements
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousNumText = document.querySelector('[data-previous-num]');
const currentNumText = document.querySelector('[data-current-num]');

const calculator = new Calculator(previousNumText, currentNumText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.operate();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            if (!isNaN(value) || value === '.') {
                handleNumber(value);
            } else if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                handleOperator(value);
            }
        });
    });

    function handleNumber(value) {
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        display.textContent = currentInput;
    }

    function clearDisplay() {
        currentInput = '0';
        operator = '';
        previousInput = '';
        display.textContent = currentInput;
    }

    function handleOperator(value) {
        if (operator === '') {
            previousInput = currentInput;
            currentInput = '0';
        } else {
            calculate();
        }
        operator = value;
    }

    function calculate() {
        let result;
        const previous = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        switch (operator) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '*':
                result = previous * current;
                break;
            case '/':
                result = previous / current;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        display.textContent = currentInput;
    }
});

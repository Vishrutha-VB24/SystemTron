let currentNumber = '';
        let previousNumber = '';
        let operation = null;

        const display = document.getElementById('display');

        function appendNumber(number) {
            currentNumber += number;
            updateDisplay();
        }

        function setOperation(op) {
            if (currentNumber === '') return;
            if (previousNumber !== '') calculate();
            operation = op;
            previousNumber = currentNumber;
            currentNumber = '';
        }

        function calculate() {
            if (operation === null || currentNumber === '') return;
            const prev = parseFloat(previousNumber);
            const curr = parseFloat(currentNumber);
            let result;

            switch (operation) {
                case '+':
                    result = prev + curr;
                    break;
                case '-':
                    result = prev - curr;
                    break;
                case '*':
                    result = prev * curr;
                    break;
                case '/':
                    result = curr !== 0 ? prev / curr : 'Error';
                    break;
                default:
                    return;
            }

            currentNumber = result;
            operation = null;
            previousNumber = '';
            updateDisplay();
        }
        function clearDisplay() {
            currentNumber = '';
            previousNumber = '';
            operation = null;
            updateDisplay();
        }

        function updateDisplay() {
            display.value = currentNumber;
        }

        clearDisplay();
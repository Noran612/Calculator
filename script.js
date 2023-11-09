let currentInput = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    resultDisplayed = false;
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (currentInput === '') return;

    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        resultDisplayed = true;
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = 'Error';
        resultDisplayed = true;
        document.getElementById('display').value = currentInput;
    }
}

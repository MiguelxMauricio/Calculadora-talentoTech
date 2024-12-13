let currentInput = '';
let operator = '';
let previousInput = '';

// Atualiza a tela com a entrada atual
function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}

// Adiciona número à entrada atual
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Adiciona operador à entrada atual
function appendOperator(op) {
    if (currentInput === '') return;
    previousInput = currentInput;
    operator = op;
    currentInput = '';
}

// Adiciona ponto decimal
function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

// Calcula o resultado
function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            if (currentInput === '0') {
                result = 'Erro';
            } else {
                result = parseFloat(previousInput) / parseFloat(currentInput);
            }
            break;
        default:
            return;
    }
    currentInput = result.toString();
    updateDisplay();
}

// Limpa a tela
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Calcula a raiz quadrada
function appendSquareRoot() {
    if (currentInput === '') return;
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
}

// Calcula a porcentagem
function appendPercentage() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

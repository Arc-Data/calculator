const resultScreen = document.querySelector('.resultScreen');
const operationScreen = document.querySelector('.operationScreen');
const numbers = document.querySelectorAll('.numbers');
const backspaceButton = document.querySelector('#backspace');
const operators = document.querySelectorAll('.op')
const equalsButton = document.querySelector('#equals')

let isDecimal = false;
let num1 = '';
let num2 = '';
let currentOperation = '';

function checkOperation(operation) {
	if(currentOperation) {
		return evaluate()
	};
	num1 = resultScreen.textContent;
	resultScreen.textContent = 0;
	operationScreen.textContent = `${num1} ${operation}`
	currentOperation = operation;
}

function evaluate() {
	if(!currentOperation) return;
	num1 = Number(num1);
	num2 = Number(resultScreen.textContent);
	operate(num1, num2);
}

function operate(a, b) {
	let text = '';
	switch(currentOperation) {
		case '+':
			text = add(a, b);
			break;

	}

	operationScreen.textContent = `${a} ${currentOperation} ${b}`
	resultScreen.textContent = text;
	currentOperation = ''
}

function add(a, b) {
	return a + b;
}

function backSpace() {
	if(resultScreen.textContent == '0') return;
	const text = resultScreen.textContent;

	if (resultScreen.textContent.length == 1) {
		resultScreen.textContent = '0';
	} else {
		resultScreen.textContent  = text.slice(0, text.length - 1);
	}
}

function handleInput(e) {
	if(e.key >= 0 && e.key <= 9) appendDigit(e.key)
	else if(e.key === 'Backspace') backSpace();
}

function appendDigit(digit) {
	if(resultScreen.textContent == '0') {
		resultScreen.textContent = digit;
		return;
	}

	resultScreen.textContent += digit;
}

equalsButton.addEventListener('click', evaluate);


operators.forEach(operator => {
	operator.addEventListener('click', () => checkOperation(operator.textContent))
})

backspaceButton.addEventListener('click', backSpace);

window.addEventListener('keydown', handleInput);

numbers.forEach(number => {
	number.addEventListener('click', () => appendDigit(number.textContent));
})



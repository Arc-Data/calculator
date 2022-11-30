const resultScreen = document.querySelector('.resultScreen');
const operationScreen = document.querySelector('.operationScreen');
const numbers = document.querySelectorAll('.numbers');
const backspaceButton = document.querySelector('#backspace');
const clearButton = document.querySelector('#clear');
const operators = document.querySelectorAll('.op');
const equalsButton = document.querySelector('#equals');
const dotButton = document.querySelector('#dot');

let isDecimal = false;
let num1 = '';
let num2 = '';
let currentOperation = '';
let shouldMoveScreen = false;


function moveScreen() {
	num1 = resultScreen.textContent;
	resultScreen.textContent = 0;
	operationScreen.textContent = `${num1} ${currentOperation}`
	shouldMoveScreen = false;
}

function checkOperation(operation) {
	if(resultScreen.textContent == 'NaN') return;
	if(currentOperation) {
		return evaluate()
	};
	currentOperation = operation;
	moveScreen();
}

function displayNaN() {
	operationScreen.textContent = '';
	resultScreen.textContent = 'NaN';
}

function evaluate() {
	if(!currentOperation || resultScreen.textContent == 'NaN') return;
	num1 = Number(num1);
	num2 = Number(resultScreen.textContent);
	
	if(currentOperation == '/' && num2 == 0) {
		displayNaN();
		return;
	}
	console.log("still went here")
	operate(num1, num2);
}

function operate(a, b) {
	let text = '';
	switch(currentOperation) {
		case '+':
			text = add(a, b);
			break;
		case '-':
			text = subtract(a, b);
			break;
		case '*':
			text = multiply(a, b);
			console.log(text);
			break;
		case '/':
			text = divide(a, b);
			break;
	}
	operationScreen.textContent = `${a} ${currentOperation} ${b}`
	resultScreen.textContent = text;
	currentOperation = ''
	shouldMoveScreen = true;
}

function add(a, b) {
	return a + b;
}


function subtract(a, b) {
	return a - b;
}


function multiply(a, b) {
	return a * b;
}


function divide(a, b) {
	return a / b;
}

function backSpace() {
	if(resultScreen.textContent == 'NaN') {
		resultScreen.textContent = '0';
		return;
	}
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
	else if (e.key == '/' || e.key == '+' || e.key == '-' || e.key == '*') checkOperation(e.key)
	else if (e.key == 'Enter' || e.key == '=') evaluate();
}

function appendDecimal() {
	console.log(resultScreen.textContent.indexOf('.') !== -1)
	if(resultScreen.textContent.indexOf('.') !== -1) return;
	resultScreen.textContent += '.';
}



function appendDigit(digit) {
	if(shouldMoveScreen) moveScreen(); 
	if(resultScreen.textContent == '0' || resultScreen.textContent == 'NaN') {
		resultScreen.textContent = digit;
		return;
	} 

	resultScreen.textContent += digit;
}


dotButton.addEventListener('click', appendDecimal);

clearButton.addEventListener('click', () => {
	num1 = '';
	currentOperation = ''
	shouldMoveScreen = false;
	resultScreen.textContent = '0';
	operationScreen.textContent = '';
})

equalsButton.addEventListener('click', evaluate);


operators.forEach(operator => {
	operator.addEventListener('click', () => checkOperation(operator.textContent))
})

backspaceButton.addEventListener('click', backSpace);

window.addEventListener('keydown', handleInput);

numbers.forEach(number => {
	number.addEventListener('click', () => appendDigit(number.textContent));
})



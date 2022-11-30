const currNumber = document.querySelector('.currNumber');
const prevNumber = document.querySelector('.prevNumber');
const pending = document.querySelector('.pending');
const clearButton = document.querySelector('#clearButton');
const backspaceButton = document.querySelector('#backSpaceButton');
const numbers = document.querySelectorAll('.numbers');

let prevOperation = '';
let operand1 = 0;
let operand2 = 0;

function add() {
	return operand1 + operand2;
}

function subtract() {
	return operand1 - operand2;
}

function divide() {
	return operand1 / operand2;
}

function modulo() {
	return operand1 % operand2;
}


function appendDigit(e) {
	const digit = e.currentTarget.id;
	console.log("hello")
	if(currNumber.textContent == '0') {
		currNumber.textContent = digit;
	} else {
		currNumber.textContent += digit;
	}
}


function inputNumber(event) {
	event.preventDefault();
	console.log(event.keyCode)
	if(event.key == 0 && currNumber.textContent == '0') return;
	if(event.key = 1 && event.key <= 9) {
		if(currNumber.textContent == '0') {
			currNumber.textContent = event.key;
			return;
		}

		currNumber.textContent += event.key;
	}

	if(event.key === 'Backspace') {
		console.log("hello")
		backSpace();
	}
}

function backSpace() {
	const digits = currNumber.textContent;
	if(digits == '0') return;
	currNumber.textContent = digits.slice(0, digits.length - 1);
	if(!currNumber.textContent) {
		currNumber.textContent = '0';
	}
}

clearButton.addEventListener('click', () => {
	currNumber.textContent = '0';
	prevNumber.textContent = '';
	pendingOperations = [];
})

backspaceButton.addEventListener('click', backSpace);

numbers.forEach(number => {
	number.addEventListener('click', appendDigit)
})



window.addEventListener('keydown', inputNumber);
prevNumber.textContent = '';
currNumber.textContent = '0';

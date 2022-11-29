const currNumber = document.querySelector('.currNumber');
const prevNumber = document.querySelector('.prevNumber');
const pending = document.querySelector('.pending');
const clearButton = document.querySelector('#clearButton');
const backspaceButton = document.querySelector('#backSpaceButton');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.op');



function operate(e) {
	const operation = e.currentTarget.id;
	prevNumber.textContent = currNumber.textContent;
	currNumber.textContent = '0';

	switch(operation) {
		case 'add':
			prevNumber.textContent += ' +';
			break;
		case 'subtract':
			prevNumber.textContent += ' -';
			break;
		case 'multiply':
			prevNumber.textContent += ' x';
			break;
		case 'divide':
			prevNumber.textContent += ' /';
			break;
		case 'modulo':
			prevNumber.textContent += ' %';
			break;
		case 'equals':
			break;
			
	}
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
	for(let i = 48; i < 58; i++) {
		if(currNumber.textContent === '0') {
			console.log("Trigger1")
			currNumber.textContent = String.fromCharCode(event.keyCode)
			return;
		} else if(event.keyCode === i) {
			console.log("Trigger2")
			currNumber.textContent += String.fromCharCode(event.keyCode)
			return;
		}

	}
}

clearButton.addEventListener('click', () => {
	currNumber.textContent = '0';
	prevNumber.textContent = '';
})

backspaceButton.addEventListener('click', () => {
	const digits = currNumber.textContent;
	if(digits == '0') return;
	currNumber.textContent = digits.slice(0, digits.length - 1);
	if(!currNumber.textContent) {
		currNumber.textContent = '0';
	}
})

numbers.forEach(number => {
	number.addEventListener('click', appendDigit)
})


operators.forEach(operator => {
	operator.addEventListener('click', operate);
})


window.addEventListener('keypress', inputNumber);
prevNumber.textContent = '';
currNumber.textContent = '0';

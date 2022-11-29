const currNumber = document.querySelector('#currNumber');
const previousNumber = document.querySelector('.prev');
const pending = document.querySelector('.pending');
const clearButton = document.querySelector('#clearButton');
const backspaceButton = document.querySelector('#backSpaceButton');
const numbers = document.querySelectorAll('.numbers');

function appendDigit(e) {
	const digit = e.currentTarget.id;

	if(currNumber.textContent == '0') {
		currNumber.textContent = digit;
	} else {
		currNumber.textContent += digit;
	}
}


function inputNumber(event) {
	event.preventDefault();
	for(let i = 48; i < 58; i++) {
		if(event.keyCode === i) {
			currNumber.textContent += String.fromCharCode(event.keyCode)
		}	
	}
}

clearButton.addEventListener('click', () => {
	currNumber.textContent = '0';
	previousNumber.textContent = '';
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






window.addEventListener('keypress', inputNumber);

currNumber.textContent = '0';

const result = document.querySelector('.resultScreen');
const operationScreen = document.querySelector('.operationScreen');
const numbers = document.querySelectorAll('.numbers');
const backspaceButton = document.querySelector('#backspace');

bool isDecimal = false;

function backSpace() {
	if(result.textContent == '0') return;
	const text = result.textContent;

	if (result.textContent.length == 1) {
		result.textContent = '0';

	} else {
		result.textContent  = text.slice(0, text.length - 1);
	}
}

function handleInput(e) {
	if(e.key >= 0 && e.key <= 9) appendDigit(e.key)
	else if(e.key === 'Backspace') backSpace();
}

function appendDigit(digit) {
	if(result.textContent == '0') {
		result.textContent = digit;
		return;
	}

	result.textContent += digit;
}


backspaceButton.addEventListener('click', backSpace);

window.addEventListener('keydown', handleInput);

numbers.forEach(number => {
	number.addEventListener('click', () => appendDigit(number.textContent));
})



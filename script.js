const result = document.querySelector('.resultScreen');
const operationScreen = document.querySelector('.operationScreen');
const numbers = document.querySelectorAll('.numbers');




function handleInput(e) {
	if(e.key >= 0 && e.key <= 9) appendDigit(e.key)
}

function appendDigit(digit) {
	if(result.textContent == '0') {
		result.textContent = digit;
		return;
	}

	result.textContent += digit;
}


window.addEventListener('keydown', handleInput);

numbers.forEach(number => {
	number.addEventListener('click', () => appendDigit(number.textContent));
})



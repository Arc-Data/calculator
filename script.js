const currNumber = document.querySelector('#currNumber');
const previousNumber = document.querySelector('.prev');
const pending = document.querySelector('.pending');

const numbers = document.querySelectorAll('.numbers');

numbers.forEach(number => {
	number.addEventListener('click', appendDigit)
})

function appendDigit(e) {
	currNumber.textContent += e.currentTarget.textContent;
}


function inputNumber(event) {
	event.preventDefault();
	for(let i = 48; i < 58; i++) {
		if(event.keyCode === i) {
			currNumber.textContent += String.fromCharCode(event.keyCode)
		}	
	}
}

currNumber.textContent = ''

window.addEventListener('keypress', inputNumber);


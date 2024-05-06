const userInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

userInput.addEventListener('input', (event) => {
	output.textContent = event.target.value.trim();
	if (output.textContent === '') {
		output.textContent = 'Anonymous';
	}
});

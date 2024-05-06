function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const userInput = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const resetBtn = document.querySelector('[data-destroy]');

const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
	const boxes = [];
	for (let i = 0; i < amount; i += 1) {
		const box = document.createElement('div');
		box.style.width = `${30 + i * 10}px`;
		box.style.height = `${30 + i * 10}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxes.push(box);
	}
	boxesContainer.append(...boxes);
}

function destroyBoxes() {
	boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
	const amount = userInput.value;
	if (amount === '' || !Number.isInteger(Number(amount)) || amount < 1 || amount > 100) {
		return;
	}
	createBoxes(amount);
});

resetBtn.addEventListener('click', () => {
	destroyBoxes();
});

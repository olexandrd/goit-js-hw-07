const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const email = event.target.elements.email.value.trim();
	const password = event.target.elements.password.value.trim();
	const formObject = {
		email,
		password,
	};
	if (formObject.email === '' || formObject.password === '') {
		alert('All form fields must be filled in');
		return;
	}
	console.log(formObject);
	event.currentTarget.reset();
});

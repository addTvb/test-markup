'use strict';

const toggleBtn = document.querySelector('#theme-toggle');

toggleBtn.addEventListener('click', () => {
	const theme = document.body.dataset.theme;
	if (theme === 'light') {
		toggleBtn.textContent = '🌞';
		document.body.dataset.theme = 'dark';
	}
	if (theme === 'dark') {
		toggleBtn.textContent = '🌝';
		document.body.dataset.theme = 'light';
	}
});

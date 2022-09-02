const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', () => {
  const body = document.querySelector('.body');
  body.classList.add('body--blue');
});
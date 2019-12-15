const button = document.querySelector('.btn');
const popUp = document.querySelector('.popUp');
const body = document.querySelector('body');
const popUpX = document.querySelector('.popUpX');

button.addEventListener('click', () => {
    popUp.classList.toggle('popUpBlock');
    body.classList.toggle('shade');
});

popUpX.addEventListener('click', () => {
    popUp.classList.toggle('popUpBlock');
    body.classList.toggle('shade');
});


const para = document.querySelector('p');
const wrap = document.querySelector('.wrap');
const close = document.querySelector('.close');

para.addEventListener('copy', () => {
    wrap.style.display = 'block';
});

close.addEventListener('click', () => {
    wrap.style.display = 'none';
});

wrap.addEventListener('click', () => {
    wrap.style.display = 'none';
});

// copy
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('Oye! My content is copyright');
});

// mousemove
const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {
  box.textContent = `x-direction: ${e.offsetX}, y-direction: ${e.offsetY}`;
});

// wheel
document.addEventListener('wheel', (e) => {
  console.log(`page-X: ${e.pageX}, page-Y: ${e.pageY}`);
});
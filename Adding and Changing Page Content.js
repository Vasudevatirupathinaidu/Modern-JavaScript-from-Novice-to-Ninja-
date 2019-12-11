const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText = 'You are awesome!';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' ----->New text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);

// content.innerHTML += '<h2>This is a new h2</h2>';

const people = ['ching', 'chang', 'chung'];

people.forEach(person => {
  content.innerHTML += `<h3>${person}</h3>`;
});
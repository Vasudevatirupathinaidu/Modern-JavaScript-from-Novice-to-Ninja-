// querySelector
const para = document.querySelector('p');

console.log(para);

const para_2 = document.querySelector('.error');

console.log(para_2);

const para_3 = document.querySelector('body > div.error');

console.log(para_3);


// querySelectorAll
const paras = document.querySelectorAll('p');

console.log(paras);

paras.forEach(para => {
  console.log(para);
});

const errors = document.querySelectorAll('.error');

console.log(errors);

const para = document.querySelector('p');

console.log(para.classList);

para.classList.add('error');
para.classList.remove('error');
para.classList.add('success');



const paras = document.querySelectorAll('p');

console.log(paras);

paras.forEach(para => {

  if (para.textContent.includes('error')) {
    para.classList.add('error');
  } else if (para.textContent.includes('success')) {
    para.classList.add('success');
  };

});


const h1 = document.querySelector('.title');
console.log(h1);
h1.classList.toggle('title');
h1.classList.toggle('title');
h1.classList.toggle('title');
h1.classList.toggle('title');
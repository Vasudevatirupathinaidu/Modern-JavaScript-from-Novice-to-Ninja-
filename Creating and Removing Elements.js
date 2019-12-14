const button = document.querySelector('.button');
// button.addEventListener('click', () => {
//   console.log('You just clicked me');
// });

// const items = document.querySelectorAll('li');
// // console.log(items);
// items.forEach(item => {
//   item.addEventListener('click', (e) => {
//     // console.log('item clicked');
//     // console.log(item);
//     // console.log(e.target);
//     // e.target.style.textDecoration = 'line-through';
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});

button.addEventListener('click', () => {
  // ul.innerHTML += '<li>New item</li>';
  const li = document.createElement('li');
  li.textContent =  'new item';
  // ul.append(newItem);
  ul.prepend(li);
});




const link = document.querySelector('a');

console.log(link);

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.chess.com');
link.innerText = 'Chess';

const message = document.querySelector('p');

console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');

message.setAttribute('style', 'color: green');
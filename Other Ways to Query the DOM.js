// ***************************************
// get an element by ID

const title = document.getElementById('page-title');

console.log(title);


// ***************************************
// get elements by their class name

const errors = document.getElementsByClassName('error');

console.log(errors); // HTMLCollection won't support 'ForEach' method.

// Convert HTMLCollection to Array
// Method #1
console.log(Array.from(errors));

// Method #2 - spread operator
console.log([...errors]);


// ****************************************
// get elements by their tag name

const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[2]);



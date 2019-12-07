// Write reusable javascript with function

// function declarations
function greet(){
  console.log('hello deva');
}
greet();


// function expressions
const greeting = function(){
  console.log('hello! my dear amigos');
};
greeting();


// arguments and parameters
// a & b are parameters
const add = function(a, b){ 
  console.log(a + b);
};
add(3,4); // 3 & 4 are arguments


// returning values
const area = function(pi, radius) {
  return pi*radius**2;
};
const result = area(3.14, 10); //return value stored in variable result
console.log(result);


// Arrow functions
  // function expressions
  // const sum = function(a, b){ 
  //   return a + b;
  // };
  // const total = sum(10,5);
  // console.log(total);
// functions expression to arrow function
const sum = (a,b) => a + b;
const total = sum(10,5);
console.log(total);


// foreach method
const names = ['ching', 'chang', 'chung', 'ding', 'dang', 'ping', 'pong'];
names.forEach(function(person, index, arr) {
  let html = `<div> ${index} ---> ${person} ---> ${arr} </div>`;
  console.log(html); 
});

console.log("*************************");
console.log("*************************");
console.log("*************************");

// callback functions
const logPerson = (person, index, arr) => {
  let html = `<div> ${index} ---> ${person} ---> ${arr} </div>`;
  console.log(html);
};
names.forEach(logPerson);
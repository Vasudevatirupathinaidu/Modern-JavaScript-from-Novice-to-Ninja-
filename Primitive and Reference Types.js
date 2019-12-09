// Primitive Types - stack

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);


// Reference Types - heap

const userOne = {
  name: 'Deva',
  age: 27
};

const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 30;

console.log(userOne, userTwo);


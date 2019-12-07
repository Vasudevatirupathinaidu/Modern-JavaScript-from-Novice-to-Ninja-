// let age = 25;
// let year = 2019;
// console.log(age, year);
// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75;
// console.log(score);
// score = 95;
// console.log(score);

// //string
// console.log('hello, world');
// let email = 'great_man@deva.co.in'
// console.log(email);

// //string concatenation
// let firstName = 'Vasu';
// let lastName = 'Deva'
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //getting characters
// console.log(fullName[3]);

// //string length
// //.length is a property
// console.log(fullName.length);

// //string methods-methods are just functions that are belongs to specific object or object type
// //.toUpperCase() is a method
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// //here '@' is an argument
// let index = email.indexOf('@');
// console.log(index);

// //common string methods
// let email_1 = 'great_man@deva.co.in';
// let result_1 = email_1.lastIndexOf('a');
// console.log(result_1);

// let result_2 = email_1.slice(2,5);
// console.log(result_2);

// let result_3 = email_1.substr(2,5);
// console.log(result_3);

// let result_4 = email_1.replace('g' , 'G');
// console.log(result_4);

// //Numbers
// let radius = 10;
// const pi = 3.14;

// //math operators +, -, *, /, **, %
// //order of operations - B I D M A S - 'I' means indices( ex: x^x)
// console.log(10/2);
// let result_5 = radius % 3;
// console.log(result_5);

// let result_6 = pi * radius ** 2;
// console.log(result_6);

// let likes = 10;
// //likes  = likes + 1
// //likes++;
// //likes--;
// //likes += 10;
// //likes -= 5;
// //likes *=2;
// //likes /=2;
// //console.log(likes);

// // NaN - not a number
// console.log(5/ 'hello');
// console.log(5* 'hello');

// let result_7 = 'the blog has ' + likes + ' likes';
// console.log(result_7);

// //template strings
// const title = 'Best reads of 2019'
// const author = 'Mario'
// const comments = 30;

// //concatenation way
// let result_8 = 'The blog called ' + title + ' by ' + author + ' has ' + comments + ' comments';
// console.log(result_8);

// //template string way
// let result_9 = `The blog called ${title} by ${author} has ${comments} comments`;
// console.log(result_9);

// //creating html templates
// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>`;
// console.log(html);

// //object- arrays
// let ninjas = ['ching', 'chang', 'chung'];
// console.log(ninjas);
// console.log(ninjas[1]);
// ninjas[1] = 'bang'
// console.log(ninjas);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);
// console.log(ages.length);

// //array methods
// let answer = ninjas.join(',');
// console.log(answer);
// let answer_1 = ninjas.join('-');
// console.log(answer_1);
// let answer_2 = ninjas.indexOf('chung');
// console.log(answer_2);
// let add = ninjas.concat(['ring', 'rang']);
// console.log(add);
// let push_1 = ninjas.push('push');
// console.log(push_1);
// console.log(ninjas);
// push_1 = ninjas.pop('push');
// console.log(ninjas);

// //Null and Undefined
// let num;
// console.log(num, num+3, `the number is ${num}`);

// let numb = null;
// console.log(numb, numb + 3, `the number is ${numb}`);

// //booleans & comparisons
// console.log(true, false);
// //methods can return booleans
// let email_2 = "greatman@vasu.co.in"
// let result_10 = email_2.includes('@');
// console.log(result_10);
// let result_11 = email_2.includes('!');
// console.log(result_11);

// let names = ['deva', 'vasu', 'tiru'];
// let result_12 = names.includes('vasu');
// console.log('names', result_12);

// //comparison operators
// let live = 25;
// console.log('live', live == 25);
// console.log('live', live == 30);
// console.log('live', live != 30);
// console.log('live', live > 20);
// console.log('live', live < 20);
// console.log('live', live <= 25);
// console.log('live', live >= 25);

// let name_1 = 'deva';
// console.log(name_1 == 'deva');
// console.log(name_1 == 'Deva');
// console.log(name_1 > 'arc');
// console.log(name_1 > 'Deva');
// console.log(name_1 > 'Arc');
// console.log(name_1 > 'erc');
// console.log(name_1 > 'Erc');

// // loose comparison - different types can still be equal
// let live_1 = 25;
// console.log('loose', live_1 == 25);
// console.log('loose', live_1 == '25');
// console.log('loose', live_1 != 25);
// console.log('loose', live_1 != '25');

// //strict comparison - different types cannot be equal
// console.log('strict', live_1 === 25);
// console.log('strict', live_1 === '25');
// console.log('strict', live_1 !== 25);
// console.log('strict', live_1 !== '25');

// //type conversion
// let score_1 = '100';
// score_1 = Number(score_1);
// console.log(score_1 + 1);
// console.log(typeof score_1);

// let result_13 = String(50);
// console.log(result_13, typeof result_13);

// let result_14 = Boolean(100);
// console.log(result_14, typeof result_14);
// // let result_14 = Boolean(-100);
// // console.log(result_14, typeof result_14);
// // let result_14 = Boolean(0);
// // console.log(result_14, typeof result_14);
// // let result_14 = Boolean("100");
// // console.log(result_14, typeof result_14);
// // let result_14 = Boolean("");
// // console.log(result_14, typeof result_14);

// // for loop

// // for (i = 0; i <5; i++) {
// //     console.log('number: ' + i);
// // }

// let list = ['do', 'ding', 'dong'];
// for (i = 0; i<list.length; i++) {
//     console.log(list[i], i);
// }

// //while loop

// // let j = 0;
// // while(j<5) {
// //     console.log('number: ' + j);
// //     j++;
// // }

// let j = 0;
// let list_1 = ['ching', 'chang', 'chung'];
// while(j<list_1.length) {
//     console.log(list_1[j] + ': ' + j);
//     j++;
// }

// //  Do while loop

// let k = 3;
// do {
//     console.log('number: ' + k);
//     k++;
// } while(k<5);

// //  If statements
// const age = 25;
// if (age>=25) {
//     console.log('Your age is correct!');
// }

// const password = 'password@'
// if (password.length >= 8) {
//     console.log('yes');
// }

//  else if statements

// const password = 'p@sswordisgood'

// if (password.length >=12) {
//     console.log('that password is might strong');
// }else if (password.length >= 8) {
//     console.log('password is long enough!');
// }
// else {
//     console.log('password not long enough!');
// }

// logical operators - OR || and AND &&

// const password = 'p@ss'

// if (password.length >=12 && password.includes('@')) {
//     console.log('that password is might strong');
// }else if (password.length >= 8 || password.includes('@')) {
//     console.log('that password is strong enough!');
// }
// else {
//     console.log('that password is not strong enough!');
// }

//  logical NOT (!) -- reverse(switch) the boolean value
// console.log(!false);
// console.log(!true);

// let user = false;
// if(!user) {
//     console.log('you must be logged in to continue ');
// }

// break and continue keywords

// const scores = [50, 25, 0, 40, 100, 30, 70];
// for (let i=0; i < scores.length; i++) {
//     console.log('your score: ', scores[i]);
//     if (scores[i] === 100) {
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// const scores = [50, 25, 0, 40, 100, 30, 70];
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] === 0) {
//         continue;
//     }
//     console.log('your score: ', scores[i]);
//     if (scores[i] === 100) {
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

//  Switch statements

// const grade = 'P';

// switch (grade) {
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got  B!');
//         break;
//     case 'C':
//         console.log('you got  C!');
//         break;
//     case 'D':
//         console.log('you got  D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//     case 'F':
//         console.log('you got  F!');
//         break;
//     default:
//         console.log('not a valid grade');
//         break;
// }

//  Variables & block scope (local scope, global scope)

// let age = 30;
// if (true) {
//     age = 40;
//     console.log('inside 1st code block: ', age);
// }
// console.log('outside code block:  ', age);

// let age = 30;
// if (true) {
//     let age = 40;
//     console.log('inside 1st code block: ', age);
// }
// console.log('outside code block:  ', age);

// let age = 30;
// if (true) {
//     let age = 40;
//     let name = 'Deva'
//     console.log('inside 1st code block: ', age, name);
// }
// console.log('outside code block:  ', age, name);

// let age = 30;
// if (true) {
//     let age = 40;
//     let name = 'Deva'
//     console.log('inside 1st code block: ', age, name);
//     if (true) {
//         let age = 50;
//         console.log('inside 2nd code block: ', age);
//     }
// }
// console.log('outside code block:  ', age, name);

// const age = 30;
// if (true) {
//     const age = 40;
//     const name = 'Deva'
//     console.log('inside 1st code block: ', age, name);
//     if (true) {
//         const age = 50;
//         console.log('inside 2nd code block: ', age);
//     }
// }
// console.log('outside code block:  ', age, name);

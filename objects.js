// object is a collection of name(key)/value pairs
// object has properties and methods

// object
const name = new Object();
name["firstName"] = 'deva'; // computed member access operator --> square brackets "[]"
name.lastName = 'bonu'; // member access operator --> dot "."
console.log(name);


// object literals, adding methods, 'this' keyword
const person = {
  name: 'Vasudev',
  age: 27,
  gender: 'Male',
  height: "6'",
  favorites: [
    { title: 'Chess', likes: 500},
    { title: 'Drawing', likes: 1000}],
  logIn: function() {
    console.log('I just logged in');
  },
  logOut: function() {
    console.log('I just logged out');
  },
  logFav: function(){
    /* person.favorites.forEach(element => {
      console.log(element.title, element.likes);
    }); */
    this.favorites.forEach(element => {
      console.log(element.title, element.likes);
    });
  }
}

console.log(person);
console.log(person.age);
console.log(person.favorites);
console.log(person.logIn());
console.log(person.logOut());
console.log(person.logFav());


// Math object
console.log(Math);

const area = 7.6;
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));
console.log(Math.random());
console.log(Math.round(Math.random()*100));






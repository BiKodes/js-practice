function myFunction() {
  alert('hello');
}

myFunction();

// use an anonymous function along with an event handler:

const myButton = document.querySelector('button');

myButton.onClick = function() {
  alert('hello');
}

// You can also assign an anonymous function to be the value of a variable:
const myGreeting = function() {
  alert('hello');
}

// Function parameters
// doesn't require any parameters:

let myNumber = Math.random();
myNumber;

// needs two parameters :
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
newString;



// Functions inside functions:

function myBigFunction() {
  let myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(valeu) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}

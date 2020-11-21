let shoppingDone = false;

if (shoppingDone === true) {
  let childsAllowance = 10;
} else {
  let childsAllowance = 5;
}

// A note on comparison operators
let cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}

// Nesting if ... else

if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';

  } else if (temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
  }
}

// Logical operators: AND, OR and NOT:
// AND:
if (choice == 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if ( choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
}

// OR:

if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}

 // NOT:
 if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
   console.log('Probably should just stay in then.');
 } else {
   console.log('You should leave the house quickly.');
 }

 // Combined:

if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'steve')) {

}

// Ternary operators:

let greeting = (isBirthday) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';

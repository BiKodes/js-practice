// Strings 1


// Add your code here

let quoteStart = "Don't judge each day by the harvest you reap";

let quoteEnd = ' but by the seeds that you plant.';

let finalQuote = quoteStart + quoteEnd;

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);


// Strings 2
let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';
let quoteLength = quote.length;
let index = quote.indexOf(substring);

let revisedQuote = quote.slice(0, index) + substring;


// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
let para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);


// Strings 3:
let quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

let fixedQuote = quote.toLowerCase();

let newFirstLetter = fixedQuote[0];

let newFirstLetterUpper = newFirstLetter.toUpperCase();
let newQuote = fixedQuote.replace('i', newFirstLetterUpper)

let newQuoteA = newQuote.replace('green eggs and ham', 'omena ugali and managu.')

let finalQuote =  newQuoteA


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = fixedQuote;
let para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);


// Strings 3:
let quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

let fixedQuote = quote.slice(1).toLowerCase();

let newQuote = quote[0] + fixedQuote;

let finalQuote = newQuote.replace('green eggs and ham', 'omena ugali and managu.')



// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = fixedQuote;
let para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);


// Strings 4:
let theorem = 'Pythagorean theorem';
let newTheorem = `Pythagorean theorem`;

let a = 5;
let b = 8;

let myString = 'Using ${ newTheorem }, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${ b } and ${ a }, the length of the hypotenuse is ${ a**2 } + ${ b**2 } .';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);



// Filtering greeting messages:
const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (input.indexOf('Christmas') !== -1) {
    let listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
  }
}

// Fixing capitalization:
const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  // write your code just below here

let input1 = input.toLowerCase();
let firstLetter = input1.slice(0, 1);
let firstLetterUpper = input1.replace(firstLetter, firstLetter.toUpperCase());

  let result = firstLetterUpper;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}


// Making new strings from old parts:
const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  // write your code just below here

let stationCode = input.slice(0, 3);

let semiColon = input.indexOf(";");

let humanNames = input.slice(semiColon + 1);

let finalString = stationCode +':'+ humanNames ;


  let result = finalString;

  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

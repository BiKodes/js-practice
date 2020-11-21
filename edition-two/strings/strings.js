// Creating a string

let string = 'The revolution will not be televised.';

string;

let badString = string;
badString;

// Single quotes vs. double quotes:
let sql = 'Single quotes';
let dbl = "Double quotes";

sql;
dbl;

let sglDbl = 'Would you eat a "fish supper"?';
let dblSgl = "I'm feeling blue.";

sqlDbl;
dblSgl;


// Escaping characters in a string:

let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;


// Concatenating strings
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined;


let multiple = one + one + one + one + two;
multiple;

// mix of variables and actual strings

let response = one + 'I am fine-' + two;   //When you enter an actual string in your code,
response;                                   //enclosed in single or double quotes, it is called a string literal.


// Numbers vs. strings

let myDate = '19' + '67';
typeof myDate;

 // Number object converts anything passed to it into a number,:
 let myString = '123';
 let myNum = Number(myString);
 typeof myNum;


// every number has a method called toString() that converts it to the equivalent string:
let myNum = 123;
let myString = myNum.toString();
typeof myString;


// Template literals or Strings:

// To turn a standard string literal into a template literal, you have to replace the
// quote marks (' ', or " ") with backtick characters (` `). So, taking a simple example:

let song = 'Fight the Youth';

 // turned into a template literal:
song = `Fight the Youth`;

let score = 9;
let highestScore = 10;

let outPut = `I like the song "${ song }". I give it a score of ${ score/highestScore * 100 }%.`;

let examScore = 45;

let examHighestScore = 70;

examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore))}%).
${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;

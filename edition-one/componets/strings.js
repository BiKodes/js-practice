let string = 'The revolution will not be televised.';
string;

let badString = string;
badString;

// Single quotes vs. double quotes

let sgl = 'Single quotes.';
let dbl = "Double quotes";
sgl;
dbl;

let sglDbl = 'Would you eat a "fish supper"?';
let dblSgl = "I'm feeling blue.";
sglDbl;
dblSgl;


// Escaping characters in a string


let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;


let s_prim = 'foo'        //String primitives
let s_obj = new string(s_prim)    //String objects

console.log(typeof s_prim)   //Logs "string"
console.log(typeof s_obj)    //Logs "object"


// Long literal strings

let longString = "This is a very long string which needs "+
                  "to wrap across multiple lines because "+
                  "otherwise my code is unreadable."

let longString = "This is a very long string which needs\
to wrap across multiple lines because\
otherwise my code is unreadable."


// Character access

return 'cat'.charAt(1) // returns "a"
return 'cat'[1]         // returns "a"


// Comparing strings

let a = 'a'
let b = 'b'

if (a < b) {//true
  console.log(a + 'is less than' + b)
} else if (a > b) {
  console.log(a + 'is greater than' + b)
} else {
  console.log(a + ' and ' + b + 'are equal.')
}

// Upper case is used instead of lower case in this function,
//due to problems with certain UTF-8 character conversions.
// Note that a == b compares the strings in a and b for being
//equal in the usual case-sensitive way.//
function isEqual(str1, str2)
{
  return str1.toUpperCase() === str2.toUpperCase()
} //isEqual


// Concatenating strings

let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined;

let multiple = one + one + one + one + one + two;
multiple;


// When you enter an actual string in your code, enclosed in single or double quotes,
// it is called a string literal.
let response = one + 'I am fine -' + two;
response;


// Numbers vs. strings
// The Number object converts anything passed to it into a number, if it can.

let myString = '123';
let myNum = Number(myString);
typeof myNum;


 // every number has a method called toString() that converts it to the equivalent string.

 let myNum = 123;
 let myString = myNum.toString();
 typeof myString;


 // Template literals or Strings

 let score = 9;
 let highestScore = 10;
 let output = 'I like the song "' + song + '". I gave it a score of ' + (score/highestScore * 100) + '%.';

// Template literals simplify this enormously:

output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;


let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore >= 49 ? 'Well done, you passed!'
: 'Bad luck, you didn\'t pass this time.' }`;

 // newline character, \n:
 output = 'I like the song "'+ song +'".\n gave it a score of' + (score/highestScore* 100) + '%';

output = `I like the song "${ song }".
I gave it a score of ${ score/highestScore * 100}%.`;


// Expression interpolation
let a = 5;
let b =10;
console.log('Fifteen is' + (a + b) + 'and\nnot ' + (2 * a+ b)+ '.');

console.log(`Fifteen is ${a + b} and
  not ${2 * a + b}.`);

// Nesting templates

// In ES5:
let classes ='header';
classes += (isLargeScreen() ?
'' : item.isCollapsed ?
  ' icon-expander' : ' icon-collapser');


// In ES2015 with template literals and without nesting:

const classes = `header ${ isLargeScreen() ? '':
  (item.isCollapsed ? 'icon-expander' : 'icon-collapser') };`

// In ES2015 with nested template literals:

const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}`}`;


// Tagged templates

let person = 'Mike';
let age = 26;

function myTag(strings, person,ageExp) {
  let str0 = strings[0];
  let str1 = strings[1];

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }
  return `${str0}${personExp}${str1}${ageStr}`
}

let output = myTag`That ${ person } is a ${ age }`;
console.log(output);

// Tag functions don't even need to return a string!



function template(strings, ...keys) {
  return (function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

let t1Closure = template`${0}${1}${0}!`;
t1Closure = template('Y', 'A');

let t2Closure = template`${0}${'foo'}!`;
t2t2Closure('Hello', {foo: 'World'});

let t3Closure = template`I'm ${'name'}.I'm almost ${'age'} years old.`;
t3Closure('foo', {name: 'MDN', age: 30});
t3t3Closure({name: 'MDN', age: 30});


// Raw strings
 // allows you to access the raw strings as they were entered, without processing escape sequences.

 function tag(strings) {
   console.log(strings.raw[0]);
 }
 tag `string text line 1\n string text line 2`

let str = String.raw`Hi\n${2+3}!`;
str.length;
Array.from(str).join(',');


// Finding a substring inside a string and extracting it
let browserType = 'mozilla';
browserType.length;

browserType.indexOf('zilla');
browserType.indexOf('vanilla');


if(browserType.indexOf('mozilla') !== -1) {
  // do stuff with the string
}

browserType.slice(0,3);
browserType.slice(2);

// Changing case

let radData = 'My NaMe Is Mud'
radData.toUpperCase();
radData.toLowerCase();


// Updating parts of a string

browserType = browserType.replace('moz', 'van');

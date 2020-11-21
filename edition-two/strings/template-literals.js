// Multi-line strings:

// Using normal strings:
console.log('string text line 1\n' +
'string text line 2');


// Using template literals:
console.log(`string text line 1
string text line 2`);

// Expression interpolation:

// embed expressions within normal strings:
let a = 5;
let b = 10;

console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a+b) + '.');

// with template literals:
console.log(`Fifteen is ${ a + b } and
  not ${ 2 * a + b }.`);

// Nesting templates:
 // allow inner backticks simply by using them inside a placeholder ${ } within the template.

 const   classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}`}`;

// Tagged templates:
// A more advanced form of template literals are tagged templates.

// name of the function used for the tag can be whatever you want:

let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0];
  let str1 = strings[1];

  let ageStr;
  if (ageExp > 99) {
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }
  return `${str0}${personExp}${str1}${ageStr}`;
}

let output = myTag`That ${ person } is a ${ age }`;

console.log(output);


// Raw strings:
// The special raw property, available on the first argument to the tag function,
// allows you to access the raw strings as they were entered, without processing escape sequences.

function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;

 // the String.raw() method exists to create raw strings—just like the default
 // template function and string concatenation would create.
let str = string.raw`Hi\n${2+3}!`;

str.length;

Array.from(str).join(',');

// Math 1


// Add your code here
let ageFloki = 12;
let ageRagnar = 12;
let ageWife1 = 10;
let ageWife2 = 8;

let menAll = ageFloki + ageRagnar;
let wifeMinus = ageWife1 - ageWife2;

let finalResult = menAll * wifeMinus;
let evenOddResult = finalResult % 2 == 0 ? 0: 1


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
let para2 = document.createElement('p');
let evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);


// Math 2



// Add/update your code here

let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

result *= result2;



let finalResult = result.toFixed(2);
typeof finalResult;
 let finalNumber = Number(finalResult);


// Final result should be 10.42

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
let para2 = document.createElement('p');
let finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);


  // Math 3

  // Statement 1: The elephant weights less than the mouse
  let eleWeight = 1000;
  let mouseWeight = 2;

  let weightComparison = eleWeight < mouseWeight ? true: false;

  // Statement 2: The Ostrich is taller than the duck
  let ostrichHeight = 2;
  let duckHeight = 0.3;

  let heightComparison = ostrichHeight > duckHeight ? true: false;

  // Statement 3: The two passwords match
  let pwd1 = 'stromboli';
  let pwd2 = 'stROmBoLi'

  let pwdMatch = pwd1 !== pwd2 ? true: false;
  // Add your code here

  // Don't edit the code below here!

  section.innerHTML = ' ';
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  let para3 = document.createElement('p');

  let weightTest = weightComparison ? 'True — elephants weight less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
  let heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
  let pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

  para1.textContent = weightTest;
  section.appendChild(para1);
  para2.textContent = heightTest;
  section.appendChild(para2);
  para3.textContent = pwdTest;
  section.appendChild(para3);
      

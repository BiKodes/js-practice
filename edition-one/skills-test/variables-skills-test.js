// Variables 1:

// Add your code here
  let myName = 'Steve Biko';
  let myAge = '29.6';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myName;
let para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);


// Variables 2:


// Add your code here

let myName = 'Paul';

myName = myName.replace('Paul','Biko');

// Don't edit the code below here!

section.innerHTML = ' ';
let para = document.createElement('p');
para.textContent = myName;
section.appendChild(para);

// Variables 3:


let myAge = '12';

let all = 20 + Number(myAge);

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${all}`;
section.appendChild(para1);
section.appendChild(para2);

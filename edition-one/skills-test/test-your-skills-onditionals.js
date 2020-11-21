// Conditionals 1:


let season = 'summer';
let response = '';


// Add your code here

if (season === 'summer') {
   response = 'The season is summer';

} else {
  response = 'we don\'t know what season it is.';
};

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);



// Conditionals 2:


let response;
let score = 75;
let machineActive = true;

// Add your code here

if ( machineActive === true ) {
  response = 'The machine is switched on.';

   if (score < 0 || score > 100) {
response = "This is not possible, an error has occurred.";
} else if (score >= 0 && score <=19) {
response = "That was a terrible score — total fail!";
} else if (score >= 20 && score <=39) {
response = "You know some things, but it's a pretty bad score. Needs improvement.";

} else if (score >= 40 && score <= 69) {
response = "You did a passable job, not bad!";
} else if (score >=70 && score <=89) {
response = "That\'s a great score, you really know your stuff.";
} else if (score >= 90 && score <= 100) {
 response = "What an amazing score! Did you cheat? Are you for real?";
}

} else {
  response = 'Please switch on the machine';
};

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);

// Conditionals 3:


let response;
let score = 75;
let machineActive = true;

if(machineActive) {
	// Add your code here

switch(score) {
case score < 0 || score > 100:
 response = "This is not possible, an error has occurred.";
 break;
case score >= 0 && score <=19:
 response = "That was a terrible score — total fail!";
 break;
case score >= 20 && score <=39:
 response = "You know some things, but it's a pretty bad score. Needs improvement.";
 break;
case score >= 40 && score <= 69:
 response = "You did a passable job, not bad!";
 break;
case score >=70 && score <=89:
 response = "That\'s a great score, you really know your stuff.";
 break;
case score >= 90 && score <= 100:
 response = "What an amazing score! Did you cheat? Are you for real?";
 break;
}

} else {
  response = 'The machine is turned off. Turn it on to process your score.';
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);

// Conditionals 4:

let machineActive = false;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here

if (machineActive = true) {
  machineResult = 'The machine is on';
  if ( pwd === 'cheese') {
  pwdResult = 'Logged In Successfuly!';
} else if (pwd !== 'cheese') {
 pwdResult = 'Logging In Failed!';
}
} else {
 'The machine is off';
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);




// Conditionals 4



let machineActive = document.querySelector('false');
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here

machineActive.addEventListener('change', machineWorking);

function machineWorking() {
 const choice = machineActive.value;

switch(choice) {

 case machineActive = true:
  machineResult = 'The machine is on';
  break;
 case pwd === 'cheese':
  pwdResult = 'Logged In Successfuly!';
  break;
 case pwd !== 'cheese':
  pwdResult = 'Logging In Failed!';
  break;
 case machineActive = false:
  para1.textContent = 'The machine is turned off!';
  break;

 default:
 para1.textContent = '';

 }
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);

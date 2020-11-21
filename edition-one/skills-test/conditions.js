// A simple calendar:
const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
  const choice = select.value;

  // ADD CONDITIONAL HERE
let days = 31;

if (choice === 'February') {
days = 28;} else if ( choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
days = 30;}

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');


// More color choices!:

const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  const choice = select.value;

  // ADD SWITCH STATEMENT
switch(choice) {
 case 'white':
  update('white', 'black');
  break;

 case 'black':
  update('black', 'white');
  break;

 case 'purple':
  update('purple', 'white');
  break;

 case 'yellow':
  update('yellow', 'black');
  break;

 case 'psychedelic':
  update('green', 'white');
  break;
	}
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}


function displayMessage() {

const html = document.querySelector('html');

const panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = 'This is a message box';
panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.onclick = function() {
  panel.parentNode.removeChild(panel);
}

}

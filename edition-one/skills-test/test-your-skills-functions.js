let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here

function chooseName() {

const randomName = names[Math.floor(Math.random() * names.length)];
return randomName;
}
para.textContent = chooseName();
// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);


// Functions 2:

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 50;
let y = 60;
let width = 100;
let height = 75;
let color = 'blue';

// Add your code here

function drawRect() {
  ctx.clearRect(x,y,width,height);
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.rect(width, height, x, y);
  ctx.fill();
};

drawRect();



// Functions 3:

let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here

  function random(10, 50) {
    const randomNumber = Math.floor(Math.random() * (50 - 10) + 10 );
    return randomNumber;
}

function chooseName() {
  names[i] = random();
 return names;
}

para.textContent = '';

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);

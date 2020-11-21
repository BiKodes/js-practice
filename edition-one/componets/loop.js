for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}

const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin']
let info = 'My cats are called ';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ',';
  }
}

para.textContent = info;


for (let i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

para.textContent = info;

// Skipping iterations with continue:

let num = input.value;

for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + ' ';

}

// while and do ... while:

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}

// Do...while:
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin']
let info = 'My cats are called ';
const para = document.querySelector('p');


let i = 0;

do {
  if (i === cats.length - 1) {
    info += 'and' + cats[i] + '.';
  } else {
    info += cats[i] + ',';
  }

  i++;
} while (i < cats.length);

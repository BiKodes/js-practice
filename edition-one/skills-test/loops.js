 // Launch countdown!:

 const output = document.querySelector('.output');
 output.innerHTML = '';

 let i = 10;

 while( i >= 0) {
  let para = document.createElement('p');
  para.textContent = '';

   if(i === 10) {
   para.textContent = 'Countdown ' + [i];
 } else if (i === 0) {
   para.textContent = 'Blast off!';
 } else {
   para.textContent = [i];
 }

 output.appendChild(para);

 i--;
 }


// Filling in a guest list:
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for (let i = 0; i < people.length; i++) {
 if (people[i] === 'Phil' || people[i] === 'Lola') {
 refused.textContent += people[i] + ', ';
} else {
  admitted.textContent += people[i] + ', ';

}

}
refused.textContent = refused.textContent.slice(0, -2) + '.';
admitted.textContent = admitted.textContent.slice(0, -2) + '.';




// Which loop type should you use?:

// for statement:
function howMany() {
  let numberSelected = 0;

  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function) {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
}




// do...while statement:

let i = 0;

do {
  i += 1;
  console.log(i);
} while (i < 5);

// while statement:

 let n = 0;
 let x = 0;
 while (n < 3) {
   n++;
   x += n;
 }


// labeled statement:
markLoop:
while (theMark === true) {
   doSomething();
}


// break statement:

for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue){
    break;
  }
}


// Breaking to a label:

let x = 0;

let z = 0;

labelCancelLoops: while (true) {
  console.log('Outer loops:' + x);

  x += 1;
  z = 1;

  while (true) {
    console.log('Inner loops: ' + z);

    z += 1;

    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}




// continue statement:
let i = 0;
let n = 0;

while(i < 5) {
  i++;
  if (i === 3) {
    continue;
  }

  n += i;
  console.log(n);
}

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    //continue
  }

  n += i;
  console.log(n);
}

let i = 0;
let j = 10;

checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) === 0) {
          continue checkj;
        }
        console.log(j + 'is odd.');
      }

      console.log('i = ' + i);
      console.log('j = ' + j);
  }

// for...in statement:

function dump_props(obj, obj_name) {
  let result = '';

  for (let i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }

  result += '<hr>';

  return result;

}


const arr = [3, 5, 7];
arr.foo = 'hello';


for (let i in arr) {
  console.log(i);
}

for (let i of arr) {
  console.log(1);
}

// for...in iterates over property names, for...of iterates over property values:

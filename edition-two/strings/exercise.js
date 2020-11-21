// Filtering greeting messages:

const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i].indexOf('Christmas') !== -1) {
    let result = input;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}


// Fixing capitalization:

const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  let lower = input.toLowerCase();
  let firstLetter = lower.slice(0,1);
  let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  let result = capitalized;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);

}

// Making new strings from old parts:

const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  // write your code just below here

let code = input.slice(0,3);

let indexC = input.indexOf(';');

let readH = input.slice(indexC + 1);

  let result = code +' : ' + readH;

  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

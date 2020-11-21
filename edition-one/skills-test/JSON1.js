const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))
let request = new XMLHttpRequest();

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;

  // Add your code here
 const cats = JSON.parse(catString);

for (let i = 0; i < cats.length; i++){
  motherinfo.textContent = cats[i].name;
  motherinfor.textContent += ' and ' + cats[i].name.lenght -1 + '.';

 const kitten = cats[i].kittens

 for (let j = 0; j < kitten.length; j++){
  const gender = kitten[j].gender;

   if( gender === m){
    male += kitten[j].gender + ', ';
    kittenInfo.appendChild(male);
} else {
    female += kitten[j].gender + ',';
    kittenInfo.appendChild(female);
}
     total += kitten[j];
}

}


// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    

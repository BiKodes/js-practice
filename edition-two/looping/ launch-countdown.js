
let output = document.querySelector('.output');
output.innerHTML = '';

 let i = 10;

while ( i >=0) {
    const para = document.createElement('p');
    output.appendChild(para);
    para.textContent = '';
   
    if (i === 10) {
    para.textContent = 'Countdown' + [i];
   } else if ( i === 0) {
   
   para.textContent = "Blast off!";
   
   } else {
    para.textContent = [i]; 
   }
   output.appendChild(para);
   i--;
   }
// const para = document.createElement('p');  
// para.textContent = ;

let output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

for (let i = 10; i >=0 && i <= 10; i--) {
    const para = document.createElement('p');
    output.appendChild(para);
    para.textContent = '' ;
   
    if (i === 10) {
    para.textContent = 'Countdown' + [i];
   } else if ( i === 0) {
   
   para.textContent = "Blast off!";
   
   } else {
    para.textContent = [i]; 
   }

   output.appendChild(para);

   }


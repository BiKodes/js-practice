
let season = 'winter';
let response;

// Add your code here


if (season === 'summer') {
 response = 'The season is Summer';
} else if ( season === 'winter') {
 response = 'The season is Winter';
} else {
 response = ' We don\'t know what season it is.';
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
    
    
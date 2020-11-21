const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', 'xxx');
thumbBar.appendChild(newImage);

for(let i = 0; i < thumbBar.length; i++) {
  thumbBar[i] = newImage;
  newImage.replace('xxx', 'jpg');
  newImage.onclick = 'jpg';
}

/* Wiring up the Darken/Lighten button */

 function buttonClick() {
  btn.getAttribute('class');

  if('class' ,'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }

};

btn.addEventListener('click', buttonClick);

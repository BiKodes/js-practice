const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255 + ' ,' + random(255) + '))';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);

 // It is perfectly appropriate to put all the code inside the addEventListener() function,
 // in an anonymous function, like this:
btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) +')';
  document.body.style.backgroundColor = rndCol;
});

// register multiple handlers for the same listener. second line overwrites the
// value of onclick set by the first line
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);

// Event objects:

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
 update('black', 'purple');
 break;

case 'purple':
 update('purple', 'yellow');
 break;

case 'yellow':
 update('yellow', 'white');
 break;

case 'psychedelic':
 update('psychedelic','yellow');
 break;
  
}


}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

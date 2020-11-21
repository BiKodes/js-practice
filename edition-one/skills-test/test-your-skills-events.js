// Events 1:
let btn = document.querySelector('.off');

// Add your code here
    function btnChange() {
 btn = document.querySelector('.on');
}

btn.addEventListener('click',btnChange)

// OR:

let btn = document.querySelector('.off');

// Add your code here
 btn.onclick = function() {
  btn.textContent = 'Machine is on';
}

// Events 2:



// Events 3:

      let buttonBar = document.querySelector('.button-bar');
      let section = document.querySelector('section');

      // Add your code here



    buttonBar.onclick = function() {
  buttonBar.setAttribute('class', 'data-color');
}

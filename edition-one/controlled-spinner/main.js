const spinner = document.querySelector('div');
let rotateCount =0;
let startTime = null;
let rAF;

 // tracking variable to check whether the spinner is spinning or not,
let spinning = false;

function draw(timestamp) {
  if(!startTime) {
    startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3;

  if (rotateCount > 359) {
    rotateCount %= 360;
  }

  spinner.style.transform = `rotate(${rotateCount}deg)`;

  rAF = requestAnimationFrame(draw);
}


const body = document.querySelector('body');

body.addEventListener('click', () => {

    if (spinning) {
      cancelAnimationFrame(rAF)
      spinning = false;
    } else{
      draw();
      spinning = true;
    }

})

// Clearing a requestAnimationFrame() call
// cancelAnimationFrame(rAF);

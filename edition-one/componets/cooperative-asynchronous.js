

// setTimeout()
    // Execute a specified block of code once after a specified time has elapsed
    // or once after a specified time has elapsed.

    let myGreeting = setTimeout(function() {
      alert('Hello, Mr. Universe!');
    }, 2000)

    // With a named function:
    let myGreeting = setTimeout(function sayHi() {
      alert('Hello, Mr. Universe!');
    }, 2000)

    // With a function defined separately

    function sayHi() {
      alert('Hello Mr.Universe');
    }

    let myGreeting = setTimeout(sayHi, 2000);



    // Passing parameters to a setTimeout() function:
    // Any parameters that you want to pass to the function being run inside the setTimeout()
    // must be passed to it as additional parameters at the end of the list.

    function sayHi(who) {
      alert(`Hello ${who}!`);
    }

    // pass the name of the person into the setTimeout() call as a third parameter:

    let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');

   // Clearing timeouts:
   // if a timeout has been created, you can cancel it before the specified time has
   // elapsed by calling clearTimeout(), passing it the identifier of the setTimeout() call as a parameter.

clearTimeout(myGreeting);



// setInterval()
    // Execute a specified block of code repeatedly with a fixed time delay between each call.
    // when you need to run the code over and over again.
    // The function you pass as the first parameter is executed repeatedly at no less
    // than the number of milliseconds given by the second parameter apart, rather than once.

    function displayTime() {
      let date = new Date();
      let time = date.toLocaleTimeString();
      document.getElementById('demo').textContent = time;

    }

     const createClock = setInterval(displayTime, 1000);


     // Clearing intervals:
     // setInterval() keeps running a task forever, unless you do something about it


// requestAnimationFrame()
    // Executes a specified block of code before the browser next repaints the display,
    // allowing an animation to be run at a suitable framerate regardless of the environment it is being run in.
    // It can be stopped by passing the identifier returned by the setInterval() call
    // to the clearInterval() function

    const myInterval = setInterval(myFunction, 2000);
    clearInterval(myInterval);


// Things to keep in mind about setTimeout() and setInterval():

// Recursive timeouts:
 // Another way to use setTimeout() is to call it recursively to run the same code
 // repeatedly, instead of using setInterval().

let i = 1;

setTimeout(function run() {
  console.log(i);

  i++;

  setTimeout(run, 100);
}, 100);


// uses setInterval() to accomplish the same effect::

let i =0;

setInterval(function run() {
  console.log(i);
  i++;
}, 100);


// Immediate timeouts:
// Using 0 as the value for setTimeout() schedules the execution of the specified callback
// function as soon as possible but only after the main code thread has been run.

setTimeout(function() {
  alert('world');
}, 0);

alert('Hello');

// Clearing with clearTimeout() or clearInterval():
// clearTimeout() and clearInterval() both use the same list of entries to clear from.
// You can use either method to clear a setTimeout() or setInterval().

// For consistency, you should use clearTimeout() to clear setTimeout() entries
 // and clearInterval() to clear setInterval() entries.  This will help to avoid confusion.


// requestAnimationFrame():
// Takes as an argument a callback to be invoked before the repaint.

function draw() {
  //Drawing code comes here

  requestAnimationFrame(draw);

}

draw();

// define a function in which your animation is updated
// call it to start the process off. At the end of the function block you call
// requestAnimationFrame() with the function reference passed as the parameter,

// this instructs the browser to call the function again on the next display repaint.
// This is then run continuously, as the code is calling requestAnimationFrame() recursively.


// How fast does your animation run:
// The smoothness of your animation is directly dependent on your animation's
// frame rate and it is measured in frames per second (fps)
// The higher this number is, the smoother your animation

// more frames means more processing, which can often cause stuttering and
// skipping — also known as dropping frames, or jank.


// on't specify a time interval for requestAnimationFrame(). It just runs it as
// quickly and smoothly as possible in the current conditions.
// The browser also doesn't waste time running it if the animation is offscreen

// setInterval(),requires an interval to be specified.


// Including a timestamp:

// The actual callback passed to the requestAnimationFrame() function can be given
// a parameter, too: a timestamp value, that represents the time since the
// requestAnimationFrame() started running.
// It allows you to run things at specific times and at a constant pace, regardless
// of how fast or slow your device might be.

let startTime = null;

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  currentTime = timestamp - startTime;

  //Do something based on current time

  requestAnimationFrame(draw)
}

draw();

// Clearing a requestAnimationFrame() call:

// Clearing a requestAnimationFrame() call can be done by calling the corresponding
// cancelAnimationFrame() method.

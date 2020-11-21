// Its two or more objects or events not existing or happening at the same time
// Multiple related things happening without waiting for the previous one to complete

// Networking and communications:
// Asynchronous communication is a method of exchanging messages between two or more
// parties in which each party receives and processes messages whenever it's convenient or
// possible to do so, rather than doing so immediately upon receipt


// Software design:
// building code that allows a program to ask that a task be performed alongside the
// original task (or tasks), without stopping to wait for the task to complete.
// When the secondary task is completed, the original task is notified using an agreed-upon mechanism


// Threads:
// Is basically a single process that a program can use to complete tasks.
// Each thread can only do a single task at once.
// Each task will be run sequentially; a task has to complete before the next one can be started.


// JavaScript is single-threaded:

// Even with multiple cores, you could only get it to run tasks on a single thread, called the main thread.
// Web workers allow you to send some of the JavaScript processing off to a separate
// thread, called a worker  so that you can run multiple JavaScript chunks simultaneously.

// A worker to run expensive processes off the main thread so that user interaction is not blocked.
                          // Main thread: Task A --> Task C
                          // Worker thread: Expensive task B

// Workers are not able to access the DOM — you can't get a worker to directly do anything to update the UI.

// although code run in a worker is not blocking, it is still basically synchronous.

// Promises allow you to set an operation running (e.g. the fetching of an image from the server),
// and then wait until the result has returned before running another operation:


// There are two main types of asynchronous code style you'll come across in JavaScript code,
//  old-style callbacks and newer promise-style code.

// Async callbacks:
// Are functions that are specified as arguments when calling a function which will
// start executing code in the background.
// When the background code finishes running, it calls the callback function to
// let you know the work is done.
// When we pass a callback function as an argument to another function,
// we are only passing the function's reference as an argument.

// It is “called back” (hence the name) asynchronously somewhere inside the containing function’s body.
 // The containing function is responsible for executing the callback function when the time comes.

 function loadAsset(url, type, callback) {
   let xhr = new XMLHttpRequest();
   xhr.open('GET', url);
   xhr.responseType = type;

   xhr.onload = function() {
     callback(xhr.response);
   };

   xhr.send();
 }

 function displayImage(blob) {
   let objectURL = URL.createObjectURL(blob);

   let image = document.createElement('img');
   image.src = objectURL;
   document.body.appendChild(image);
 }

 loadAsset('coffee.jpg', 'blob', displayImage);

// Callbacks are versatile — not only do they allow you to control the order in
// which functions are run and what data is passed between them, they also allow you
// to pass data to different functions depending on circumstance. So you could have
// different actions to run on the response downloaded, such as processJSON(), displayText()


// Promises:
// The fetch() API,is basically like a modern, more efficient version of XMLHttpRequest.

fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
  initialize();
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});

// Promises versus callbacks:
// They are essentially a returned object to which you attach callback functions,
// rather than having to pass callbacks into a function.
// Are specifically made for handling async operations
// Can chain multiple async operations together using multiple .then() operations,
// Are always called in the strict order they are placed in the event queue.
// All errors are handled by a single .catch() block at the end of the block,
// rather than being individually handled in each level of the "pyramid".
// They avoid inversion of control,

// The nature of asynchronous code:

console.log('Starting');
let image;

fetch('coffee.jpg').then((response) ==> {
  console.log('It worked :)')
  return response.blob();
}).then((myBlob) => {
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

console.log('All done');

// smaller example:

console.log("registering click handler");

button.addEventListener('click', () => {
  console.log("get click");
});

console.log("all done");

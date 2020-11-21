// Asynchronous callbacks:
// Involves a function being passed into another function as a parameter,
// its invoked when an asynchronous operation has been completed.so as callback can
// in turn do something with the result.
// They are useful for Repeating operation(recursive callbacks) & Multiple sequential operations(nested callbacks)

// This loads a resource via the XMLHttpRequest API:

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


// setTimeout():
// A method that allows you to run a function after an arbitrary amount of time has passed.
// the browser will wait two seconds before executing the anonymous function, then will display the alert message

let myGreeting = setTimeout(function() {
  alert('Hello, Mr.Universe!');
}, 2000)


// setInterval():
// is a method that allows you to run a function repeatedly with a set interval of time between each execution.
// Not as efficient as requestAnimationFrame(), but allows you to choose a running rate/frame rate.

function displayTime() {
  let date = new Date();

  let time = date.toLocaleTimeString();
  document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);


// requestAnimationFrame():
// is a method that allows you to run a function repeatedly, and efficiently,
// at the best framerate available given the current browser/system.

const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
  if(!startTime) {
    startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3;

  if(rotateCount > 359) {
    rotateCount %= 360;
  }

  spinner.style.transform = 'rotate(' + rotateCount +'deg)';

  rAF = requestAnimationFrame(draw);
}

draw();


// Promises:
// JavaScript feature that allows you to run asynchronous operations and wait until
// it is definitely complete before running another operation based on its result.
// The following code fetches an image from the server and displays it inside an <img> element;

fetch('coffee.jpg')
 .then(response => response.blob())

 .then(myBlob => {
   let objectURL = URL.createObjectURL(myBlob);

   let image = document.createElement('img');
   image.src = objectURL;
   document.body.appendChild(image);
 })

 .catch(e => {
   console.log('There has been a problem with your fetch operation: ' + e.message);
 });


 // Promise.all():
 // A JavaScript feature that allows you to wait for multiple promises to complete
 // before then running a further operation based on the results of all the other promises.

// fetches several resources from the server, and uses Promise.all() to wait for all of them
// to be available before then displaying all of them

function fetchAndDecode(url, type) {
  // Returning the top level promise, so the result of the entire chain is returned out of the function

  return fetch(url).then(response => {

    // Depending on what type of file is being fetched, use the relevant function to decode its contents

    if(type === 'blob') {
      return response.blob();
    } else if(type === 'text') {
      return response.text();
    }
  })
  .catch(e => {
    console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
  });
}

// Call the fetchAndDecode() method to fetch the images and the text, and store their promises in variables

let coffee = fetchAndDecode('coffee.jpg', 'blob');
let tea = fetchAndDecode('tea.jpg', 'blob');
let description = fetchAndDecode('description.txt', 'text');

// Use Promise.all() to run code only when all three function calls have resolved
Promise.all([coffee, tea, description]).then(values => {
  console.log(values);

  // Store each value returned from the promises in separate variables; create object URLs from the blobs
  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

   // Display the images in <img> elements
   let image1 = document.createElement('img');
   let image2 = document.createElement('img');
   image1.src = objectURL1;
   image2.src = objectURL2;
   document.body.appendChild(image1);
   document.body.appendChild(image2);

    // Display the text in a paragraph
    let para = document.createElement('p');
    para.textContent = descText;
    document.body.appendChild(para);

});

// Async/await:
// Syntactic sugar built on top of promises that allows you to run asynchronous
// operations using syntax that's more like writing synchronous callback code.

// a refactor of the simple promise example  that fetches and displays
// an image, written using async/await

async function myFetch() {
  let response = await fetch('coffee.jpg');

  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch();

// If you want to use async/await but are concerned about older browser support,use BabelJS library 

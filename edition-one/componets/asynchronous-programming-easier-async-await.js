// The async keyword:
 // which you put the async keyword in front of a function declaration you turn it into an async function.
// It is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code.

// async keyword is added to functions to tell them to return a promise rather than directly returning the value.


// The await keyword:
// await only works inside async functions.
// It put in front of any async promise-based function to pause your code on that line until the promise fulfills,
// then return the resulting value.
// You can use await when calling any function that returns a Promise, including web API functions.

async function hello() {
  return greeting = await Promise.resolve("Hello");
};

hello().then(alert);

// Rewriting promise code with async/await:

async function myFetch() {
  let response = await fetch('coffee.jpg');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let myBlob = await response.blob();

    let objectURL = URL.createObjectURl(myBlob);
    let image = document.createElement('img');

    image.src = objectURL;

    document.body.appendChild(image);
  }
}

myFetch();
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});

 // refactoring the code to use a hybrid approach of promises and await:
 // To bring the second half of the function out into a new block to make it more flexible.

 async function myFetch() {
   let response = await fetch('coffee.jpg');

   if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
   } else {
     return await response.blob();
   }
 }

myFetch().then((blob) => {
  let objectURL = URL.createObjectURl(blob);
  let image = document.createElement('img');

  image.src = objectURL;
  document.body.appendChild(image);
}).catch(e => console.log(e));


// Adding error handling:
// using a synchronous try...catch structure with async/await.

async function myFetch() {
  try {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let myBlob = await response.blob();
      let objectURL = URL.createObjectURl(myBlob);
      let image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    }
  } catch(e) {
    console.log(e);
  }
}

myFetch();

// Using refactored version of the code we continue the hybrid approach and chaining
// a .catch() block onto the end of the .then() call:

async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.blob();
  }
}


myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})

.catch((e) =>
  console.log(e)
);

// Awaiting a Promise.all():
async function fetchAndDecode(url, type) {
  let response = await fetch(url);

  let content;

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    if(type === 'blob') {
      content = await response.blob();
    } else if(type === 'text') {
      content = await response.text();
    }

    return content;
  }
}


async function displayContent() {

  let coffee = fetchAndDecode('coffee.jpg', 'blob');

  let tea = fetchAndDecode('tea.jpg', 'blob');

  let description = fetchAndDecode('description.txt', 'text');

  let values = await Promise.all([coffee, tea, description]);

  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;

  document.body.appendChild(image1);
  document.body.appendChild(image2);

  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);

}

displayContent()
.catch((e) =>
  console.log(e)
);

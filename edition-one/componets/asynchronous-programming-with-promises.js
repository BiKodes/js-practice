// What are promises?
//It is an object that represents an intermediate state of an operation
// whose result of some kind will be returned at some point in the future.

function handleCallButton(evt) {
  setStatusMessage("Calling...");

  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(chatStream => {
      selfViewElen.srcObject = chatStream;
      chatStream.getTracks().forEach(track => myPeerConnection.addTrack(track, chatStream));
      setStatusMessage("Connected");
    }).catch(err => {
      setStatusMessage("Failed to connect");
    });
}


// The trouble with callbacks:
// pseudo-code representation of ordering pizza as an analogy with old-style callbacks,

chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

// equires the failureCallback() to be called multiple times

// Improvements with promises:
// representing the above code with asynchronous promises:

chooseToppings()
  .then(function(toppings) {
    return placeOrder(toppings);
  });

  .then(function(order) {
    return collectOrder(order);
  });

  .then(function(pizza) {
    eatPizza(pizza);
  });

  .catch(failureCallback);

// Using arrow functions to simplify:

chooseToppings()

  .then(toppings =>
    placeOrder(toppings)
  )

  .then(order =>
    collectOrder(order)
  )

  .then(pizza =>
    eatPizza(pizza)
  )

  // Or even this:

  chooseToppings()
    .then(toppings => placeOrder(toppings))
    .then(order => collectOrder(order))
    .then(pizza => eatPizza(pizza))
    .catch(failureCallback);


    // since the functions just pass their arguments directly,
    // so there isn't any need for that extra layer of functions:

chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);


// Promise terminology:

// -When a promise is created, it is neither in a success or failure state. It is said to be pending.

// -When a promise returns, it is said to be resolved.
 // =A successfully resolved promise is said to be fulfilled. It returns a value,
 // =which can be accessed by chaining a .then() block onto the end of the promise chain. \
 // =The executor function inside the .then() block will contain the promise's return value.

 // =An unsuccessful resolved promise is said to be rejected. It returns a reason,
 // =an error message stating why the promise was rejected. This reason can be accessed by
 // =chaining a .catch() block onto the end of the promise chain.




// Using the Promise() constructor:
// It is used when you've got code based on an old-school asynchronous API that is not promise-based,
// which you want to promis-ify.

// It comes in handy when you need to use existing, older project code, libraries,
// or frameworks along with modern promise-based code.
// resolve() and reject() are functions that you call to fulfil or reject the newly-created promise.

let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve('Success!');
  }, 2000);
});

timeoutPromise
.then((message) => {
  alert(message);
});

// timeoutPromise.then(alert);


// Rejecting a custom promise:

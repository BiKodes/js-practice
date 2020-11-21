// Converting between strings and arrays:
// create a string :
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

 // split it at each comma: :
let myArray = myData.split(',');
myArray;

// Find the length of your new array, and retrieve some items from it:
myArray.length;
myArray[0];
myArray[1];

// last item in the array
myArray[myArray.length-1];

// Opposite way using the join() method:

let myNewString = myArray.join(',');
myNewString;

let dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString();

// Adding and removing array items:
// To add or remove an item at the end of an array we can use push() and pop() respectively.

myArray.push('Cardiff');
myArray

myArray.push('Bradford', 'Brighton');
myArray;

// New length of the array:
let newLength = myArray.push('Bristol');
myArray;
newLength;

// Removing the last item from the array:
myArray.pop();

// Save removed item in a new variable:

let removedItem = myArray.pop();
myArray;
removedItem;


// unshift() and shift() work in exactly the same way as push() and pop(), respectively,
// except that they work on the beginning of the array, not the end.

// First unshift():

myArray.unshift('Edinburgh');
myArray;

// Now shift():
let removedItem = myArray.shift();
myArray;
removedItem;

// Slice():
let fruits = ['apple', 'mango', 'banana', 'orange'];
fruits.slice(1,3);

// slice() method with no parameters and it will return the new copied array:
let originalArr = [1, 2, 3, 4];
let copiedArr = originalArr.slice();


// Remove 0 (zero) elements before index 2, and insert "drum":
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = myFish.splice(2, 0, 'drum')

// Remove 0 (zero) elements before index 2, and insert "drum" and "guitar":
let myFish =  ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = myFish.splice(2, 0, 'drum', 'guitar');

// Remove 1 element at index 3:
let myFish1 = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish1.splice(3,1);

// Remove 1 element at index 2, and insert "trumpet":

let removed3 = myFish.splice(2, 1, 'trumpet');


// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue":
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed4 = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// Remove 2 elements from index 2:
let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1);

// Remove all elements from index 2:
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

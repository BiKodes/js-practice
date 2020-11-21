// Creating arrays:
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping;

let sequence = [1, 1, 2, 3, 5, 8, 13]
let random = ['tree',795,[0, 1, 2]]

// Accessing and modifying array items:
shopping[0];
shopping[0] = 'tahini';
shopping;


// An array inside an array is called a multidimensional array:
random[2][2];

// Finding the length of an array
shopping.length;

let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i <sequence.length; i++) {
  console.log(sequence[i]);
}

// converting an array to a string is to use the toString() method:
// Converting between strings and arrays:
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray;

// finding the length of your new array, and retrieving some items from it:
myArray.length;
myArray[0]; // the first item in the array
myArray[1]; // the second item in the array
myArray[myArray.length-1]; // the last item in the array

let myNewString = myArray.join(',');
myNewString;


// Adding and removing array items:

let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];

// Include one or more items that you want to add to the end of your array.
myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;

// new length of the array:
let newLength = myArray.push('Bristol');
myArray;
newLength;


// Removing the last item from the array:
myArray.pop()

// save that item in a new variable:
let removedItem = myArray.pop();
myArray;
removedItem;

// unshift() and shift() work in exactly the same way as push() and pop(), respectively:
// They work on the beginning of the array, not the end.
myArray.unshift('Edinburgh');
myArray;

let removedItem = myArray.shift();
myArray;
removedItem;

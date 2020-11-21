// Creating arrays:

let shopping = ['bread', 'milk', 'cheese', 'humans', 'noodles'];
shopping;

let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];


// Accessing and modifying array items:
shopping[0];

// modify an item in an array:
shopping[0] = 'tahini';

// an array inside an array is called a multidimensional array:
random[2][2];

// Finding the length of an array
shopping.length;

// It is most commonly used to tell a loop to keep going until it has looped through
// all the items in an array.

let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

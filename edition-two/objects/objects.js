// creating an object often begins with defining and initializing a variable:

const person = {};

// an object is made up of multiple members, each of which has a name and avalue.
// Each name/value pair must be separated by a comma, and the name and value in each 
// case are separated by a colon.

// Sub-namespaces:
// making the value of an object member another object.

name: ['Bob', 'Smith'],

// To:

name : {
    first: 'Bob',
    last: 'Smith'
},

// What is "this"?:

const person1 = {
    name : 'Chris',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.')
    }
}

const person2 = {
    name: 'Deepti',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
}


// Abstraction — creating a simple model of a more complex thing, which represents its most 
// important aspects in a way that is easy to work with for our program's purposes.

// When an object instance is created from a class, the class's constructor function is run to create 
// it. This process of creating an object instance from a class is called 
// instantiation — the object instance is instantiated from the class.

// The ability of multiple object types to implement the same functionality is polymorphism. 

// Constructors and object instances:
// JavaScript uses special functions called constructor functions to define and initialize objects and their features.
// They provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.
// The constructor function is JavaScript's version of a class.
// A constructor function name usually starts with a capital letter — this convention is used to make constructor functions easier to recognize in code.



// The Object() constructor:
let person1 = new Object();

// add properties and methods to this object:
person1.name = 'Biko';
person1['age'] = 29;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};


// You can also pass an object literal to the Object() constructor as a parameter:

let person2 = new Object({

    name : 'Nuru',
    age : 2,
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
})


// Using the create() method:
// Helps to create object instances without first creating constructors.

let person4 =  new create(person1);


// Inheriting from a constructor with no parameters:

function Brick() {
    this.width = 10;
    this.height = 20;
};

function BlueGlassBrick() {
    Brick.call(this);

    this.opacity = 0.5;
    this.color = 'blue';
}









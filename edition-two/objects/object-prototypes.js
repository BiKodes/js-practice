// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

Object.getPrototypeOf(Object);

// The prototype property's value is an object, which is basically a bucket for storing properties 
// and methods that we want to be inherited by objects further down the prototype chain.

// Object.is(), Object.keys(), and other members not defined inside the prototype bucket are not 
// inherited by object instances or object types that inherit from Object.prototype. 
// They are methods/properties available just on the Object() constructor itself.

let person2 = Object.create(person1);

// What create() actually does is to create a new object from a specified prototype object.
// Here, person2 is being created using person1 as a prototype object.

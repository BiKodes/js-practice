//Constructors and object instances:
//constructors provide the means to create as many objects as you need in an effective way,
//attaching data and functions to them as required.

// The Object() constructor:

let person1 = new Object();

person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};

let person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});


// Using the create() method:
// create object instances without first creating constructors, :
// create() that allows you to do that.With it,you can create a new object based on any existing object.

let person2 = Object.create(person1);

person2.name;
person2.greeting();

Object.getPrototypeOf(obj) //The former is the property on each instance,

Object.getPrototypeOf(new Foobar()) as Foobar.prototype() // prototype property on constructor functions.

// prototype instead is a property containing an object on which you define members that you want to be inherited.

// constructor property
person1.constructor
person2.constructor

// Inheriting from a constructor with no parameters:

function Brick() {
  this.width = 10;
  this.height = 20;
}


// Inherit the width and height properties by doing this:

function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}

// ECMAScript 2015 Classes:

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age= age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`)
  };

}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);

leia.farewell();

// Inheritance with class syntax:
// This is called creating a subclass or subclassing.
// To create a subclass we use the extends keyword to tell JavaScript the class we want to base our class on,

class Teacher extends Person {
  constructor(subject, grade) {
    this.subject = subject;
    this.grade = grade;
  }
} //running the above code will give an error


// Here we are extending the Person class — the Teacher sub-class is an extension of
// the Person class. So for Teacher, the this initialization is done by the Person constructor.
// To call the parent constructor we have to use the super() operator,

class Teacher extends Person {
  constructor(subject, grade) {
    super(first, last, age, gender, interests);  // Now 'this' is initialized by calling the parent constructor.
    this.subject = subject;
    this.grade = grade;
  }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);

// Getters and Setters
// A getter returns the current value of the variable and its corresponding setter
// changes the value of the variable to the one it defines.

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

// Instantiate Teacher

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);

//Check the default value
console.log(snape.subject);

// Change the value
snape.subject = "Balloon animals";

// Check it again and see if it matches the new value
console.log(snape.subject)

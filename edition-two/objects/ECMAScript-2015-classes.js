// Person example, class-style:

class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };

        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
    };

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };

    get subject() {
        return this._subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;
    }
    // use _ to create a separate value in which to store our name property. 
    // Without using this convention, we would get errors every time we called get or set.
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let leila = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leila.farewell();

// Inheritance with class syntax:
// To create a subclass we use the extends keyword to tell JavaScript the class we want to base our class on,

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);   // Now 'this' is initialized by calling the parent constructor.
        
        // subject and grade are specific to Teacher
        this.subject = subject;
        this.grade = grade;
    }
    
}

// Instantiate Teacher object instances:


let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.farewell();
snape.age();
snape.subject;


class Student extends Person {
    constructor(first, last, age, gender, interests, room); {
    super(first, last, age, gender, interests);

    this.room = room;

    greeting () {
        console.log(`Yo!, I'm ${this.name.first} + ${this.name.last} + ${ this.age } years old.`);
    }
}
};

let student1 = new Student('Zara', 'Biko', 5)


// Getters and Setters:
// Getters and setters work in pairs. 
// A getter returns the current value of the variable and its corresponding 
// setter changes the value of the variable to the one it defines.


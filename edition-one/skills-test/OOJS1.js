function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

// Write your code below here

Shape.prototype.calcPerimeter = function() {
 let perimeter = this.sides * this.sideLength;
 console.log(perimeter);
}

let square = new Shape('Kizo is of sideLength' + ' ' + 5 + 'and with a perimter of ' +
' ' + this.calcPerimeter + '.' );

Shape.sideLength = 3;
let triangle = new Shape('Kiba has a sideLenght of ' + this.sideLength);

triangle.calcPerimeter()

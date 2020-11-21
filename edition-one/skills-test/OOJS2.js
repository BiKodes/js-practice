class Shape {
   constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
 };

calcPerimeter() {
  let perimeter = this.sides * this.sideLength;
 console.log(perimeter);
}
}

let square = new Shape( 'The square has'+ 4 + ' sides and side length of ' + 20 + '.' );
square.calcPerimeter()

let triangle = new Shape('The triangle has'+ 4 + ' sides and side length of ' + 100 + '.' )

triangle.calcPerimeter()

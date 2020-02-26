// for the console

function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sidesLength = sideLength,
        this.calcPeriemter = function () {
            console.log(this.sides * this.sidesLength);
        }
}

let square = new Shape("square", 4, 5);
square.calcPerimeter();
let triangle = Object.create(square);
triangle.name = "triangle";
triangle.sides = 3;
triangle.sidesLength = 3;
triangle.calcPerimeter();


//------------------------

class Shape {
    constructor(name, sides, sideLength) {
        this.name = name,
            this.sides = sides,
            this.sidesLength = sideLength
    }

    calcPeriemter() {
        console.log(this.sides * this.sidesLength);
    }
}

let square = new Shape("square", 4, 5);
square.calcPeriemter();

let triangle = new Shape("triangle", 3, 3);
square.calcPeriemter();

//------------------------

class Shape {
    
    constructor(name, sides, sideLength) {
        this.name = name,
        this.sides = sides,
        this.sidesLength = sideLength
    }

    calcPeriemter() {
        console.log(this.sides * this.sidesLength);
    }
}

class square extends Shape {
    constructor(name, sides, sideLength) {
        super(name, sides, sideLength);
    }
    calcArea() {
        console.log(this.sidesLength * this.sidesLength);
    }
}

let square2 = new square("square2", 4, 5);
class Shape {

    constructor(shape) {
        this.shape = shape;
    }

    move(){
        let margin = this.shape.style.marginLeft;
        if(margin){
            margin = margin.split('px')[0];
            this.shape.style.marginLeft = `${parseInt(margin)+15}px`;
            return;
        }
        this.shape.style.marginLeft = `15px`;

    }

    restore(){
        this.shape.style.marginLeft = `0px`;
    }


    calculateArea(base, altura){
        return base * altura;
    }
}



class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculatearea(){
        let shapeArea = new Shape(document.querySelector(".triangle")).calculatearea(this.base, this.height);
        let area = shapeArea / 2;
        const triangle = document.querySelector(".triangle");
        triangle.style.width = `${this.base}px`;
        triangle.style.height = `${this.height}px`;
        document.querySelector("#resultareaTriangle").innerHTML = `Area: ${area}`
    }
}

class Rectangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea(){
        let area = new Shape(document.querySelector(".rectangle")).calculatearea(this.base, this.height);
        const rectangle = document.querySelector(".rectangle");
        rectangle.style.width = `${this.base}px`;
        rectangle.style.height = `${this.height}px`;
        document.querySelector("#resultareaRectangle").innerHTML = `Area: ${area}`
    }
}

class Rombo extends Shape {
    constructor(minorDiagonal, majorDiagonal) {
        super();
        this.minorDiagonal = minorDiagonal;
        this.majorDiagonal = majorDiagonal;
    }

    calculatearea(){
        let areaForma = new Shape(document.querySelector(".diamond")).calculatearea(this.minorDiagonal, this.majorDiagonal);
        let area = areaForma / 2;
        const diamond = document.querySelector(".diamond");
        diamond.style.width = `${this.minorDiagonal}px`;
        diamond.style.height = `${this.majorDiagonal}px`;
        document.querySelector("#resultareaDiamond").innerHTML = `Area: ${area}`
    }
}
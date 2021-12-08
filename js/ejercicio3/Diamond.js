class Diamond extends Shape {
    constructor(minorDiagonal, majorDiagonal) {
        super();
        this.minorDiagonal = minorDiagonal;
        this.majorDiagonal = majorDiagonal;
    }

    calculatearea(){
        let shapeArea = new Shape(document.querySelector(".diamond")).calculatearea(this.minorDiagonal, this.majorDiagonal);
        let area = shapeArea / 2;
        const diamond = document.querySelector(".diamond");
        diamond.style.width = `${this.minorDiagonal}px`;
        diamond.style.height = `${this.majorDiagonal}px`;
        document.querySelector("#resultareaDiamond").innerHTML = `Area: ${area}`
    }
}
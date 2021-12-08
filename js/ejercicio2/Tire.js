
class Tire {
    constructor(radio) {
        this.radio = radio;
    }

    calculateDiameter(){
        return this.radio * 2;
    }
}

class Car extends Tire{
    constructor(carRadio) {
        super(carRadio);
        const diameter = this.calculateDiameter();
        const result = document.querySelector("#resultDiameter");
        result.innerHTML = `El diametro es ${diameter}`
    }
}

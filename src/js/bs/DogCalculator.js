import PlanetCalculator from "./PlanetCalculator";

export class DogCalculator extends PlanetCalculator { 
    constructor(age) {
        super(age);
        this.dogAge = this.age * 7;
     }
}

export class BigDogCalculator extends DogCalculator {
    constructor (age) { }
 }

export class MedDogCalculator extends DogCalculator { 
    constructor (age) { }
}

export class SmallDogCalculator extends DogCalculator {
    constructor (age) {}
}
import PlanetCalculator from "./PlanetCalculator";

export class DogCalculator extends PlanetCalculator { 
    constructor(age) {
        super(age);
        this.dogAge = this.age * 7;
     }
}

export class GiantDogCalculator extends DogCalculator {
    constructor(age) {
        super();
     }
 }

export class MedLgDogCalculator extends DogCalculator { 
    constructor(age) {
        super();
     }
}

export class SmallDogCalculator extends DogCalculator {
    constructor(age) {
        super();
    }
}
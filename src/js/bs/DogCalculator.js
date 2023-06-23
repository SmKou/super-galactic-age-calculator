import PlanetCalculator from "./PlanetCalculator";

export class DogCalculator extends PlanetCalculator { 
    constructor(age) {
        super(age);
        this.dogAge = this.age * 7;
    }

    getPastYears(age, plaent) { }
    
    getFutureYears(age, planet) {}
}

export class GiantDogCalculator extends DogCalculator {
    constructor(age) {
        super(age);
        this.dogAge = this.age * 10.625;
     }
}

export class SmallDogCalculator extends DogCalculator {
    constructor(age) {
        super(age);
        this.dogAge = this.age * 5.31;
    }
}
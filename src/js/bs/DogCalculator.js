import PlanetCalculator from "./PlanetCalculator";

export class DogCalculator extends PlanetCalculator { 
    constructor(age) {
        super(age);
    }

    getDogAge(n) { return n * 7 }

    getPastYears(age, planet) {
        let n = this.age - age;
        return this.getDogAge(n);
     }
    
    getFutureYears(age, planet) {
        let n = age - this.age;
        return this.getDogAge(n);
    }
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
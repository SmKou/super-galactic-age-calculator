import PlanetCalculator from "./PlanetCalculator";

export class DogCalculator extends PlanetCalculator { 
    constructor(age) {
        super(age);
    }

    getDogAge(n) { return n * 7 }

    getDogPast(age, planet) {
        const n = this.getPastYears(age, planet);
        return this.getDogAge(n);
     }
    
    getDogFuture(age, planet) {
        const n = this.getFutureYears(age, planet);
        return this.getDogAge(n);
    }
}

export class GiantDogCalculator extends DogCalculator {
    constructor(age) {
        super(age);
    }
    
    getDogAge(n) { return n * 10.625 }
}

export class SmallDogCalculator extends DogCalculator {
    constructor(age) {
        super(age);
    }

    getDogAge(n) { return n * 5.31 }
}
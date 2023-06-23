export default class Calculator {
    constructor(age) {
        this.age = age;
    }

    getMercuryYears(n) { 
        return n / 0.24;
    }
    
    getVenusYears(n) { 
        return n / 0.62;
    }
    
    getMarsYears(n) { }

    getJupiterYears(n) { }
    
    getPastYears(n, planet) { }

    getFutureYears(n, planet) {}
}
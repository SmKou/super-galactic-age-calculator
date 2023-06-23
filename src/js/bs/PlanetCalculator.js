export default class PlanetCalculator {
    constructor(age) {
        this.age = age;
        this.getPlanet = {
            "earth": (n) => n,
            "mercury": this.getMercuryYears,
            "venus": this.getVenusYears,
            "mars": this.getMarsYears,
            "jupiter": this.getJupiterYears
        };
    }

    getAgeInYear(year) {
        let n = year - (new Date()).getFullYear();
        if (n < 0)
            return 0;
        return this.age + n;
    }

    /** Subtracts year from current year to determine age */
    getAgeFromYear(year) {
        return (new Date()).getFullYear() - year;
     }

    getMercuryYears(n = this.age) { return n / 0.24 }
    
    getVenusYears(n = this.age) { return n / 0.62 }
    
    getMarsYears(n = this.age) { return n / 1.88 }

    getJupiterYears(n = this.age) { return n / 11.86 }
    
    getPastYears(age, planet) { 
        let n = this.age - age;
        if (n < 1)
            n = this.age;
        return this.getPlanet[planet](n);
    }

    getFutureYears(age, planet) {
        if (age < this.age)
            return 0;
        let n = age - this.age;
        return this.getPlanet[planet](n);
    }
}
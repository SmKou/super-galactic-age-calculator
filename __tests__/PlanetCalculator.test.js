import Calculator from '../src/js/bs/PlanetCalculator';

describe("Calculator", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should produce a calculator object with an age", () => {
        expect(calculator.age).toBe(1);
    })

    test("Should produce a calculator object with a directory of planets calling mercury", () => {
        const planet = 'mercury';
        expect(calculator.getPlanet[planet](calculator.age)).toBeCloseTo(1 / 0.24)
    })
})

describe("getAgeInYear", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return age in given year", () => {
        const year = 2073;
        expect(calculator.getAgeInYear(year)).toBe(51);
    })
})

describe("getMercuryYears", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on mercury", () => {
        expect(calculator.getMercuryYears(calculator.age)).toBeCloseTo(1 / 0.24)
    })
    test("Should return age in years on mercury", () => {
        expect(calculator.getMercuryYears()).toBeCloseTo(1 / 0.24)
    })
})

describe("getVenusYears", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on venus", () => {
        expect(calculator.getVenusYears(calculator.age)).toBeCloseTo(1 / 0.62)
    })
    test("Should return age in years on venus", () => {
        expect(calculator.getVenusYears()).toBeCloseTo(1 / 0.62)
    })
})

describe("getMarsYears", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on mars", () => {
        expect(calculator.getMarsYears(calculator.age)).toBeCloseTo(1 / 1.88)
    })
    test("Should return age in years on mars", () => {
        expect(calculator.getMarsYears()).toBeCloseTo(1 / 1.88)
    })
})

describe("getJupiterYears", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on jupiter", () => {
        expect(calculator.getJupiterYears(calculator.age)).toBeCloseTo(1 / 11.86)
    })
    test("Should return age in years on jupiter", () => {
        expect(calculator.getJupiterYears()).toBeCloseTo(1 / 11.86)
    })
})

describe("getPastYears", () => {
    let age, planet, calculator;

    beforeEach(() => {
        const age = 10;
        calculator = new Calculator(age);
    })

    test("Should return a number of years since the given age", () => {
        age = 6;
        planet = "earth";
        expect(calculator.getPastYears(age, planet)).toBe(4);
    })

    test("Should return a number of years since the given age converted to years on mars", () => {
        age = 6;
        planet = "mars";
        expect(calculator.getPastYears(age, planet)).toBe(4 / 1.88);
    })

    test("Should return the number of years of the full age", () => {
        age = 11;
        planet = "earth";
        expect(calculator.getPastYears(age, planet)).toBe(10);
    })
})

describe("getFutureYears", () => {
    let age, planet, calculator;

    beforeEach(() => {
        const age = 10;
        calculator = new Calculator(age);
    })

    test("Should return number of years between given age and saved age", () => {
        const age = 14;
        const planet = "earth";
        expect(calculator.getFutureYears(age, planet)).toBe(4);
    })

    test("Should return number of years of difference converted to years on jupiter", () => {
        const age = 14;
        const planet = "jupiter";
        expect(calculator.getFutureYears(age, planet)).toBe(4 / 11.86);
    })

    test("Should be 0 if age is less than saved age", () => {
        const age = 6;
        const planet = "earth";
        expect(calculator.getFutureYears(age, planet)).toBe(0);
    })
})
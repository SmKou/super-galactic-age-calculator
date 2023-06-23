import Calculator from '../src/js/bs/Calculator';

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

describe("getMercuryYears", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on Mercury", () => {
        expect(calculator.getMercuryYears(calculator.age)).toBeCloseTo(1 / 0.24)
    })
})

describe("getVenusYears", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on Venus", () => {
        expect(calculator.getVenusYears(calculator.age)).toBeCloseTo(1 / 0.62)
    })
})

describe("getMarsYears", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on Mars", () => {
        expect(calculator.getMarsYears(calculator.age)).toBeCloseTo(1 / 1.88)
    })
})

describe("getJupiterYears", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on Jupiter", () => {
        expect(calculator.getJupiterYears(calculator.age)).toBeCloseTo(1 / 11.86)
    })
})

describe("getPastYears", () => {
    let calculator;

    beforeEach(() => {
        const age = 10;
        calculator = new Calculator(age);
    })

    test("Should return a number of years since the given age", () => {
        const age = 6;
        const planet = "earth";
        expect(calculator.getPastYears(age, planet)).toBe(4);
    })
})
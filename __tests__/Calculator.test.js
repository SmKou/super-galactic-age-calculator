import Calculator from '../src/js/bs/Calculator';

describe("Calculator", () => {
    test("Should produce a calculator object with an age", () => {
        const age = 1;
        const calculator = new Calculator(age);
        expect(calculator.age).toBe(1);
    })
})

describe("Calculator.getMercuryYears()", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on Mercury", () => {
        expect(calculator.getMercuryYears(calculator.age)).toBeCloseTo(1 / 0.24)
    })
})

describe("Calculator.getVenusYears()", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on Venus", () => {
        expect(calculator.getVenusYears(calculator.age)).toBeCloseTo(1 / 0.62)
    })
})

describe("Calculator.getMarsYears()", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on Mars", () => {
        expect(calculator.getMarsYears(calculator.age)).toBeCloseTo(1 / 1.88)
    })
})

describe("Calculator.getJupiterYears()", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years converted to years on Jupiter", () => {
        expect(calculator.getJupiterYears(calculator.age)).toBeCloseTo(1 / 11.86)
    })
})
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

    test("Should return a number of years in Mercury years", () => {
        expect(calculator.getMercuryYears(calculator.age)).toBeCloseTo(1 / 0.24)
    })
})

describe("Calculator.getVenusYears()", () => {
    let calculator;

    beforeEach(() => {
        const age = 1;
        calculator = new Calculator(age);
    })

    test("Should return a number of years in Venus years", () => {
        expect(calculator.getVenusYears(calculator.age)).toBeCloseTo(1 / 0.62)
    })
})
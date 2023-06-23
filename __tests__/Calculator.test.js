import Calculator from '../src/js/bs/Calculator';

describe("Calculator", () => {
    test("Should produce a calculator object with an age", () => {
        const age = 1;
        const calculator = new Calculator(age);
        expect(calculator.age).toBe(1);
    })
})
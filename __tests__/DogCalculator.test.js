import {
    PlanetCalculatorCalculator as Calculator
} from '../src/js/bs/PlanetCalculator';
import {
    DogCalculator as Dog,
    GiantDogCalculator as GDog,
    MedLgDogCalculator as MLDog,
    SmallDogCalculator as SDog
} from '../src/js/bs/DogCalculator';

describe("DogCalculator", () => {
    test("Should return a dog calculator with an age and dog age", () => {
        const age = 1;
        const dog = new Dog(age);
        expect(dog.age).toBe(1);
        expect(dog.dogAge).toBe(7);
    })
})

describe("GiantDogCalculator", () => {
    test("Should return a giant dog calculator with an age and dog age for giant dogs", () => {
        const age = 1;
        const dog = new GDog(age);
        expect(dog.age).toBe(1);
        expect(dog.dogAge).toBe(7);
    })
})

describe("MedLgDogCalculator", () => {
    test("Should return a med-large dog calculator with an age and dog age for medium or large dogs", () => {
        const age = 1;
        const dog = new MLDog(age);
        expect(dog.age).toBe(1);
        expect(dog.dogAge).toBe(7);
    })
})

describe("SmallDogCalculator", () => {
    test("Should return a small dog calculator with an age and dog age for small dogs", () => {
        const age = 1;
        const dog = new SDog(age);
        expect(dog.age).toBe(1);
        expect(dog.dogAge).toBe(7);
    })
})
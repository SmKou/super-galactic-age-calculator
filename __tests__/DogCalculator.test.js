import {
    DogCalculator as Dog,
    GiantDogCalculator as GDog,
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
        expect(dog.dogAge).toBeCloseTo(10.625);
    })
})

describe("SmallDogCalculator", () => {
    test("Should return a small dog calculator with an age and dog age for small dogs", () => {
        const age = 1;
        const dog = new SDog(age);
        expect(dog.age).toBe(1);
        expect(dog.dogAge).toBeCloseTo(5.31);
    })
})
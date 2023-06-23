import {
    DogCalculator as Dog,
    GiantDogCalculator as GDog,
    SmallDogCalculator as SDog
} from '../src/js/bs/DogCalculator';

describe("DogCalculator", () => {
    test("Should get an age in dog years", () => {
        const age = 1;
        const dog = new Dog(age);
        expect(dog.getDogAge()).toBe(7);
    })

    /* Test added to Dog describes for relying on use of prototype's method */
    test("getPastYears: Should return difference in years from a dog's speculative age", () => {
        const age = 10;
        const pastAge = 6;
        const planet = "earth";
        const dog = new Dog(age);
        expect(dog.getPastYears(pastAge, planet)).toBe(28);
    })
    test("getFutureYears: Should return difference in years from a dog's speculative age", () => {
        const age = 10;
        const futurAge = 14;
        const planet = "earth";
        const dog = new Dog(age);
        expect(dog.getPastYears(futurAge, planet)).toBe(28);
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
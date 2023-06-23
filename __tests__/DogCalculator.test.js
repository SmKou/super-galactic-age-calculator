import {
    DogCalculator as Dog,
    GiantDogCalculator as GDog,
    SmallDogCalculator as SDog
} from '../src/js/bs/DogCalculator';

describe("DogCalculator", () => {
    test("Should get an age in dog years", () => {
        const age = 1;
        const dog = new Dog(age);
        expect(dog.getDogAge(dog.age)).toBe(7);
    })

    /* Test added to Dog describes for relying on use of prototype's method */
    test("getDogPast: Should return difference in years from a dog's speculative age", () => {
        const age = 10;
        const pastAge = 6;
        const planet = "earth";
        const dog = new Dog(age);
        expect(dog.getDogPast(pastAge, planet)).toBe(28);
    })
    test("getDogPast: Should return difference in years from a dog's speculative age converted to years on mercury", () => {
        const age = 10;
        const pastAge = 6;
        const planet = "mercury";
        const dog = new Dog(age);
        expect(dog.getDogPast(pastAge, planet)).toBeCloseTo(28 / 0.24);
    })
    test("getDogFuture: Should return difference in years from a dog's speculative age", () => {
        const age = 10;
        const futurAge = 14;
        const planet = "earth";
        const dog = new Dog(age);
        expect(dog.getDogFuture(futurAge, planet)).toBe(28);
    })
    test("getDogFuture: Should return difference in years from a dog's speculative age converted to years on mars", () => {
        const age = 10;
        const futurAge = 14;
        const planet = "mars";
        const dog = new Dog(age);
        expect(dog.getDogFuture(futurAge, planet)).toBeCloseTo(28 / 1.88);
    })
})

describe("GiantDogCalculator", () => {
    test("Should get an age in dog years for giant dogs", () => {
        const age = 1;
        const dog = new GDog(age);
        expect(dog.getDogAge(dog.age)).toBeCloseTo(10.625);
    })
})

describe("SmallDogCalculator", () => {
    test("Should get an age in dog years for small dogs", () => {
        const age = 1;
        const dog = new SDog(age);
        expect(dog.getDogAge(dog.age)).toBeCloseTo(5.31);
    })
})
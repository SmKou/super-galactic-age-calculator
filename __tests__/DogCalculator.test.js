import {
    PlanetCalculatorCalculator as Calculator
} from '../src/js/bs/PlanetCalculator';
import {
    DogCalculator as Dog,
    BigDogCalculator as BigDog,
    MedDogCalculator as MedDog,
    SmallDogCalculator as SmallDog,
    DogCalculator
} from '../src/js/bs/DogCalculator';

describe("DogCalculator", () => {
    let dog;

    beforeEach(() => {
        const age = 1;
        dog = new Dog(age);
    })

    test("Should return a dog calculator with an age and dog age", () => {
        expect(dog.age).toBe(1);
        expect(dog.dogAge).toBe(7);
    })
})
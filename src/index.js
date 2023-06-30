import PlanetCalculator from './js/PlanetCalculator';
import DogCalculator, { GiantDogCalculator, SmallDogCalculator } from './js/DogCalculator';

import './css/fonts.css';
import './css/styles.css';

const age = document.getElementById('current-age');
const thisYear = (new Date()).getFullYear();
const ageFromYear = document.getElementById('age-from-year');
ageFromYear.placeholder = 1986;
ageFromYear.max = Number(thisYear) - 1;
const pastAge = document.getElementById('past-age');
const ageInYear = document.getElementById('age-in-year');
ageInYear.placeholder = 2050;
ageInYear.min = Number(thisYear) + 1;
const futureAge = document.getElementById('future-age');

const display = document.querySelector('.display');
const setAge = document.querySelector('.set-age');
const ageFromDisp = document.querySelector('.age-from');
const setPastYear = document.querySelector('.set-past-year');
const setPastAge = document.querySelector('.set-past-age');
const ageInDisp = document.querySelector('.age-in');
const setFutureYear = document.querySelector('.set-future-year');
const setFutureAge = document.querySelector('.set-future-age');
const planetDisp = document.querySelector('.planet');
const planetYears = document.querySelector('.planet-years');

const dogAgeDisp = document.querySelector('.dog-age');
const setDogAge = document.querySelector('.set-dog-age');
const dogAgeFromDisp = document.querySelector('.dog-age-from');
const dogPastYear = document.querySelector('.dog-past-year');
const dogPastAge = document.querySelector('.dog-past-age');
const dogAgeInDisp = document.querySelector('.dog-age-in');
const dogFutureYear = document.querySelector('.dog-future-year');
const dogFutureAge = document.querySelector('.dog-future-age');
const dogPlanetDisp = document.querySelector('.dog-planet');
const dogPlanetYears = document.querySelector('.dog-planet-years');

const setYears = document.querySelectorAll('.set-years');
const setPlanet = document.querySelectorAll('.set-planet');

age.addEventListener('change', e => {
    const age = e.target.value;
    if (age) {
        pastAge.max = age - 1;
        futureAge.min = age + 1;
    }
})

const form = document.querySelector('form');
form.addEventListener('submit', () => handleFormSubmission)
form.addEventListener('reset', () => {
    form.reset();
    const elemToHide = [display, ageFromDisp, ageInDisp, planetDisp, dogAgeDisp, dogAgeFromDisp, dogAgeInDisp, dogPlanetDisp];
    elemToHide.forEach(elem => {
        if (!elem.classList.contains('hidden'))
            elem.classList.add('hidden');
    })
})

function handleFormSubmission() {
    const controller = {
        calculator: '',
        age: 0,
        dog: false
    }

    if (age.value) {
        controller.calculator = new PlanetCalculator(age.value);
        if (ageFromYear.value)
            createCalculator(controller, controller.calculator.getAgeFromYear(ageFromYear.value))
        else if (ageInYear.value)
            createCalculator(controller, controller.calculator.getAgeInYear(ageInYear.value))
    }
    else {
        if (ageFromYear.value)
            createCalculator(controller, ageFromYear.value);
        else if (ageInYear.value)
            createCalculator(controller, ageInYear.value);
    }

    const dog = document.querySelector('[name="dog"]:checked');
    if (dog) {
        switch (dog.value) {
            case 'small':
                controller.calculator = new SmallDogCalculator(controller.age);
                break;
            case 'giant':
                controller.calculator = new GiantDogCalculator(controller.age);
                break;
            default:
                controller.calculator = new DogCalculator(controller.age);
        }
        controller.dog = true;
    }


}

function createCalculator(controller, age) {
    controller.calculator = new PlanetCalculator(age);
    if (display.classList.contains('hidden'))
        display.classList.remove('hidden');
    setAge.innerText = age;
    controller.age = age;
}
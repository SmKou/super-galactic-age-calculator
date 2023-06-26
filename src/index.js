import PlanetCalculator from './js/bs/PlanetCalculator';
import DogCalculator, { GiantDogCalculator, SmallDogCalculator } from './js/bs/DogCalculator';

import { showAge, handleAgeFrom, handleAgeIn, handlePlanets, hideAll } from './js/ui/display';

import './css/fonts.css';
import './css/styles.css';

const controller = {
    calculator: '',
    proto: PlanetCalculator.prototype,
    pastYear: 0,
    futureYear: 0,
    years: 0,
    dog: false,
    planet: ''
}

const age = document.getElementById('current-age');
age.addEventListener('change', e => {
    const age = parseInt(e.target.value);
    if (Number.isNaN(age))
        controller.calculator = '';
    else {
        controller.calculator = new controller.proto(age);
        showAge(controller.calculator.age);
        output(controller);
    }
})

const thisYear = (new Date()).getFullYear();

const ageFromYear = document.getElementById('age-from-year');
ageFromYear.placeholder = 1986;
ageFromYear.max = Number(thisYear) - 1;
ageFromYear.addEventListener('change', e => {
    handleAgeFrom(e, controller);
    output(controller);
})

const pastAge = document.getElementById('past-age');
pastAge

const ageInYear = document.getElementById('age-in-year');
ageInYear.placeholder = 2050;
ageInYear.min = Number(thisYear) + 1;
ageInYear.addEventListener('change', e => {
    handleAgeIn(e, controller);
    output(controller);
})

const selectPlanets = document.getElementById('show-planets');
selectPlanets.addEventListener('change', e => {
    const planets = document.querySelector('.planets');
    if (e.checked) {
        if (planets.classList.contains('hidden'))
            planets.classList.remove('hidden');
    }
    else {
        if (!planets.classList.contains('hidden'))
            planets.classList.add('hidden');
    } 
})

const planets = document.querySelectorAll('[name="planet"]');
planets.forEach(elem => elem.addEventListener('change', () => {
    handlePlanets(controller);
    output(controller);
}))

const selectDogs = document.getElementById('show-dogs');
selectDogs.addEventListener('change', e => {
    const dogs = document.querySelector('.dogs');
    if (e.checked) {
        if (dogs.classList.contains('hidden'))
            dogs.classList.remove('hidden')
    }
    else {
        if (!dogs.classList.contains('hidden'))
            dogs.classList.add('hidden')
    }
})

const dogs = document.querySelector('.dogs');
dogs.addEventListener('change', e => {
    const id = e.target.id;
    switch (id) {
        case 'small':
            controller.proto = SmallDogCalculator.prototype;
            controller.calculator = new controller.proto(controller.calculator.age);
            break;
        case 'giant':
            controller.proto = GiantDogCalculator.prototype;
            controller.calculator = new controller.proto(controller.calculator.age);
            break;
        default:
            controller.proto = DogCalculator.prototype;
            controller.calculator = new controller.proto(controller.calculator.age);
    }
    controller.dog = true;
    handleDogs(controller);
    output(controller);
})

const form = document.querySelector('form');
form.addEventListener('reset', () => {
    form.reset();
    controller.calculator = '';
    controller.proto = PlanetCalculator.prototype;
    controller.dog = false;
    controller.planet = '';
    hideAll();
})
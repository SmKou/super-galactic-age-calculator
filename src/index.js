import PlanetCalculator from './js/bs/PlanetCalculator';
import DogCalculator from './js/bs/DogCalculator';

import './css/fonts.css';
import './css/styles.css';

const calculator = {
    class: '',
    dog: false,
    planet: ''
};

const age = document.getElementById('current-age');
age.addEventListener('change', e => {
    const age = e.target.value;
    if (calculator.dog)
        calculator.class = new calculator.dog(age);
    else
        calculator.class = new PlanetCalculator(age);
});

const thisYear = (new Date()).getFullYear();
const ageFromYear = document.getElementById('age-from-year');
ageFromYear.placeholder = 1986;
ageFromYear.max = Number(thisYear) - 1;
ageFromYear.addEventListener('change', () => {});
const ageInYear = document.getElementById('age-in-year');
ageInYear.placeholder = 2050;
ageInYear.min = Number(thisYear) + 1;

function showOutput() {
    const output = document.querySelector('#output');
    if (output.classList.contains('hidden'))
        output.classList.removes('hidden');
}

const show = document.querySelectorAll('[name="calculate"]');
show.forEach(elem => {
    elem.addEventListener('change', e => {
        const cn = document.querySelector('.' + e.target.value);
        const checked = e.target.checked;
        if (checked) {
            if (cn.classList.contains('hidden'))
                cn.classList.remove('hidden');
        }
        else {
            if (!cn.classList.contains('hidden'))
                cn.classList.add('hidden');
        }
    });
});

const form = document.querySelector('form');
form.addEventListener('reset', () => {
    form.reset();
    show.forEach(elem => {
        const cn = elem.id.split('-')[1];
        const opt = document.querySelector('.' + cn);
        if (!opt.classList.contains('hidden'))
            opt.classList.add('hidden');
    });
    document.querySelector('#output').classList.add('hidden');
});
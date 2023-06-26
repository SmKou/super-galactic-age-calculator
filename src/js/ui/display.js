export function showAge(age) {
    const ageDisplay = document.querySelector('.display.age');
    const setAge = document.querySelector('.set-age');
    if (ageDisplay.classList.contains('hidden'))
        ageDisplay.classList.remove('hidden');
    setAge.innerText = age;
}

function hideAge() {
    const ageDisplay = document.querySelector('.display.age');
    if (!ageDisplay.classList.contains('hidden'))
        ageDisplay.classList.add('hidden');
}

export function handleAgeFrom(e, controller) {
    const year = parseInt(e.target || e.target.value);
    if (Number.isNaN(year))
        hideAgeFrom();
    else {
        if (!calculator.hasOwnProperty('age')) {
            controller.calculator = new controller.proto(year);
            showAge(controller.calculator.age);
        }
        showAgeFrom(year, controller.calculator.getAgeFromYear(year));
        controller.pastYear = year;
    }
}

function showAgeFrom(year, age) {
    const setAgeFrom = document.querySelector('.age-from');
    const setPastYear = document.querySelector('.set-past-year');
    const setPastAge = document.querySelector('.set-past-age');
    if (setAgeFrom.classList.contains('hidden'))
        setAgeFrom.classList.remove('hidden');
    setPastYear.innerText = year;
    setPastAge.innerText = age;
}

function hideAgeFrom() {
    const setAgeFrom = document.querySelector('.age-from');
    if (!setAgeFrom.classList.contains('hidden'))
        setAgeFrom.classList.add('hidden');
}

export function handleAgeIn(e, controller) {
    const year = parseInt(e.target.value);
    if (Number.isNaN(year))
        hideAgeIn();
    else {
        if (!controller.calculator.hasOwnProperty('age')) {
            controller.calculator = new controller.proto(year)
            showAge(controller.calculator.age);
        }
        showAgeIn(year, controller.calculator.getAgeInYear(age));
        controller.futureYear = year;
    }
}

function showAgeIn(year, age) {
    const setAgeIn = document.querySelector('.age-in');
    const setFutureYear = document.querySelector('.set-future-year');
    const setFutureAge = document.querySelector('.set-future-age');
    if (setAgeIn.classList.contains('hidden'))
        setAgeIn.classList.remove('hidden');
    setFutureYear.innerText = year;
    setFutureAge.innerText = age;
}

function hideAgeIn() {
    const setAgeIn = document.querySelector('.age-in');
    if (!setAgeIn.classList.contains('hidden'))
        setAgeIn.classList.add('hidden');
}



export function handlePlanets(controller) {
    const planet = document.querySelector('[name="planet"]:checked');
    showPlanet(planet.value, controller.calculator.getPlanet(planet.value));
    controller.planet = planet.value;
}

function showPlanet(planet, age) {
    const planetDisplay = document.querySelector('.display.planet');
    const setPlanet = document.querySelector('.set-planet');
    const setPlanetAge = document.querySelector('.planet-age');
    if (planetDisplay.classList.contains('hidden'))
        planetDisplay.classList.remove('hidden');
    setPlanet.innerText = planet;
    setPlanetAge.innerText = age;
}

function hidePlanet() {
    const planetDisplay = document.querySelector('.display.planet');
    if (!planetDisplay.classList.contains('hidden'))
        planetDisplay.classList.add('hidden');
}

export function handleDogs(controller) {
    const dogDisplay = document.querySelector('.display.dog-age');
    const setDogAge = document.querySelector('.set-dog-age');
    if (dogDisplay.classList.contains('hidden'))
        dogDisplay.classList.remove('hidden');
    setDogAge.innerText = controller.calculator.getDogAge(controller.calculator.age);
}

export function output(controller) {
    if (controller.pastYear)
        showAgeFrom(controller.pastYear, controller.calculator.age);
    if (controller.futureYear)
        showAgeIn(controller.futureYear, controller.calculator.age);
}

export function hideAll() {
    hideAge();
    hideAgeFrom();
    hideAgeIn();
    hidePlanet();
}
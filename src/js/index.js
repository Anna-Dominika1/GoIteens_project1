const popular = document.querySelector('#popular');
const rate = document.querySelector('#rate');
const lastfilm = document.querySelector('#lastfilm');

// Вставляєш код з API який треба

const getPopularFilms = () => {
    
}

const getRateFilms = () => {
    
}

const getLastFilms = () => {
    
}

popular.addEventListener('click', getPopularFilms);
rate.addEventListener('click', getRateFilms);
lastfilm.addEventListener('click', getLastFilms);

const button = document.querySelector('#button');
const filters = document.querySelector('#filters');

let check = false;

const filtersButton = () => {
    filters.classList.add('switcher_on');
    if (check === true) {
        check = false;
        return filters.classList.replace('switcher_on', 'switcher_off');
    }
    else {
        filters.classList.replace('switcher_off', 'switcher_on');
        check = true;
    }
}

button.addEventListener('click', filtersButton);
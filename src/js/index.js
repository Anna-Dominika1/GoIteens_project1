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

const filtersButton = () => {
    filters.classList.toggle('switcher');
}

button.addEventListener('click', filtersButton);
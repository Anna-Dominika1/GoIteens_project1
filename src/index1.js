import './sass/main.scss';
import './checkbox.js';
import { error, success } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaults.delay = 5000;
const debounce = require('lodash.debounce');
import * as apiFunctions from './apiFunctions.js';

let pageNumber = 1;

const getRefs = {
    btnLoadMore: document.querySelector('.js-load_more'),
    body: document.querySelector('body'),
    cardContainer: document.querySelector('.js-card-container'),
    rating: document.querySelector('.card-menu-rating'),
    card: document.querySelector('.card')
};

if (getRefs.body.classList.contains('dark-theme')) {
    getRefs.card.classList.add()
}


import markup from './tamplates/markup.hbs';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bfa52d7e3cb8b977a558f7a3657e1861';


const rendersFilm = (markups) => {
    const makup = markup(markups);
    getRefs.cardContainer.insertAdjacentHTML('beforeend', makup);
}

const defaultFetchFilm = () => {
    pageNumber = 1;
    fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=uk-UA&page=1&include_image_language=ua&page=${pageNumber}`).then(respons => respons.json())
        .then(res => rendersFilm(res)).catch(error => console.log(error))

}
defaultFetchFilm()

const paginationFetchFilms = () => {
    pageNumber += 1;
    return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=uk-UA&page=1&include_image_language=ua&page=${pageNumber}`).then(respons => respons.json())
        .then(res => rendersFilm(res)).catch(error => console.log(error))
}
const loadMoreBtn = () => {
    paginationFetchFilms()

    const element = document.querySelector('.film_section');
    console.log(element);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });

}
getRefs.btnLoadMore.addEventListener('click', loadMoreBtn)

// const likeBtnFunction = () => {
//     getRefs.liketBtn.classList.add('liked')
// }
// console.log(getRefs);
// getRefs.liketBtn.addEventListener('click', likeBtnFunction)


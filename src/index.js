import './sass/main.scss';
import './checkbox.js';
import { error, success} from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as basicLightbox from 'basiclightbox';
import './apiFunctions';
defaults.delay = 5000;
const debounce = require('lodash.debounce');
import * as apiFunctions from './apiFunctions.js';
import cardTemplate from './templates/cardTemplate.hbs';

const getRefs = {
  btnLoadMore: document.querySelector('.js-load_more'),
  body: document.querySelector('body'),
  cardContainer: document.querySelector('.js-card-container'),
  rating: document.querySelector('.card-menu-rating'),
  card: document.querySelector('.card')
};

const verifyDataLength = (array) => {
  if (array.length >= 0) { 
    console.log('f');
   success({text: 'Знайдено декілька фільмів :)!!'});
   return array;
  }
  if (array.length === 0) {
    error({text: 'На жаль ми нічого не знайшли :('});
        return
  }
};

const rendersFilm = (markups) => {
  const makup = cardTemplate(markups);
  getRefs.cardContainer.insertAdjacentHTML('beforeend', makup);
}

apiFunctions.defaultFetchFilm().then(res => rendersFilm(res));

const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};



const inputFn = async (event) => {
    getRefs.cardContainer.innerHTML = '';
   const result = await apiFunctions.fetchFilmsFn(event.target.value);
   verifyDataLength(result);
   rendersFilm(result);
};

searchBtn.addEventListener("click", expand);
input.addEventListener('input', debounce((event) => {
  inputFn(event);
}, 650));

const loadMoreBtn = async () => {
 await apiFunctions.paginationFetchFilms(document.querySelector('.input').value).then(rendersFilm);
  const element = document.querySelector('.films_section');
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
getRefs.btnLoadMore.addEventListener('click', loadMoreBtn)
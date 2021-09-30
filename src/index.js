import './sass/main.scss';
import { error, success} from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as basicLightbox from 'basiclightbox';
import './apiFunctions';
defaults.delay = 5000;
const debounce = require('lodash.debounce');
import * as apiFunctions from './apiFunctions.js';
import './modalFilm.js'

const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

const inputFn = (event) => {
    apiFunctions.fetchFilmsFn(event.target.value);
};

searchBtn.addEventListener("click", expand);
input.addEventListener('input', debounce((event) => {
  inputFn(event);
}, 650));


const modalBasicLightbox = basicLightbox.create(
	document.querySelector('template')
	)

const openModal = document.getElementById('OpenModal');


const onclick = () => {

  modalBasicLightbox.show()
const closeopenModal = document.getElementById('CloseModal');
closeopenModal.addEventListener('click',onclose);

};
openModal.addEventListener('click',onclick);


const onclose = () => {

  modalBasicLightbox.close()
  

};










document.addEventListener('keydown', function(ea) {
  if (ea.key === 'Escape') {
    modalBasicLightbox.close()
  }
  });
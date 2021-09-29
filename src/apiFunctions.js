
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bfa52d7e3cb8b977a558f7a3657e1861';

let pageNumber = 1;
let checked;

const fetchFilmsFn = (searchQuery) => {
    if (searchQuery === '') {
        return;
    }
    pageNumber = 1;
    checked = true;
   return fetch(`${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=uk-UA&page=1&include_image_language=ua&page=${pageNumber}`)
    .then(res => res.json())
    .catch(err => {
        console.warn(err)
    })
};

const defaultFetchFilm = () => {
    pageNumber = 1;
   return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=uk-UA&page=1&include_image_language=ua&page=${pageNumber}`).then(res => res.json())
        .catch(error => console.warn(error))

}


const paginationFetchFilms = (searchQuery) => {
    pageNumber += 1;
    if (checked) {
        return fetch(`${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=uk-UA&page=1&include_image_language=ua&page=${pageNumber}`)
    .then(res => res.json())
    .catch(err => {
        console.warn(err)
    })
    }
    checked = false;
    return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=uk-UA&page=1&include_image_language=ua&page=${pageNumber}`).then(res => res.json())
        .catch(error => console.log(error))
}


export {fetchFilmsFn, defaultFetchFilm, paginationFetchFilms};
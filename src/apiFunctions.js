const axios = require('axios').default; 
let pageNumber = 1;
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: 'bfa52d7e3cb8b977a558f7a3657e1861',
    language: 'uk-UA',
    page: pageNumber,
    include_image_language: 'ua',
}


const fetchFilmsFn = (searchQuery) => {
    // if (searchQuery === '') {
    //     return;
    // }
    pageNumber = 1;
    axios(`/search/movie?query=${searchQuery}`)
    .then(res => console.log(res.data))
    .catch(err => {
        console.warn(err)
    })
};


export {fetchFilmsFn};
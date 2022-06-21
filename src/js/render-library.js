import { getMovieById } from './Api';
import { changeMoviesPage } from './change-movies-page';
import { getGenresMarkup } from './render-popular-movies';

const refs = {
  cardSet: document.querySelector('.card-set'),
  showWatchedBtn: document.querySelector('.header-library__button--watched'),
  showQueueBtn: document.querySelector('.header-library__button--queue'),
};
const watchedSpinner = document.querySelector(
  '.header-library--watched--spinner'
);
const queueSpinner = document.querySelector('.header-library--queue--spinner');
let pageCount = 0;

const onShowWatched = () => {
  const parsedWatchedMovies = JSON.parse(
    localStorage.getItem('watched') || '[]'
  );

  refs.cardSet.innerHTML = '';

  renderWatched(parsedWatchedMovies);

  getCountPages(parsedWatchedMovies);

  changeMoviesPage(pageCount, renderLibrary);
};

const onShowQueue = () => {
  const parsedQueueMovies = JSON.parse(localStorage.getItem('queue') || '[]');

  refs.cardSet.innerHTML = '';

  renderWatched(parsedQueueMovies);

  getCountPages(parsedQueueMovies);

  changeMoviesPage(pageCount, renderLibrary);
};

const renderWatched = async parsedMovieFromStorage => {
  const getMovies = await parsedMovieFromStorage.map(moevieId =>
    getMovieById(moevieId).then(response => renderLibrary(response))
  );
};

const getLibraryGenresById = (idList, genres) => {
  return idList.map(id => genres.find(genre => genre.id === id).name);
};

const renderLibrary = movies => {
  const {
    id,
    poster_path,
    original_title,
    title,
    release_date,
    genres,
    vote_average,
  } = movies;

  const productionYear = new Date(release_date).getFullYear().toString();

  const idList = genres.map(i => (i = i.id));

  const alphabetGenres = getLibraryGenresById(idList, genres);

  const genresMarkup = getGenresMarkup(alphabetGenres);

  const markup = `<li class="card-set__item" data-id="${id}">
                <div class="card-set__box-img"">
                <img src="https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}"
                class="card-set__img"
                />
                </div>
                <h3 class="card-set__title">${title}</h3>
                <div class="card-set__description">
                <ul class="card-set__genre">
                      ${genresMarkup}
                </ul>
                    <span class="card-set__production-year">| ${productionYear}</span>
                    <span class="card-set__rating">${vote_average}</span>
                </div>
                </li>`;

  refs.cardSet.insertAdjacentHTML('afterbegin', markup);
  watchedSpinner.classList.remove('spinner');
  queueSpinner.classList.remove('spinner');
};

const getCountPages = arr => {
  pageCount = Math.ceil(arr.length / 10);
};

const showLibraryPage = () => {
  const parsedWatchedMovies = JSON.parse(
    localStorage.getItem('watched') || '[]'
  );

  const parsedQueueMovies = JSON.parse(localStorage.getItem('queue') || '[]');

  const allMoeviesList = [...parsedWatchedMovies, ...parsedQueueMovies];
  const uniqueMoeviesList = allMoeviesList.filter(
    (value, index, arr) => arr.indexOf(value) === index
  );

  refs.cardSet.innerHTML = '';

  renderWatched(uniqueMoeviesList);

  getCountPages(uniqueMoeviesList);

  changeMoviesPage(pageCount, renderLibrary);
};

const downloadLibraryPage = showLibraryPage => {
  showLibraryPage();
};

refs.showWatchedBtn.addEventListener('click', onShowWatched);
refs.showQueueBtn.addEventListener('click', onShowQueue);

export { showLibraryPage, downloadLibraryPage };

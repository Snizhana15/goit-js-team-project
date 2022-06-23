import { getGenresMarkup } from './render-popular-movies';
import * as image from '../images/movie.jpg';

const refs = {
  cardSet: document.querySelector('.card-set'),
  showWatchedBtn: document.querySelector('.header-library__button--watched'),
  showQueueBtn: document.querySelector('.header-library__button--queue'),
  paginationSet: document.querySelector('.pagination'),
};

const watchedSpinner = document.querySelector(
  '.header-library--watched--spinner'
);
const queueSpinner = document.querySelector('.header-library--queue--spinner');

let pageCount = 0;
const moviesbyPage = 6;

const getWatchedList = () => {
  const parsedWatchedMovies = JSON.parse(
    localStorage.getItem('watched') || '[]'
  );
  return parsedWatchedMovies;
};

const getQueueList = () => {
  const parsedQueueMovies = JSON.parse(localStorage.getItem('queue') || '[]');
  return parsedQueueMovies;
};

const getLibraryList = () => {
  const parsedWatchedMovies = JSON.parse(
    localStorage.getItem('watched') || '[]'
  );

  const parsedQueueMovies = JSON.parse(localStorage.getItem('queue') || '[]');

  const parsedAllMoeviesList = [...parsedWatchedMovies, ...parsedQueueMovies];
  const parsedUniqueMoeviesList = parsedAllMoeviesList.filter(
    (movie, movieIdx, movies) =>
      movies.findIndex(item => item.id === movie.id) === movies.indexOf(movie)
  );

  return parsedUniqueMoeviesList;
};

const onShowWatched = () => {
  watchedSpinner.classList.add('spinner');

  refs.paginationSet.removeEventListener('click', onClickLibrary);
  refs.paginationSet.removeEventListener('click', onClickQueue);

  const watchedList = getWatchedList();

  const startPageWatched = watchedList.slice(0, moviesbyPage);
  refs.cardSet.innerHTML = '';

  if (watchedList.length === 0) {
    const emptyMarkup = `<div class="library__empty-container">
                          <p class="library__empty-text">Your watched list is empty. Please, add some movies!!!</p>
                          <img src="${image}" alt="Empty library image" width="500" height="500">
                        </div>`;

    refs.cardSet.insertAdjacentHTML('afterbegin', emptyMarkup);
    watchedSpinner.classList.remove('spinner');
    refs.paginationSet.innerHTML = '';
    return;
  }

  getCountPages(watchedList);
  renderWatched(startPageWatched);
  markupNumPage(pageCount);

  refs.paginationSet.addEventListener('click', onClickWatched);
};

const onShowQueue = () => {
  queueSpinner.classList.add('spinner');

  refs.paginationSet.removeEventListener('click', onClickLibrary);
  refs.paginationSet.removeEventListener('click', onClickWatched);

  const queueList = getQueueList();
  const startPageQueue = queueList.slice(0, moviesbyPage);

  refs.cardSet.innerHTML = '';

  if (queueList.length === 0) {
    const emptyMarkup = `<div class="library__empty-container">
                          <p class="library__empty-text">Your queue list is empty. Please, add some movies!!!</p>
                          <img src="${image}" alt="Empty library image" width="500" height="500">
                        </div>`;

    refs.cardSet.insertAdjacentHTML('afterbegin', emptyMarkup);
    queueSpinner.classList.remove('spinner');
    refs.paginationSet.innerHTML = '';
    return;
  }

  getCountPages(queueList);
  renderWatched(startPageQueue);
  markupNumPage(pageCount);

  refs.paginationSet.addEventListener('click', onClickQueue);
};

const showLibraryPage = () => {
  refs.paginationSet.removeEventListener('click', onClickWatched);
  refs.paginationSet.removeEventListener('click', onClickQueue);

  const libraryList = getLibraryList();

  const startPageLibrary = libraryList.slice(0, moviesbyPage);
  refs.cardSet.innerHTML = '';

  if (libraryList.length === 0) {
    const emptyMarkup = `<div class="library__empty-container">
                          <p class="library__empty-text">Your library is empty. Please, add some movies!!!</p>
                          <img src="${image}" alt="Empty library image" width="500" height="500">
                        </div>`;

    refs.cardSet.insertAdjacentHTML('afterbegin', emptyMarkup);
    refs.paginationSet.innerHTML = '';
    return;
  }

  getCountPages(libraryList);
  renderWatched(startPageLibrary);
  markupNumPage(pageCount);

  refs.paginationSet.addEventListener('click', onClickLibrary);
};

const renderWatched = parsedMovieFromStorage => {
  parsedMovieFromStorage.map(renderLibrary);
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
                    <span class="card-set__production-year">&nbsp| ${productionYear}&nbsp</span>
                    <span class="card-set__rating">${vote_average}</span>
                </div>
                </li>`;

  refs.cardSet.insertAdjacentHTML('afterbegin', markup);
  watchedSpinner.classList.remove('spinner');
  queueSpinner.classList.remove('spinner');
};

const getCountPages = arr => {
  pageCount = Math.ceil(arr.length / moviesbyPage);
};

const downloadLibraryPage = showLibraryPage => {
  showLibraryPage();
};

refs.showWatchedBtn.addEventListener('click', onShowWatched);
refs.showQueueBtn.addEventListener('click', onShowQueue);

const renderByPage = (a, arrayAllMoviesForRender) => {
  const startPositionForRender = a * moviesbyPage - moviesbyPage;

  const arrayMoviesByPage = arrayAllMoviesForRender.splice(
    startPositionForRender,
    moviesbyPage
  );

  refs.cardSet.innerHTML = '';
  renderWatched(arrayMoviesByPage);
  markupNumPage(pageCount);

  const previousBtn = document.querySelector('.pagination__button--current');
  previousBtn.classList.remove('pagination__button--current');
  const currentBtn = document.querySelector(`[id="${a}"]`);
  currentBtn.classList.add('pagination__button--current');
};

const onClickWatched = e => {
  const watched = getWatchedList();

  const getNumberPage = Number(e.target.closest('.pagination__button').id);

  renderByPage(getNumberPage, watched);
};

const onClickQueue = e => {
  const queue = getQueueList();

  const getNumberPage = Number(e.target.closest('.pagination__button').id);

  renderByPage(getNumberPage, queue);
};

const onClickLibrary = e => {
  const library = getLibraryList();

  const getNumberPage = Number(e.target.closest('.pagination__button').id);

  renderByPage(getNumberPage, library);
};

//====================render pagination for library============

const markupNumPage = pageCount => {
  const markupEmpty = [];

  for (let i = 1; i <= pageCount; i++) {
    let page = '';

    if (i === 1) {
      page = `<li class="pagination__item">
        <button class="pagination__button pagination__button--current" id="${i}">${i}</button>
      </li>`;
    } else {
      page = `<li class="pagination__item">
        <button class="pagination__button" id="${i}">${i}</button>
      </li>`;
    }

    markupEmpty.push(page);
  }

  const markup = markupEmpty.join('');

  refs.paginationSet.innerHTML = '';
  refs.paginationSet.insertAdjacentHTML('afterbegin', markup);
};
//==========================================

export { showLibraryPage, downloadLibraryPage };

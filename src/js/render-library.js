import { getMovieById } from './Api';
import { getGenresMarkup } from './render-popular-movies';

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
const moviesbyPage = 10;

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
    (value, index, arr) => arr.indexOf(value) === index
  );
  return parsedUniqueMoeviesList;
};

const onShowWatched = () => {
  if (localStorage.getItem('watched') !== null) {
    watchedSpinner.classList.add('spinner');
  }

  refs.paginationSet.removeEventListener('click', onClickLibrary);
  refs.paginationSet.removeEventListener('click', onClickQueue);

  const watchedList = getWatchedList();

  const startPageWatched = watchedList.slice(0, moviesbyPage);
  refs.cardSet.innerHTML = '';

  getCountPages(watchedList);
  renderWatched(startPageWatched);
  markupNumPage(pageCount);

  refs.paginationSet.addEventListener('click', onClickWatched);
};

const onShowQueue = () => {
  if (localStorage.getItem('queue') !== null) {
    queueSpinner.classList.add('spinner');
  }

  refs.paginationSet.removeEventListener('click', onClickLibrary);
  refs.paginationSet.removeEventListener('click', onClickWatched);

  const queueList = getQueueList();
  const startPageQueue = queueList.slice(0, moviesbyPage);

  refs.cardSet.innerHTML = '';

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

  getCountPages(libraryList);
  renderWatched(startPageLibrary);
  markupNumPage(pageCount);

  refs.paginationSet.addEventListener('click', onClickLibrary);
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
};

const onClickWatched = e => {
  const watched = getWatchedList();

  getNumberPage = Number(e.target.closest('.pagination__button').id);

  renderByPage(getNumberPage, watched);
};

const onClickQueue = e => {
  const queue = getQueueList();

  getNumberPage = Number(e.target.closest('.pagination__button').id);

  renderByPage(getNumberPage, queue);
};

const onClickLibrary = e => {
  const library = getLibraryList();

  getNumberPage = Number(e.target.closest('.pagination__button').id);
  btn = e.target.closest('.pagination__button');
  console.log(btn);
  btn.classList.add('pagination__button--current');

  renderByPage(getNumberPage, library);
};

//====================render pagination for library============

const markupNumPage = pageCount => {
  markupEmpty = [];

  for (let i = 1; i <= pageCount; i++) {
    const page = `<li class="pagination__item">
        <button class="pagination__button" id="${i}">${i}</button>
      </li>`;

    markupEmpty.push(page);
  }

  const markup = markupEmpty.join('');

  refs.paginationSet.innerHTML = '';
  refs.paginationSet.insertAdjacentHTML('afterbegin', markup);
};
//==========================================

export { showLibraryPage, downloadLibraryPage };

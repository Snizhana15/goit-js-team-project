import { getStorage } from './modal-film';
import { getMovieById } from './Api';
import { changeMoviesPage } from './change-movies-page';

// import { renderPopularMovies } from './render-popular-movies';
const refs = {
  cardSet: document.querySelector('.card-set'),
  showWatchedBtn: document.querySelector('.header-library__button--watched'),
  showQueueBtn: document.querySelector('.header-library__button--queue'),
};

let pageCount = 0;

const onShowWatched = () => {
  const getWatchedMovie = localStorage.getItem('watched');
  const parsedWatchedMovie = JSON.parse(getWatchedMovie);

  refs.cardSet.innerHTML = '';

  renderWatched(parsedWatchedMovie);

  getCountPages(parsedWatchedMovie);

  changeMoviesPage(pageCount, renderLibrary);
};

const onShowQueue = () => {
  const getMovieFromStorage = localStorage.getItem('queue');
  const parsedMovieFromStorage = JSON.parse(getMovieFromStorage);

  refs.cardSet.innerHTML = '';

  renderWatched(parsedMovieFromStorage);

  getCountPages(parsedMovieFromStorage);

  changeMoviesPage(pageCount, renderLibrary);
};

const renderWatched = async parsedMovieFromStorage => {
  const getMovies = await parsedMovieFromStorage.map(moevieId =>
    getMovieById(moevieId).then(response => renderLibrary(response))
  );
};

const renderLibrary = movies => {
  const {
    id,
    genre_ids,
    poster_path,
    original_title,
    title,
    release_date,
    genres,
    vote_average,
  } = movies;

  const productionYear = new Date(release_date).getFullYear().toString();

  // const genresList = genres.map(item => item.id).join(', ');

  // const alphabetGenres = getGenresById(genre_ids, genres);
  // const genresMarkup = getGenresMarkup(alphabetGenres);
  // console.log(movies);
  // console.log(genre_ids);
  // console.log(genresList);

  const markup = `<li class="card-set__item" data-id="${id}">
                <div class="card-set__box-img"">
                <img src="https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}"
                class="card-set__img"
                />
                </div>
                <h3 class="card-set__title">${title}</h3>
                <div class="card-set__description">
                <ul class="card-set__genre">
                    <li class="card-set__genre-movie">Drama,&nbsp</li>
                    <li class="card-set__genre-movie">Action&nbsp</li>
                </ul>
                    <span class="card-set__production-year">| ${productionYear}</span>
                    <span class="card-set__rating">${vote_average}</span>
                </div>
                </li>`;

  refs.cardSet.insertAdjacentHTML('afterbegin', markup);
};

const getCountPages = arr => {
  pageCount = Math.ceil(arr.length / 10);
};

refs.showWatchedBtn.addEventListener('click', onShowWatched);
refs.showQueueBtn.addEventListener('click', onShowQueue);

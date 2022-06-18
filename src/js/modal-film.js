import { getMovieById } from './Api';

const refs = {
  openModalFilm: document.querySelector('.card-set'),
  closeModalFilm: document.querySelector('.film-card__button-close'),
  body: document.querySelector('body'),
  backdropModalFilm: document.querySelector('.backdrop'),
  modalFilm: document.querySelector('.film-card__box'),
};

const onClick = async e => {
  if (!e.target.closest('.card-set__item')) {
    return;
  }

  refs.modalFilm.innerHTML = '';
  refs.backdropModalFilm.classList.remove('visually-hidden');
  refs.body.style.overflow = 'hidden';

  const getFilmId = e.target.closest('.card-set__item').dataset.id;

  const infoAboutModalFilm = await getMovieById(getFilmId);

  renderModalFilm(infoAboutModalFilm);
};

const renderModalFilm = modalFilm => {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = modalFilm;

  const genresList = genres.map(item => item.name).join(', ');

  const markupModalFilm = `<div class="film-card__image-block">
      <img
        class="film-card__image"
        src="https://image.tmdb.org/t/p/original${poster_path}"
        alt="film"
      />
    </div>
    <div class="film-card__description">
      <h1 class="film-card__description-title">${title}</h1>
      <ul class="film-card__description-set">
        <li class="description-set">
          <p class="description-set__text">Vote / Votes</p>
          <p class="description-set__value">
            <span class="description-set__rating">${vote_average}</span>
            <span class="description-set__separator">/</span>
            <span class="description-set__vote">${vote_count}</span>
          </p>
        </li>
        <li class="description-set">
          <p class="description-set__text">Popularity</p>
          <p class="description-set__value">${popularity}</p>
        </li>
        <li class="description-set">
          <p class="description-set__text">Original Title</p>
          <p class="description-set__value">${original_title}</p>
        </li>
        <li class="description-set">
          <p class="description-set__text">Genre</p>
          <p class="description-set__value">${genresList}</p>
        </li>
      </ul>
      <div class="film-card__description-about">
        <h2 class="description-about__title">About</h2>
        <p class="description-about__text">${overview}</p>
      </div>
      <div class="film-card__description-button">
        <button class="description-button description-button__watched">
          add to Watched
        </button>
        <button class="description-button description-button__queue">
          add to queue
        </button>
      </div>
    </div>
  </div>`;

  refs.modalFilm.insertAdjacentHTML('beforeend', markupModalFilm);
};

refs.openModalFilm.addEventListener('click', onClick);

refs.closeModalFilm.addEventListener('click', () => {
  refs.backdropModalFilm.classList.add('visually-hidden');
  refs.body.style.overflow = 'visible';
});

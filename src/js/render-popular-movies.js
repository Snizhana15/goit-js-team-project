import { getPopularMovies, getGenreList } from './Api';
import * as image from '../images/movie.jpg';

const cardSet = document.querySelector('.card-set');
const spinner = document.getElementById('spinner');

async function getGenres() {
  try {
    const { genres } = await getGenreList();
    return genres;
  } catch (error) {
    alert(error);
  }
}

async function getDataAboutPopularMovies(pageNumber) {
  try {
    const { results: movies, total_pages: totalPages } = await getPopularMovies(
      pageNumber
    );
    return { movies, totalPages };
  } catch (error) {
    alert(error);
  }
}

async function renderPopularMovies(pageNumber) {
  let genres = null;

  spinner.classList.add('spinner');

  if (!localStorage.getItem('genres')) {
    genres = await getGenres();
    localStorage.setItem('genres', JSON.stringify(genres));
  } else {
    genres = JSON.parse(localStorage.getItem('genres'));
  }

  const { movies, totalPages } = await getDataAboutPopularMovies(pageNumber);

  const cardsMarkup = movies
    .map(movie => renderMovieCard(movie, genres))
    .join('');

  cardSet.innerHTML = '';
  cardSet.insertAdjacentHTML('afterbegin', cardsMarkup);
  spinner.classList.remove('spinner');
  return totalPages;
}

function getGenresById(idList, genres) {
  return idList.map(id => genres.find(genre => genre.id === id).name);
}

function getGenresMarkup(genres) {
  let genresMarkup = '';

  switch (genres.length) {
    case 0:
      genresMarkup = `<li class="card-set__genre-movie">Genre's list is empty</li>`;
      break;

    case 1:
      genresMarkup = `<li class="card-set__genre-movie">${genres[0]}</li>`;
      break;

    case 2:
      genresMarkup = `<li class="card-set__genre-movie">${genres[0]},&nbsp</li>
                      <li class="card-set__genre-movie">${genres[1]}</li>`;
      break;

    case 3:
      genresMarkup = `<li class="card-set__genre-movie">${genres[0]},&nbsp</li>
                      <li class="card-set__genre-movie">${genres[1]},&nbsp</li>
                      <li class="card-set__genre-movie">${genres[2]}</li>`;
      break;

    default:
      genresMarkup = `<li class="card-set__genre-movie">${genres[0]},&nbsp</li>
                      <li class="card-set__genre-movie">${genres[1]},&nbsp</li>
                      <li class="card-set__genre-movie">Other</li>`;
  }

  return genresMarkup;
}

function renderMovieCard(movie, genres) {
  const { genre_ids, original_title, id, release_date, title, poster_path } =
    movie;

  const alphabetGenres = getGenresById(genre_ids, genres);
  const genresMarkup = getGenresMarkup(alphabetGenres);
  const productionYear = release_date
    ? new Date(release_date).getFullYear().toString()
    : 'Unknown';
  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : `${image}`;

  return `
        <li class="card-set__item" data-id="${id}">
            <div class="card-set__box-img">
            <img
                loading="lazy"
                src="${posterPath}"
                alt="${original_title}"
                class="card-set__img"
                
            />
            </div>
            <h3 class="card-set__title">${title}</h3>
            <div class="card-set__description">
            <ul class="card-set__genre">
                ${genresMarkup}
            </ul>
            <span class="card-set__genre-movie">&nbsp| ${productionYear}</span>
            </div>
        </li>`;
}

export { renderPopularMovies, getGenresMarkup };

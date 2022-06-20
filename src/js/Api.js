const KEY = 'fadee9dfff8cb6b1bff36771479589d6';

/*
Функцию getPopularMovies() используем для запроса при рендере карточек популярных фильмов на главной странице.
*/

export function getPopularMovies(pageNumber = 1) {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&page=${pageNumber}`
  )
    .then(response => response.json())
    .then(data => {
      if (!(data.success ?? true)) {
        throw new Error(data.status_message);
      }
      return data;
    });
}

/*
Функцию getMoviesBySearchQuery(searchQuery, pageNumber = 1) используем для запроса при рендере карточек при поиске по ключевому слову.
Параметр searchQuery должен быть строкой из input-а поиска.
*/

// export function getSearchQuery(pageNumber = 1) {
//   return fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=superman&language=uk&page=${pageNumber}&include_adult=false`
//   )
//     .then(response => response.json())
//     .then(data => {
//       if (!(data.success ?? true)) {
//         throw new Error(data.status_message);
//       }
//       return data;
//     });
// }

/*
Функцию getMovieById(id) используем для запроса при отображении полной информации о фильме (модалка при клике на карточку).
Параметр id должен быть строкой или числом. 
*/

export function getMovieById(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=uk`
  )
    .then(response => response.json())
    .then(data => {
      if (!(data.success ?? true)) {
        throw new Error(data.status_message);
      }
      return data;
    });
}

/*
Жанры каждого фильма хранятся в виде массива чисел. Кажое число соответствует своему жанру. 
Функция getGenreList() возвращает массив объектов, свойствами которых есть число и соответствующий ему жанр.
Используем при отображении жанров на карточках и модалке.
*/

export function getGenreList() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=uk`
  )
    .then(response => response.json())
    .then(data => {
      if (!(data.success ?? true)) {
        throw new Error(data.status_message);
      }
      return data;
    });
}

// Render Search Query =======================================================================================

// import { getSearchQuery, getGenreList } from './Api';
import { changeMoviesPage } from './change-movies-page';

const cardSet = document.querySelector('.card-set');
const searchInput = document.querySelector('.header__form-input');

searchInput.addEventListener('input', onSearch);

let searchQuery = '';

function getSearchQuery(searchQuery, pageNumber = 1) {
  const url = 'https://api.themoviedb.org/3';
  return fetch(`${url}/search/movie?api_key=${KEY}&query=${searchQuery}&language=uk&page=${pageNumber}&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      if (!(data.success ?? true)) {
        throw new Error(data.status_message);
      }
      return data;
    });
}

function onSearch(event) {
  event.preventDefault();
  searchQuery = event.target.value;

  getSearchQuery();
  downloadSearchQuery();
}

async function getGenres() {
  try {
    const { genres } = await getGenreList();
    return genres;
  } catch (error) {
    alert(error);
  }
}

async function getDataAboutSearchQuery(pageNumber) {
  try {
    const { results: movies, total_pages: totalPages } = await getSearchQuery(searchQuery, pageNumber);
    return { movies, totalPages };
  } catch (error) {
    alert(error);
  }
}

async function renderSearchQuery(pageNumber) {
  const genres = await getGenres();
  const { movies, totalPages } = await getDataAboutSearchQuery(pageNumber);

  const cardsMarkup = movies
    .map(movie => renderMovieCard(movie, genres))
    .join('');

  cardSet.innerHTML = '';
  cardSet.insertAdjacentHTML('afterbegin', cardsMarkup);

  return totalPages;
}

function getGenresById(idList, genres) {
  return idList.map(id => genres.find(genre => genre.id === id).name);
}

function getGenresMarkup(genres) {
  let genresMarkup = '';

  switch (genres.length) {
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
                      <li class="card-set__genre-movie">Інші</li>`;
  }

  return genresMarkup;
}

function renderMovieCard(movie, genres) {
  const { genre_ids, original_title, id, release_date, title, poster_path } =
    movie;

  const alphabetGenres = getGenresById(genre_ids, genres);
  const genresMarkup = getGenresMarkup(alphabetGenres);
  const productionYear = new Date(release_date).getFullYear().toString();

  return `
        <li class="card-set__item" data-id="${id}">
            <div class="card-set__box-img">
            <img
                loading="lazy"
                src="https://image.tmdb.org/t/p/original${poster_path}"
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
    
async function downloadSearchQuery() {
  const totalPages = await renderSearchQuery();
  changeMoviesPage(totalPages > 50 ? 50 : totalPages, renderSearchQuery);
}

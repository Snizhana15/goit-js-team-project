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
Функцию getMoviesBySearchQuery(searchQuery) используем для запроса при рендере карточек при поиске по ключевому слову.
Параметр searchQuery должен быть строкой из input-а поиска.
*/

export function getSearchQuery(searchQuery, pageNumber = 1) {
  const url = 'https://api.themoviedb.org/3';
  return fetch(
    `${url}/search/movie?api_key=${KEY}&query=${searchQuery}&language=eng&page=${pageNumber}&include_adult=false`
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
Функцию getMovieById(id) используем для запроса при отображении полной информации о фильме (модалка при клике на карточку).
Параметр id должен быть строкой или числом. 
*/

export function getMovieById(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=eng`
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
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=eng`
  )
    .then(response => response.json())
    .then(data => {
      if (!(data.success ?? true)) {
        throw new Error(data.status_message);
      }
      return data;
    });
}

import { renderPopularMovies } from './js/render-popular-movies';
import { changeMoviesPage } from './js/change-movies-page';

async function downloadMainHomePage() {
  const totalPages = await renderPopularMovies();
  changeMoviesPage(totalPages > 50 ? 50 : totalPages, renderPopularMovies);
}

downloadMainHomePage();

/*
Імпорт всього файлу modal-film.js
*/

import * as things from './js/modal-film';
import * as elements from './js/localStorage';

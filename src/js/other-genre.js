import { getMovieById } from './Api';

const genresLists = document.querySelectorAll('.card-set__genre');
console.log(genresLists);

for (const list of genresLists) {
  if (
    list.children.length === 3 &&
    list.lastElementChild.textContent === 'Інші'
  ) {
    list.addEventListener('click', onGenresListClick);
  }
}

async function onGenresListClick(event) {
  const id = event.target.closest('.card-set__item').dataset.id;
  console.log(id);
  // Получили id, делаем запрос на сервер и перерисовываем список жанров
  const movieInfo = await getMovieById(id);
  console.log(movieInfo);

  const names = genres.map(genre => genre.name).join('');
  return '<li class = "card-set__genre-movie">${genre}</li>';

  cardSetGenre.innerHTML = '';
  cardSetGenre.insertAdjacentHTML('afterbegin', names);
}

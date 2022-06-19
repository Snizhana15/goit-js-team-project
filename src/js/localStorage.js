const cardBox = document.querySelector('.film-card__box');
cardBox.addEventListener('click', addWatched);
cardBox.addEventListener('click', addQueue);
function addWatched(e) {
  if (!e.target.closest('.description-button__watched')) {
    return;
  }
  const getFilmId = e.target.closest('.description-button__watched').dataset.id;
  const films = JSON.parse(localStorage.getItem('watched') || '[]');
  const film = getFilmId;
  films.push(film);
  localStorage.setItem('watched', JSON.stringify(films));
}
function addQueue(e) {
  if (!e.target.closest('.description-button__queue')) {
    return;
  }
  const getFilmId = e.target.closest('.description-button__queue').dataset.id;
  const films = JSON.parse(localStorage.getItem('queue') || '[]');
  const film = getFilmId;
  films.push(film);
  localStorage.setItem('queue', JSON.stringify(films));
}

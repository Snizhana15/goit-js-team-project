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
  const watchedBtn = e.target.closest('.description-button__watched');
  if (films.includes(film)) {
    return;
  }
  watchedBtn.textContent = 'in watched';
  watchedBtn.style.backgroundColor = 'lightgray';
  watchedBtn.setAttribute('disabled', '');
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
  const queueBtn = e.target.closest('.description-button__queue');
  if (films.includes(film)) {
    return;
  }
  queueBtn.textContent = 'in queue';
  queueBtn.style.backgroundColor = 'lightgray';
  queueBtn.setAttribute('disabled', '');
  films.push(film);
  localStorage.setItem('queue', JSON.stringify(films));
}

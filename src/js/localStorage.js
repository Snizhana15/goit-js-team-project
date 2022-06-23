function addToLocalStorage(film) {
  const watchedBtn = document.querySelector('.description-button__watched');
  const queueBtn = document.querySelector('.description-button__queue');

  const presenceInWatched = localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched')).find(
        ({ id }) => id === film.id
      )
    : false;
  const presenceInQueue = localStorage.getItem('queue')
    ? JSON.parse(localStorage.getItem('queue')).find(({ id }) => id === film.id)
    : false;

  if (!presenceInWatched) {
    watchedBtn.addEventListener('click', addWatched);
  } else {
    watchedBtn.addEventListener('click', removeWatched);
  }

  if (!presenceInQueue) {
    queueBtn.addEventListener('click', addQueue);
  } else {
    queueBtn.addEventListener('click', removeQueue);
  }

  function addWatched(e) {
    if (e.target.textContent === 'remove from queue') {
      return;
    }

    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([film]));
    } else {
      const getMovies = JSON.parse(localStorage.getItem('watched'));
      localStorage.setItem('watched', JSON.stringify([...getMovies, film]));
    }

    watchedBtn.textContent = 'remove from watched';
    watchedBtn.removeEventListener('click', addWatched);
    watchedBtn.addEventListener('click', removeWatched);
  }

  function addQueue(e) {
    if (e.target.textContent === 'remove from queue') {
      return;
    }

    if (!localStorage.getItem('queue')) {
      localStorage.setItem('queue', JSON.stringify([film]));
    } else {
      const getMovies = JSON.parse(localStorage.getItem('queue'));
      localStorage.setItem('queue', JSON.stringify([...getMovies, film]));
    }

    queueBtn.textContent = 'remove from queue';
    queueBtn.removeEventListener('click', addQueue);
    queueBtn.addEventListener('click', removeQueue);
  }

  function removeWatched(e) {
    if (e.target.textContent === 'add to watched') {
      return;
    }

    const currentMovies = JSON.parse(localStorage.getItem('watched'));
    const filteredMovies = currentMovies.filter(({ id }) => id !== film.id);
    localStorage.setItem('watched', JSON.stringify(filteredMovies));

    watchedBtn.textContent = 'add to watched';
    watchedBtn.removeEventListener('click', removeWatched);
    watchedBtn.addEventListener('click', addWatched);
  }

  function removeQueue(e) {
    if (e.target.textContent === 'add to queue') {
      return;
    }

    const currentMovies = JSON.parse(localStorage.getItem('queue'));
    const filteredMovies = currentMovies.filter(({ id }) => id !== film.id);
    localStorage.setItem('queue', JSON.stringify(filteredMovies));

    queueBtn.textContent = 'add to queue';
    queueBtn.removeEventListener('click', removeQueue);
    queueBtn.addEventListener('click', addQueue);
  }
}

export { addToLocalStorage };

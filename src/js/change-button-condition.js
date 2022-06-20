const changeWatchedButtonCondition = (filmId, watchedBtn) => {
  const getWatched = localStorage.getItem('watched');
  const parsGetWatched = JSON.parse(getWatched);

  if (!parsGetWatched) {
    return;
  } else if (parsGetWatched.includes(filmId)) {
    watchedBtn.textContent = 'in watched';
    watchedBtn.style.backgroundColor = 'lightgray';
    watchedBtn.setAttribute('disabled', '');
  }
};

const changeQueueButtonCondition = (filmId, queueBtn) => {
  const getQueue = localStorage.getItem('queue');
  const parseGetQueue = JSON.parse(getQueue);

  if (!parseGetQueue) {
    return;
  } else if (parseGetQueue.includes(filmId)) {
    queueBtn.textContent = 'in queue';
    queueBtn.style.backgroundColor = 'lightgray';
    queueBtn.setAttribute('disabled', '');
  }
};

export { changeWatchedButtonCondition, changeQueueButtonCondition };

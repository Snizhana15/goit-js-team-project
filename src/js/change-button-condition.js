const changeWatchedButtonCondition = (filmId, watchedBtn) => {
  const getWatched = localStorage.getItem('watched');
  const parsGetWatched = JSON.parse(getWatched);

  if (
    parsGetWatched &&
    parsGetWatched.find(({ id }) => id === Number(filmId))
  ) {
    watchedBtn.textContent = 'remove from watched';
  }
};

const changeQueueButtonCondition = (filmId, queueBtn) => {
  const getQueue = localStorage.getItem('queue');
  const parseGetQueue = JSON.parse(getQueue);

  if (parseGetQueue && parseGetQueue.find(({ id }) => id === Number(filmId))) {
    queueBtn.textContent = 'remove from queue';
  }
};

export { changeWatchedButtonCondition, changeQueueButtonCondition };

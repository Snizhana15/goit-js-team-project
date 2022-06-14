import getPopularMovies from '../js/Api';

function getPopularMovies(moviesItems) {
  return moviesItems
    .map(({ poster_path, original_title, genre_ids, release_date }) => {
      return `
      <ul class="card-set">
  <li class="card-set__item">
    <div class="card-set__box-img">
      <img
        src='${poster_path}'
        alt='${original_title}'
        class="card-set__img"
      />
    </div>
    <h3 class="card-set__title">${title}</h3>
    <div class="card-set__description">
      <ul class="card-set__genre">
        <li class="card-set__genre-movie">${genre_ids}</li>
        <li class="card-set__genre-movie">${genre_ids}</li>
      </ul>
      <span class="card-set__genre-movie">${release_date}</span>
    </div>
  </li>
</ul>;
    
    `;
    })
    .split(('-', [0]))
    .join('');
}

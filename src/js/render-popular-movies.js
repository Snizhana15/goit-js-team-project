function renderPopularMovies(moviesItems) {
  return moviesItems
    .map(({ preview, original, description }) => {
      return `
      <ul class="card-set">
  <li class="card-set__item">
    <div class="card-set__box-img">
      <img
        src="https://cdn.pixabay.com/photo/2022/06/08/22/13/cat-7251342_960_720.jpg"
        alt=""
        class="card-set__img"
      />
    </div>
    <h3 class="card-set__title">GREYHOUND</h3>
    <div class="card-set__description">
      <ul class="card-set__genre">
        <li class="card-set__genre-movie">Drama,&nbsp</li>
        <li class="card-set__genre-movie">Action&nbsp</li>
      </ul>
      <span class="card-set__genre-movie">| 2020</span>
    </div>
  </li>
</ul>;
    
    `;
    })
    .join('');
}

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join('');
}

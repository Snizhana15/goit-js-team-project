let pageNumber = 1;

const backwardBtn = document.querySelector('[data-move="backward"]');
const forwardBtn = document.querySelector('[data-move="forward"]');
const pageNumberList = document.querySelector('.number-page');
const cardSet = document.querySelector('.card-set');

/*
  Функция changeMoviesPage принимает в качестве первого аргумента общее количество страниц, доступных для пагинации, а в качестве второго - функцию для рендера карточек фильмов.
*/

function changeMoviesPage(totalPages, renderMovies) {
  renderStartPageNumberList(totalPages);

  backwardBtn.addEventListener('click', onBackwardBtnClick);
  forwardBtn.addEventListener('click', onForwardBtnClick);
  pageNumberList.addEventListener('click', onPageNumberClick);

  function onForwardBtnClick() {
    pageNumber += 1;
    renderMovies(pageNumber);
    cardSet.scrollIntoView();

    activateBtn(backwardBtn);
    if (pageNumber === totalPages) {
      deactivateBtn(forwardBtn);
    }

    if (pageNumber < 4) {
      changeCurrentBtnOnStart();
      return;
    }

    if (pageNumber > totalPages - 3) {
      hideLastPageNumberListElement();
      changeCurrentBtnOnEnd();
    }

    if (pageNumber >= 4 && pageNumber <= totalPages - 2) {
      showFirstPageNumberListElement();
      setNewBtnPageNumbers();
    }
  }

  function onBackwardBtnClick() {
    pageNumber -= 1;
    renderMovies(pageNumber);
    cardSet.scrollIntoView();

    activateBtn(forwardBtn);
    if (pageNumber === 1) {
      deactivateBtn(backwardBtn);
    }

    if (pageNumber > totalPages - 3) {
      changeCurrentBtnOnEnd();
      return;
    }

    if (pageNumber < 4) {
      hideFirstPageNumberListElement();
      changeCurrentBtnOnStart();
    }

    if (pageNumber >= 3 && pageNumber <= totalPages - 3) {
      showLastPageNumberListElement();
      setNewBtnPageNumbers();
    }
  }

  function onPageNumberClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    if (e.target.classList.contains('number-page__btn--current')) {
      return;
    }

    pageNumber = Number(e.target.textContent);
    renderMovies(pageNumber);
    cardSet.scrollIntoView();

    if (pageNumber === 1) {
      removeCurrentBtnClass();
      renderStartPageNumberList();
      return;
    }

    if (pageNumber === totalPages) {
      removeCurrentBtnClass();
      renderEndPageNumberList();
      return;
    }

    if (pageNumber >= 4 && pageNumber <= totalPages - 3) {
      removeCurrentBtnClass();
      pageNumberList.children[3].firstElementChild.classList.add(
        'number-page__btn--current'
      );

      showFirstPageNumberListElement();
      showLastPageNumberListElement();

      activateBtn(forwardBtn);
      activateBtn(backwardBtn);

      setNewBtnPageNumbers();
    }

    if (pageNumber < 4) {
      changeCurrentBtnOnStart();

      hideFirstPageNumberListElement();
      if (totalPages > 5) {
        showLastPageNumberListElement();
      }

      activateBtn(forwardBtn);

      setNewBtnPageNumbersOnStart();
      return;
    }

    if (pageNumber > totalPages - 3) {
      changeCurrentBtnOnEnd();

      hideLastPageNumberListElement();
      if (totalPages > 5) {
        showFirstPageNumberListElement();
      }

      activateBtn(forwardBtn);
      activateBtn(backwardBtn);

      setNewBtnPageNumbersOnEnd();
    }
  }

  function activateBtn(btnLink) {
    btnLink.removeAttribute('disabled');
    btnLink.classList.remove('movies-navigation__arrow-btn--disabled');
  }

  function deactivateBtn(btnLink) {
    btnLink.setAttribute('disabled', '');
    btnLink.classList.add('movies-navigation__arrow-btn--disabled');
  }

  function renderStartPageNumberList() {
    if (totalPages < 6) {
      renderSmallPageNumberList();
      return;
    }

    hideFirstPageNumberListElement();
    showLastPageNumberListElement();

    pageNumberList.children[1].firstElementChild.classList.add(
      'number-page__btn--current'
    );
    pageNumberList.lastElementChild.firstElementChild.textContent =
      String(totalPages);

    deactivateBtn(backwardBtn);
    activateBtn(forwardBtn);

    setNewBtnPageNumbersOnStart();
  }

  function renderEndPageNumberList() {
    hideLastPageNumberListElement();
    if (totalPages > 5) {
      showFirstPageNumberListElement();
    }

    pageNumberList.children[
      totalPages >= 5 ? 5 : totalPages
    ].firstElementChild.classList.add('number-page__btn--current');

    activateBtn(backwardBtn);
    deactivateBtn(forwardBtn);

    if (totalPages <= 5) {
      setNewBtnPageNumbersOnStart();
      return;
    }
    setNewBtnPageNumbersOnEnd();
  }

  function removeCurrentBtnClass() {
    const currentBtn = document.querySelector('.number-page__btn--current');
    currentBtn.classList.remove('number-page__btn--current');
  }

  function changeCurrentBtnOnStart() {
    removeCurrentBtnClass();
    pageNumberList.children[pageNumber].firstElementChild.classList.add(
      'number-page__btn--current'
    );
  }

  function changeCurrentBtnOnEnd() {
    removeCurrentBtnClass();
    pageNumberList.children[
      pageNumber - totalPages + 5
    ].firstElementChild.classList.add('number-page__btn--current');
  }

  function renderSmallPageNumberList() {
    hideArrowBtns();
    renderSmallPageNumberListMarkup();

    hideFirstPageNumberListElement();
    hideLastPageNumberListElement();

    pageNumberList.children[1].firstElementChild.classList.add(
      'number-page__btn--current'
    );
  }

  function hideLastPageNumberListElement() {
    pageNumberList.lastElementChild.style.display = 'none';
    pageNumberList.children[
      pageNumberList.children.length - 2
    ].style.marginRight = '0px';
  }

  function hideFirstPageNumberListElement() {
    pageNumberList.firstElementChild.style.display = 'none';
  }

  function showFirstPageNumberListElement() {
    pageNumberList.firstElementChild.style.display = 'list-item';
  }

  function showLastPageNumberListElement() {
    pageNumberList.lastElementChild.style.display = 'list-item';
    pageNumberList.children[
      pageNumberList.children.length - 2
    ].style.marginRight = '16px';
  }

  function setNewBtnPageNumbers() {
    for (let i = 1; i < pageNumberList.children.length - 1; i += 1) {
      const newPageNumber = pageNumber - 3 + i;
      pageNumberList.children[i].firstElementChild.textContent =
        newPageNumber.toString();
    }
  }

  function setNewBtnPageNumbersOnStart() {
    for (let i = 1; i < pageNumberList.children.length - 1; i += 1) {
      const newPageNumber = i;
      pageNumberList.children[i].firstElementChild.textContent =
        newPageNumber.toString();
    }
  }

  function setNewBtnPageNumbersOnEnd() {
    for (let i = 1; i < pageNumberList.children.length - 1; i += 1) {
      const newPageNumber = totalPages - 5 + i;
      pageNumberList.children[i].firstElementChild.textContent =
        newPageNumber.toString();
    }
  }

  function renderSmallPageNumberListMarkup() {
    let markup = '';
    pageNumberList.innerHTML = '';
    for (let i = 0; i < totalPages + 2; i += 1) {
      markup += `<li class="number-page__item">
                <button type="button" class="number-page__btn">${i}</button>
              </li>`;
    }
    pageNumberList.insertAdjacentHTML('afterbegin', markup);
  }

  function hideArrowBtns() {
    forwardBtn.style.display = 'none';
    backwardBtn.style.display = 'none';
  }
}

export { changeMoviesPage };

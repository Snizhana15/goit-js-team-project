
    const refs = {
      openModalBtn: document.querySelector('[data-modal-opens]'),
      modal: document.querySelector('[data-modals]'),
      body: document.querySelector('body'),
    };
    function toggleModal() {
      refs.modal.classList.remove('is-hiddens');
      function onKeyPress(event) {
        if (event.code === 'Escape') {
          refs.modal.classList.add('is-hiddens');
          refs.body.removeEventListener('keyup', onKeyPress);
        }
      }
      function onGalleryClick(event) {
        if (event.target.closest('.modals')) return;
        refs.modal.classList.add('is-hiddens');
        refs.modal.removeEventListener('click', onGalleryClick);
      }
      refs.body.addEventListener('keyup', onKeyPress);
      refs.modal.addEventListener('click', onGalleryClick);
    }
    refs.openModalBtn.addEventListener('click', toggleModal);
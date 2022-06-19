
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      modal: document.querySelector('[data-modal]'),
      body: document.querySelector('body'),
    };
    function toggleModal() {
      refs.modal.classList.remove('is-hidden');
      function onKeyPress(event) {
        if (event.code === 'Escape') {
          refs.modal.classList.add('is-hidden');
          refs.body.removeEventListener('keyup', onKeyPress);
        }
      }
      function onGalleryClick(event) {
        if (event.target.closest('.modal')) return;
        refs.modal.classList.add('is-hidden');
        refs.modal.removeEventListener('click', onGalleryClick);
      }
      refs.body.addEventListener('keyup', onKeyPress);
      refs.modal.addEventListener('click', onGalleryClick);
    }
    refs.openModalBtn.addEventListener('click', toggleModal);
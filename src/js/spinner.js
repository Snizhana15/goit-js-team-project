const homeSpinner = document.getElementById('spinner')
const spinner = document.getElementsByClassName('header-library__button-list')
  
const showSpinner = () => {
  spinner.classList.add('spinner');
};

const hideSpinner = () => {
  spinner.classList.remove('spinner');
};

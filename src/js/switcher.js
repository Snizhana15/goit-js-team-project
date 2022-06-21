const buttonTheme = document.querySelector('.switch');
const body = document.querySelector('#body');

buttonTheme.addEventListener('click', changeTheme);

function changeTheme() {
  if (body.classList.contains('lightTheme')) {
    body.classList.remove('lightTheme');
    body.classList.add('darkTheme');
    localStorage.setItem('theme', 'darkTheme');
  } else {
    body.classList.remove('darkTheme');
    body.classList.add('lightTheme');
    localStorage.setItem('theme', 'lightTheme');
  }
}

function applyTheme(themeName) {
  body.classList.add(themeName);
  localStorage.setItem('theme', themeName);
  if (themeName === 'lightTheme') {
    buttonTheme.checked = true;
  } else {
    buttonTheme.checked = false;
  }
}
let activeTheme = localStorage.getItem('theme');
console.log(activeTheme);

if (activeTheme === null) {
  applyTheme('lightTheme');
} else {
  applyTheme(activeTheme);
}

const buttonTheme = document.querySelector('.switch');

buttonTheme.addEventListener('click', changeTheme);
function changeTheme() {
  if (buttonTheme.classList.contains('lightTheme')) {
    buttonTheme.classList.remove('lightTheme');
    buttonTheme.classList.add('darkTheme');
    localStorage.setItem('theme', 'darkTheme');
  } else {
    buttonTheme.classList.remove('darkTheme');
    buttonTheme.classList.add('lightTheme');
    localStorage.setItem('theme', 'lightTheme');
  }
}

function applyTheme(themeName) {
  buttonTheme.classList.add(themeName);
  localStorage.setItem('theme', themeName);
}
let activeTheme = localStorage.getItem('theme');
console.log(activeTheme);

if (activeTheme === null) {
  applyTheme('lightTheme');
} else {
  applyTheme(activeTheme);
}

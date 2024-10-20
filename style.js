const themeToggle = document.querySelector('.theme-controller');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    themeToggle.checked = true;
  }
}


themeToggle.addEventListener('change', function() {
  if (this.checked) {
   
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {

    document.documentElement.setAttribute('data-theme', 'aqua',);
    localStorage.setItem('theme', 'aqua');
  }
});
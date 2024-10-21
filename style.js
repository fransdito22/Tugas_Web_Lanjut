const themeToggle = document.querySelector('.theme-controller');
const currentTheme = localStorage.getItem('theme');
const themeSwitch = document.getElementById('theme-switch');


// darkmode button
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.checked = true;
        themeSwitch.classList.add('bg-gray-800', 'text-white'); 
        document.body.classList.add('bg-gray-800');
    } else {
        themeSwitch.classList.add('bg-white', 'text-black'); 
        document.body.classList.remove('bg-gray-800'); 
        document.body.classList.add('bg-white'); 
    }
}

// mengatur tema
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        // Mode gelap
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeSwitch.classList.add('bg-gray-800', 'text-white'); 
        themeSwitch.classList.remove('bg-white', 'text-black'); 
        document.body.classList.remove('bg-white');
        document.body.classList.add('bg-gray-800');
    } else {
        // Mode terang
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeSwitch.classList.add('bg-white', 'text-black'); 
        themeSwitch.classList.remove('bg-gray-800', 'text-white'); 
        document.body.classList.add('bg-white'); 
        document.body.classList.remove('bg-gray-800'); 
    }
});

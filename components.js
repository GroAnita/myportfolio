


document.addEventListener('DOMContentLoaded', function() {    
    
const navOverlay = document.getElementById('navOverlay');
const closeNavBtn = document.getElementById('closeNavBtn');
const hamburgerMenu = document.querySelector('.hamburger-menu');


hamburgerMenu.addEventListener('click', () => {
    navOverlay.classList.add('open');
});

closeNavBtn.addEventListener('click', () => {
    navOverlay.classList.remove('open');
});
});

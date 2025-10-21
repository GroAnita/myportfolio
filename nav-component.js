function createNavOverlay() {
    return `
        <div class="nav-overlay" id="navOverlay">
            <button class="nav-overlay__close-button" id="closeNavBtn">&times;</button>
            <nav class="nav-overlay__links">
                <a href="index.html" class="nav-overlay__link">Home</a>
                <a href="aboutme.html" class="nav-overlay__link">About Me</a>
                <a href="mywork.html" class="nav-overlay__link">My Work</a>
                <a href="contactme.html" class="nav-overlay__link">Contact Me</a>
            </nav>
            <hr class="nav-overlay__divider">
            <div class="nav-overlay__div">
                <div class="nav-overlay__logo"><img src="images/GABlogocatpink.svg" alt="Logo"></div>
                <div class="nav-overlay__some"> 
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
        </div>
    `;
}

function createHamburgerMenu() {
    return `
        <button class="hamburger-menu">
            <i class="fa-solid fa-bars"></i>
        </button>
    `;
}

function initializeNavigation() {
    // Add the navigation overlay to the body
    document.body.insertAdjacentHTML('afterbegin', createNavOverlay());

    // Add hamburger menu to the right container if it exists
    const rightContainer = document.querySelector('.home-container__right');
    if (rightContainer) {
        rightContainer.insertAdjacentHTML('afterbegin', createHamburgerMenu());
    }
    
    const navOverlay = document.getElementById('navOverlay');
    const closeNavBtn = document.getElementById('closeNavBtn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerMenu.addEventListener('click', () => {
        navOverlay.classList.add('open');
    });

    closeNavBtn.addEventListener('click', () => {
        navOverlay.classList.remove('open');
    });
}

document.addEventListener('DOMContentLoaded', initializeNavigation);
function createNavOverlay() {
    return `
        <div class="nav-overlay" id="navOverlay">
            <button class="nav-overlay__close-button" id="closeNavBtn" aria-label="Close navigation menu">&times;</button>
            <nav class="nav-overlay__links">
                <a href="index.html" class="nav-overlay__link">Home</a>
                <a href="whoamI.html" class="nav-overlay__link">About Me</a>
                <a href="mywork.html" class="nav-overlay__link">My Work</a>
                <a href="contactme.html" class="nav-overlay__link">Contact Me</a>
            </nav>
            <hr class="nav-overlay__divider">
            <div class="nav-overlay__div">
                <div class="nav-overlay__logo"><img src="images/GABlogocatwhitetext.svg" alt=""></div>
                <div class="nav-overlay__some"> 
                    <a href="https://www.facebook.com/Vampyrellan" target="_blank" rel="noopener noreferrer" aria-label="Visit my Facebook page">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/pawsitivevibesbygro/" target="_blank" rel="noopener noreferrer" aria-label="Visit my Instagram page">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Visit my TikTok page">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/gro-anita-brathen-2a0513154/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn page">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/GroAnita" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub page">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function createHamburgerMenu() {
    return `
        <button class="hamburger-menu" aria-label="Open navigation menu">
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
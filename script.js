document.addEventListener('DOMContentLoaded', (event) => {

    // --- 1. Mobile "Hamburger" Menu ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active'); // For 'X' animation
        });
    }

    // --- Page Reveal Animation ---
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    document.body.appendChild(pageTransition);

    setTimeout(() => {
        pageTransition.classList.add('hide');
    }, 100); // Fade out after page loads

    // Fade in overlay before navigating away
    document.querySelectorAll('a').forEach(link => {
        if (link.target !== '_blank' && link.href && !link.href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                // Only handle local navigation
                if (link.host === location.host) {
                    e.preventDefault();
                    pageTransition.classList.remove('hide');
                    setTimeout(() => {
                        window.location = link.href;
                    }, 400); // Duration matches CSS transition
                }
            });
        }
    });

});

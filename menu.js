// menu.js
document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main-menu');
    const menuItems = mainMenu.querySelectorAll('li a');

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const href = item.getAttribute('href');
            if (href) {
              window.location.href = href;
            }
        });
    });
});

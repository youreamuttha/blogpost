// menu.js
document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main-menu');

    // Add click event listeners to menu items
    mainMenu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            console.log('Menu item clicked:', item);
            // Perform any desired actions on click here
        });
    });
});

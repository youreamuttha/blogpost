// test.js
function testMenus() {
    const horizontalMenu = document.getElementById('horizontal-menu');
    const verticalMenu = document.getElementById('vertical-menu-container');
    if (!horizontalMenu) {
        throw new Error('Horizontal menu is not displayed');
    }
    if (!verticalMenu) {
        throw new Error('Vertical menu is not displayed');
    }
}

function testSubscription(){
    const form = document.getElementById("subscribe-form");
    const button = form.querySelector("button[type='submit']");
    if (!form) {
        throw new Error('Subscribe form is not displayed');
    }
    if (!button) {
        throw new Error('Subscribe button is not displayed');
    }
    button.click();
}

testMenus();
testSubscription();

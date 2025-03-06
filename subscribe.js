// subscribe.js
document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribe-form');

    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        console.log('Subscription request:', email);
        // Here we can add the logic for sending an email to an external service
        alert('Thank you for subscribing!');
    });
});

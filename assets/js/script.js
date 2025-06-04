document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    const form = document.forms['contact-form'];
    const name = form['subject'].value;
    const email = form['email'].value;
    const message = form['message'].value;

    // Validate name
    if(name === '') {
        alert('Please enter a name');
        return false;
    }

    // Validate email
    if(email === '') {
        alert('Please enter an email');
        return false;
    }

    // Validate message
    if(message === '') {
        alert('Please enter a message');
        return false;
    }

    // Show confirmation dialog
    if (confirm('Are you sure you want to send this?')) {
        form.submit();
        alert('Thank you for your message! We will get back to you soon.');
    }
}
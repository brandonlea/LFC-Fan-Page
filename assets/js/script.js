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

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Show confirmation dialog
    if (confirm('Are you sure you want to send this?')) {
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message and reset the form
        alert('Thank you for your message! We will get back to you soon.');


        form.submit();
    }
}
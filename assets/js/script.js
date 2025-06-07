const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


const confirmationDialog = document.getElementById('confirmation-dialog');
const closeDialogButton = document.getElementById('close-dialog');

document.addEventListener('DOMContentLoaded', function() {

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

closeDialogButton.addEventListener('click', function() {
    confirmationDialog.close();
});


function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    const form = document.forms['contact-form'];


    confirmationDialog.showModal();
    
}
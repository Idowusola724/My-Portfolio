// Initialize EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send email using your service ID
    emailjs.send('service_1ao1pzq', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset form after submission
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
});

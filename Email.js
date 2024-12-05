emailjs.init('twXGmwgWB713bG_oD');

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form'); // Get the form
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            emailjs.send('service_rg7zq83', 'template_z947wxp', {
                name: name,
                email: email,
                subject: subject,
                message: message,
            })
            .then(response => {
                alert('Message sent successfully!');
            })
            .catch(error => {
                console.error('Error sending message:', error);
                alert('Failed to send message. Please try again later.');
            });
        });
    } else {
        console.error('Form not found!');
    }
});

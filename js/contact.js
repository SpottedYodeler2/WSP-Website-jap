(function () {
    emailjs.init("YS1d0ihSPWihrh5Ep");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    // 1. Validation Error - Replaces the first alert
    if (!name || !email || !message) {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Fields',
            text: 'Please fill in all the fields before sending.',
            confirmButtonColor: '#3085d6' // You can change this color to match your site
        });
        return;
    }

    const btn = this.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Sending...';
    btn.disabled = true;

    const serviceID = 'service_ae4nfcd';
    const templateID = 'template_gjk4ckl';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            // 2. Success Message
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'We will get back to you as soon as possible.',
                confirmButtonColor: '#3085d6'
            });

            btn.innerText = 'Message Sent!';
            this.reset();

            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
            }, 3000);
        })
        .catch((err) => {
            // 3. Network Error Message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please check your internet connection.',
            });

            btn.innerText = originalText;
            btn.disabled = false;
            console.error('EmailJS Error:', err);
        });
});
(function () {
    // Initializing with your specific Public Key
    emailjs.init("NiZAfz-sb-X5II_LG");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Grab the submit button to show loading state
    const btn = this.querySelector('button');
    const originalText = btn.innerText;

    // Basic Validation
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    if (!name || !email || !message) {
        Swal.fire({
            icon: 'warning',
            title: '入力不足',
            text: 'すべての項目を入力してください。',
            confirmButtonColor: '#3085d6'
        });
        return;
    }

    btn.innerText = '送信中...'; // "Sending..." in Japanese
    btn.disabled = true;

    const serviceID = 'service_ae4nfcd';
    const templateID = 'template_gjk4ckl';

    // Sending the form data
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: '送信完了!',
                text: 'お問い合わせありがとうございました。',
                confirmButtonColor: '#3085d6'
            });

            this.reset();
        })
        .catch((err) => {
            console.error('EmailJS Error:', err);
            Swal.fire({
                icon: 'error',
                title: 'エラー',
                text: '送信に失敗しました。通信環境を確認してください。',
            });
        })
        .finally(() => {
            btn.innerText = originalText;
            btn.disabled = false;
        });
});
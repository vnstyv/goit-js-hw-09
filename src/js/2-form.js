

document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.querySelector('.feedback-form');

    const storage = localStorage.getItem('feedback-form-state');
    if (storage) {
        const { email, message } = JSON.parse(storage);
        feedbackForm.elements['email'].value = email;
        feedbackForm.elements['message'].value = message;
    }
    feedbackForm.addEventListener('input', function (event) {
        if (event.target.name === 'email' || event.target.name === 'message') {
            const currentValue = {
                email: feedbackForm.elements['email'].value.trim(),
                message: feedbackForm.elements['message'].value.trim()
            };
            localStorage.setItem('feedback-form-state', JSON.stringify(currentValue));
        }
    });
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const currentValue = {
            email: feedbackForm.elements['email'].value.trim(),
            message: feedbackForm.elements['message'].value.trim()
        };
        console.log(currentValue);

        localStorage.removeItem('feedback-form-state');
        feedbackForm.reset();
    });
});
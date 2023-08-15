document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if (email === 'abc@gmail.com' && password === '123') {
        window.location.href = 'bank.html';
    }
    else {
        alert('wrong passeord');
    }

})

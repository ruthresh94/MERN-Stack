const togglePassword = document.getElementById('showpassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

const toggleNewPassword = document.getElementById('showNewPassword');
const newPasswordInput = document.getElementById('newPassword');

toggleNewPassword.addEventListener('click', function() {
    const type = newPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    newPasswordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

const toggleConfirmPassword = document.getElementById('showConfirmPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');

toggleConfirmPassword.addEventListener('click', function() {
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email === "your@email.com" && password === "yourpassword") {
        alert("Login successful!");
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function register() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    alert("Registration successful!");
}

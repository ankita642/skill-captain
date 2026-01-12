document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the form from actually submitting in the traditional way
    event.preventDefault();

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get error elements
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset previous errors
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    // 1. Check if fields are empty & Email must contain @
    if (email === '') {
        emailError.textContent = 'Email field cannot be empty.';
        isValid = false;
    } else if (!email.includes('@')) {
        emailError.textContent = 'Email must contain an "@" symbol.';
        isValid = false;
    }

    // 2. Check if fields are empty & Password must be at least 6 characters
    if (password === '') {
        passwordError.textContent = 'Password field cannot be empty.';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // If all checks pass
    if (isValid) {
        // You can add your actual login logic here (e.g., sending data to a server)
        alert('Login successful!'); 
        // For a real application, you would make an API call now
    }
});
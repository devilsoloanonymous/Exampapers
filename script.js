// Handle user registration
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the registration form
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    // Check if the user already exists
    const database = JSON.parse(localStorage.getItem('database')) || {};
    if (database[regUsername]) {
        alert('Username already exists! Please choose a different username.');
        return;
    }

    // Save the new user to the database
    database[regUsername] = {
        password: regPassword,
        lastLogin: null
    };
    localStorage.setItem('database', JSON.stringify(database));
    alert('Registration successful! You can now log in.');
    document.getElementById('registrationForm').reset(); // Clear the form
});

// Handle user login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the login form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user exists in the database
    const users = JSON.parse(localStorage.getItem('database')) || {};
    const userExists = users[username];

    if (userExists && userExists.password === password) {
        // User exists and password matches
        alert('Login successful!');
        // Update last login time
        userExists.lastLogin = new Date().toLocaleString();
        localStorage.setItem('database', JSON.stringify(users));
    } else {
        // User does not exist or password does not match
        alert('Invalid username or password!');
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user exists in the database
    const database = localStorage.getItem('database') || '{}';
    const users = JSON.parse(database);
    const userExists = users[username];

    if (userExists && userExists.password === password) {
        // User exists and password matches
        alert('Login successful!');
        // Store the user data in the database
        users[username].lastLogin = new Date().toLocaleString();
        localStorage.setItem('database', JSON.stringify(users));
    } else {
        // User does not exist or password does not match
        alert('Invalid username or password!');
    }
});

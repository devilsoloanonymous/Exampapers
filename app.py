nt.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save the data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Optionally, display a success message or redirect
    alert('Data saved successfully!');

    // Clear the form
    document.getElementById('loginForm').reset();
});
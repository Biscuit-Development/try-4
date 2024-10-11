const correctPassword = "mehul21"; // Replace with your actual password

function checkPassword() {
    const userPassword = document.getElementById("password").value;
    if (userPassword === correctPassword) {
        alert("Password is correct!");
        // Here, you can add code to display the chat popup
    } else {
        alert("Incorrect password. Try again.");
    }
}

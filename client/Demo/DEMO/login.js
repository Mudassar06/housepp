document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const loginUsername = document.getElementById("email").value;
        const loginPassword = document.getElementById("password").value;

        if (loginUsername === '' || loginPassword === '') {
            alert("Please fill in all fields.");
            return;
        }

        const storedPassword = localStorage.getItem(loginUsername);
        const {password} = JSON.parse(storedPassword)
        if (loginPassword === password) {
            window.location.href = "./app/index.html";
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });
});

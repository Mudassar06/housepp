document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        localStorage.setItem(username, JSON.stringify({ email: email, password: password }));

        window.location.href = "./login.html";
    });
});


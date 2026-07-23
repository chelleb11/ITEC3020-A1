document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    function showError(fieldId, message) {
        const errorSpan = document.getElementById(fieldId + "-error");
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = "block";
        }
    }

    function clearError(fieldId) {
        const errorSpan = document.getElementById(fieldId + "-error");
        if (errorSpan) {
            errorSpan.textContent = "";
            errorSpan.style.display = "none";
        }
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            showError("name", "Name is required.");
            isValid = false;
        } else {
            clearError("name");
        }

        if (email === "") {
            showError("email", "Email is required.");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("email", "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError("email");
        }

        if (message.length < 20) {
            showError("message", "Message must be at least 20 characters.");
            isValid = false;
        } else {
            clearError("message");
        }

        if (isValid) {
            form.style.display = "none";
            document.getElementById("success-message").style.display = "block";
        }
    });

    ["name", "email", "message"].forEach(function (id) {
        document.getElementById(id).addEventListener("input", function () {
            clearError(id);
        });
    });
});
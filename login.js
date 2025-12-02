// UTILITY FUNCTIONS
function setValid(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove("invalid");
    input.classList.add("valid");
    error.style.visibility = "hidden";
}

function setInvalid(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove("valid");
    input.classList.add("invalid");
    error.style.visibility = "visible";
}

// VALIDATION FUNCTIONS

function validateFirstName() {
    var firstname = document.getElementById("firstname").value.trim();
    var regex = /^[A-Za-z]+$/;

    if (firstname.match(regex)) {
        setValid("firstname", "firstname_error");
        return true;
    } else {
        setInvalid("firstname", "firstname_error");
        return false;
    }
}

function validateLastName() {
    var lastname = document.getElementById("lastname").value.trim();
    var regex = /^[A-Za-z]+$/;

    if (lastname.match(regex)) {
        setValid("lastname", "lastname_error");
        return true;
    } else {
        setInvalid("lastname", "lastname_error");
        return false;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value.trim();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.match(regex)) {
        setValid("email", "email_error");
        return true;
    } else {
        setInvalid("email", "email_error");
        return false;
    }
}

function validatePassword() {
    var pass = document.getElementById("password").value;

    if (pass.length >= 6) {
        setValid("password", "password_error");
        return true;
    } else {
        setInvalid("password", "password_error");
        return false;
    }
}

// MASTER VALIDATION FUNCTION
function validateAll() {
    let a = validateFirstName();
    let b = validateLastName();
    let c = validateEmail();
    let d = validatePassword();

    // Redirect if all valid
    if (a && b && c && d) {
        window.location.href = "index.html";
        return false; // prevent default form submit
    }

    return false; // stop submission if invalid
}

// OPTIONAL: Real-time validation while typing
document.getElementById("firstname").addEventListener("input", validateFirstName);
document.getElementById("lastname").addEventListener("input", validateLastName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("password").addEventListener("input", validatePassword);

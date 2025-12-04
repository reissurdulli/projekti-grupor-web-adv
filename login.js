function redirect (url) {
    window.location.href = url;
}

function validation(){

    // firstnamevars
    var name = document.getElementById("firstName").value;
    var valid_firstname_regex = /^[A-Za-z]+$/;

    // lastnamevars
    var lastName = document.getElementById("lastName").value;
    var valid_lastname_regex = /^[A-Za-z]+$/;

    // emailvars
    var email = document.getElementById("email").value;
    var valid_email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


     isValid = true; 


    // First name validation
    if (!name.match(valid_firstname_regex)) {
        document.getElementById("firstName_error").style.visibility = "visible";
        document.getElementById("firstName").style.borderColor = "red";
        isValid = false;
    }

    // Last name validation
    if (!lastName.match(valid_lastname_regex)) {
        document.getElementById("lastName_error").style.visibility = "visible";
        document.getElementById("lastName").style.borderColor = "red";
        isValid = false;
    }

    // Email validation
    if (!email.match(valid_email_regex)) {
        document.getElementById("email_error").style.visibility = "visible";
        document.getElementById("email").style.borderColor = "red";
        isValid = false;
    }

    if (isValid) {
        redirect('index.html');
        return false; 
    } else {
        return false;
    }
}
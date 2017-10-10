function validateUsername() {
    var un = document.myForm.username.value;
    if (un.length < 8) {
        alert("Your username must be at least 8 characters long");
    }
    else {
        alert("Username Has Correct Length")
    } 
}

function validatePassword() {
    var pw01 = document.myForm.password01.value;
    var pw02 = document.myForm.password02.value;
    if (password01 == password02) {
        alert("Passwords Match");
    }
    else {
        alert("Passwords Do Not Match");
    }
}
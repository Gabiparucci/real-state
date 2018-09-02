function isEmail(email) {
    var email = document.getElementById('email-work');

    teste = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;

    if (teste.exec(email)) {
        return true;
    } if (email.value == "") {
        return false;
    }else{
        return false;
    }
}

function enviarWork() {

    var email;

    email = document.getElementById('email-work');

    if (!isEmail()) {
        alert("Por favor, digite um email válido");
    } 
}


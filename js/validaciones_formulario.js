
var inputs = document.getElementsByClassName('formulario__input');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}

function validar() {
    var nombre, email, juego, comentario, llegada, expresion, letras;
    nombre = document.getElementById("Nombre").value;
    email = document.getElementById("Email").value;
    juego = document.getElementById("Juego").value;
    comentario = document.getElementById("Comentario").value;
    llegada = document.getElementById("Llegada").value;
    expresion = /\w+@\w+\.+[a-z]/;
    letras = /^[A-Za-z]+$/;

    if (nombre === "" || email === "" || juego === "" || comentario === "") {
        alert("Complete todos los campos obligatorios ")
        return false;
    }
    else if (nombre.length > 30) {
        alert("El nombre es muy largo")
        return false;
    }
    else if (!letras.test(nombre)) {
        alert("El nombre sólo puede contener letras")
        return false;
    }
    else if (email.length > 100) {
        alert("El correo es muy largo")
        return false;
    }
    else if (!expresion.test(email)) {
        alert("El correo no es válido")
        return false;
    }
    else if (juego.length > 50) {
        alert("El nombre del juego es muy largo")
        return false;
    }
    else if (comentario.length > 100) {
        alert("El comentario es muy largo")
        return false;
    }
    else if (llegada.length > 100) {
        alert("El texto es muy largo")
    }

    // SETEO VALORES VACIOS LUEGO DE VALIDAR (PROBABLEMENTE TENGA QUE CAMBIAR EN UN FUTURO)
    document.getElementById("Nombre").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Juego").value = "";
    document.getElementById("Comentario").value = "";
    document.getElementById("Llegada").value = "";
}

function validarNombre() {
    var e = event || window.event;
    var key = e.keyCode || e.wich;
    if (((key >= 48) && (key <= 57)) || (e.keyCode >= 96 && e.keyCode <= 105)) { //allow backspace //and delete
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
    }
}
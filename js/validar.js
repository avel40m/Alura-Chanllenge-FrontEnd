var inputs = document.querySelectorAll("[data-tipo]");
var error = document.querySelector("[data-error]");
var boton = document.querySelector("[data-boton]");

boton.classList.add("anular-boton");


boton.addEventListener("click", () => {
    alert("Mensaje enviado, me contactare con usted, muchisimas gracias");
    location.reload();
});

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    });
});

var contador = 0;

function validar(input) {
    const tipoDeInput = input.dataset.tipo;

    switch (tipoDeInput) {
        case "nombre":
            if (validarNombre(input.value)) {
                validacionCorrecta(tipoDeInput);
                contador++;
            } else {
                validacionesDeErrores(tipoDeInput);
            }
            break;
        case "email":
            if (validarEmail(input.value)) {
                validacionCorrecta(tipoDeInput);
                contador++;
            } else {
                validacionesDeErrores(tipoDeInput);
            }
            break;
        case "asunto":
            if (validarAsunto(input.value)) {
                validacionCorrecta(tipoDeInput);
                contador++;
            } else {
                validacionesDeErrores(tipoDeInput);
            }
            break;
        case "mensaje":
            if (validacionMensaje(input.value)) {
                validacionCorrecta(tipoDeInput);
                contador++;
            } else {
                validacionesDeErrores(tipoDeInput);
            }
            break;
    }

    if (contador > 3) {
        boton.classList.remove("anular-boton");
        boton.classList.add("boton-enviar");
        boton.disabled = false;
    }
}

function validarNombre(valor) {
    if (valor.length == 0 || valor.length > 50) {
        return false;
    }
    return true;
}

function validarEmail(valor) {
    if (valor.length == 0) {
        return false;
    }
    var contador = 0;
    for (let i = 0; i < valor.length; i++) {
        if (valor[i] == "@" || valor[i] == ".") {
            contador++;
        }
    }
    if (contador == 2) {
        return true;
    } else {
        return false;
    }
}

function validarAsunto(valor){
    if (valor.length == 0 || valor.length > 50) {
        return false;
    } else {
        return true;
    }
}

function validacionMensaje(valor){
    if (valor.length == 0 || valor.length > 300) {
        return false;
    } else {
        return true;        
    }
}

function validacionesDeErrores(input) {
    if (input == "nombre") {
        error.textContent = "El campo nombre debe tener de 0 a 50 caracteres";
        error.classList.add("error--validaciones");
        inputs[0].classList.add("input--error");
    }
    if (input == "email") {
        error.textContent = "el campo email debe tener un @ o un . y no deberá ser nulo";
        error.classList.add("error--validaciones");
        inputs[1].classList.add("input--error");
    }
    if (input == "asunto") {
        error.textContent = "El campo asunto debe tener de 0 a 50 caracteres";
        error.classList.add("error--validaciones");
        inputs[2].classList.add("input--error");
    }
    if (input == "mensaje") {
        error.textContent = "El campo mensaje debe tener de 0 a 300 caracteres";
        error.classList.add("error--validaciones");
        inputs[3].classList.add("input--error");
    }
}

function validacionCorrecta(input) {
    error.innerHTML = '';
    if (input == "nombre") {
        inputs[0].classList.remove("input--error");
        inputs[0].classList.add("correcta--validacion");
    }
    if (input == "email") {
        inputs[1].classList.remove("input--error");
        inputs[1].classList.add("correcta--validacion");
    }
    if (input == "asunto") {
        inputs[2].classList.remove("input--error");
        inputs[2].classList.add("correcta--validacion");        
    }
    if (input == "mensaje") {
        inputs[3].classList.remove("input--error");
        inputs[3].classList.add("correcta--validacion");        
    }
}

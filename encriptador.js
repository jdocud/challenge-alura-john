// Función encriptar
function botonEncriptar() {
    const mensaje = document.querySelector(".mensaje-encriptar").value;
    const mensajeEncriptado = encriptarTexto(mensaje);
    const mensajeEncriptadoArea = document.querySelector(".mensaje-encriptado");

    mensajeEncriptadoArea.value = mensajeEncriptado;

    const botonCopiar = document.querySelector(".boton-copiar");
    if (mensajeEncriptado) {
        botonCopiar.style.display = "block";
        mensajeEncriptadoArea.classList.add("con-texto");
        mensajeEncriptadoArea.classList.remove("sin-texto");
    } else {
        botonCopiar.style.display = "none";
        mensajeEncriptadoArea.classList.add("sin-texto");
        mensajeEncriptadoArea.classList.remove("con-texto");
    }
}

// Función desencriptar
function botonDesencriptar() {
    const mensajeEncriptado = document.querySelector(".mensaje-encriptar").value;
    const mensajeDesencriptado = desencriptarTexto(mensajeEncriptado);
    const mensajeEncriptadoArea = document.querySelector(".mensaje-encriptado");

    mensajeEncriptadoArea.value = mensajeDesencriptado;

    if (mensajeDesencriptado) {
        mensajeEncriptadoArea.classList.add("con-texto");
        mensajeEncriptadoArea.classList.remove("sin-texto");
    } else {
        mensajeEncriptadoArea.classList.add("sin-texto");
        mensajeEncriptadoArea.classList.remove("con-texto");
    }
}

// Función para reemplazo de vocales
function encriptarTexto(mensaje) {
    let encriptado = mensaje.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encriptado;
}

// Función para reemplazo de encriptado
function desencriptarTexto(mensajeEncriptado) {
    let desencriptado = mensajeEncriptado.replace(/enter/g, "e")
                                         .replace(/imes/g, "i")
                                         .replace(/ai/g, "a")
                                         .replace(/ober/g, "o")
                                         .replace(/ufat/g, "u");
    return desencriptado;
}

function limpiar() {
    document.querySelector('.mensaje-encriptar').value = '';
    document.querySelector('.mensaje-encriptado').value = '';
    document.querySelector('.boton-copiar').style.display = 'none';
    document.querySelector('.mensaje-encriptado').classList.add("sin-texto");
    document.querySelector('.mensaje-encriptado').classList.remove("con-texto");
}

document.querySelector(".boton-copiar").addEventListener("click", function() {
    const mensajeEncriptado = document.querySelector(".mensaje-encriptado").value;
    navigator.clipboard.writeText(mensajeEncriptado).then(function() {
        alert("Texto copiado");
    });
});

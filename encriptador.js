// Función encriptar
function botonEncriptar() {
    const mensaje = document.querySelector(".mensaje-encriptar").value;
    const mensajeEncriptado = encriptarTexto(mensaje);
    document.querySelector(".mensaje-encriptado").value = mensajeEncriptado;

    const botonCopiar = document.querySelector(".boton-copiar");
    if (mensajeEncriptado) {
        botonCopiar.style.display = "block";
    } else {
        botonCopiar.style.display = "none";
    }
}

// Función desencriptar
function botonDesencriptar() {
    const mensajeEncriptado = document.querySelector(".mensaje-encriptar").value;
    const mensajeDesencriptado = desencriptarTexto(mensajeEncriptado);
    document.querySelector(".mensaje-encriptado").value = mensajeDesencriptado;
}

// fúncion para reemplazo de vocales
function encriptarTexto(mensaje) {
    let encriptado = mensaje.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encriptado;
}

// fúncion para reemplazo de encriptado
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
}

document.querySelector(".boton-copiar").addEventListener("click", function() {
    const mensajeEncriptado = document.querySelector(".mensaje-encriptado").value;
    navigator.clipboard.writeText(mensajeEncriptado).then(function() {
        alert("Texto copiado");
    });
});

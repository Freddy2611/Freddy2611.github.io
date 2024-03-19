var botonIncriptar = document.querySelector(".btn-incriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var Img = document.querySelector(".contenedor-img");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonIncriptar.onclick = incriptar;
botonDesencriptar.onclick = desencriptar;

function incriptar() {
    ocultarAdelante();
    var cajaTexto = recuperartexto();
    resultado.textContent = encriptartexto(cajaTexto);
}

function recuperartexto() {
    var cajaTexto = document.querySelector(".cajaTexto");
    return cajaTexto.value;
}

function desencriptar() {
    ocultarAdelante();
    var cajaTexto = recuperartexto();
    resultado.textContent = desencriptartexto(cajaTexto);
}

function ocultarAdelante() {
    Img.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptartexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "ai";
        } else if (texto[i] == "e") {
            textofinal = textofinal + "enter";
        } else if (texto[i] == "i") {
            textofinal = textofinal + "imes";
        } else if (texto[i] == "o") {
            textofinal = textofinal + "ober";
        } else if (texto[i] == "u") {
            textofinal = textofinal + "ufat";
            i = i + 3;
        } else {
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
});

function desencriptartexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "a";
            i = i + 1;
        } else if (texto[i] == "e") {
            textofinal = textofinal + "e";
            i = i + 4;
        } else if (texto[i] == "i") {
            textofinal = textofinal + "i";
            i = i + 3;
        } else if (texto[i] == "o") {
            textofinal = textofinal + "o";
            i = i + 3;
        } else if (texto[i] == "u") {
            textofinal = textofinal + "u";
            i = i + 3;
        } else {
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

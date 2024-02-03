document.addEventListener("DOMContentLoaded", function () {
  // Función para asignar texto a un elemento HTML
  function asignarTexto(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
  }

  // Función para encriptar el texto según las reglas dadas
  function encriptar() {
    let textoUsuario = document.querySelector(".caja-texto").value;
    let textoEncriptado = textoUsuario
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    asignarTexto(".texto-resultado", textoEncriptado);
    document.getElementById("copiar").style.display = "block";
    document.querySelector(".contenedor-resultado").style.display = "block";
    document.querySelector(".contenedor-muneco").style.display = "none";
    document.querySelector(".mensaje").style.display = "none";
  }

  // Función para desencriptar el texto
  function desencriptar() {
    let textoUsuario = document.querySelector(".caja-texto").value;
    let textoDesencriptado = textoUsuario
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    asignarTexto(".texto-resultado", textoDesencriptado);
    document.getElementById("copiar").style.display = "block";
    document.querySelector(".contenedor-resultado").style.display = "block";
    document.querySelector(".contenedor-muneco").style.display = "none";
    document.querySelector(".mensaje").style.display = "none";
  }

  // Función para copiar el texto al portapapeles
  function copiar() {
    let textoResultado = document.querySelector(".texto-resultado").textContent;
    const textarea = document.createElement("textarea");
    textarea.value = textoResultado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  // Asignar eventos a los botones
  document.getElementById("encriptar").addEventListener("click", encriptar);
  document
    .getElementById("desencriptar")
    .addEventListener("click", desencriptar);
  document.getElementById("copiar").addEventListener("click", copiar);
});

// Obtenemos referencias de los elementos
const textarea = document.getElementById("texto");
const palabrasElemento = document.getElementById("palabras");
const caracteresElemento = document.getElementById("caracteres");
const btnReiniciar = document.getElementById("btnReiniciar");

// Función que actualiza los contadores
function actualizarContadores() {
  const texto = textarea.value;

  // Contar palabras: dividir por espacios y filtrar vacíos
  const palabras = texto.trim().split(/\s+/).filter(p => p.length > 0);

  // Contar caracteres sin espacios ni saltos de línea
  const caracteres = texto.replace(/\s/g, "");

  // Actualizamos en pantalla
  palabrasElemento.textContent = "Palabras: " + palabras.length;
  caracteresElemento.textContent = "Caracteres (sin espacios): " + caracteres.length;
}

// Escuchamos el evento "input" en tiempo real
textarea.addEventListener("input", actualizarContadores);

// Botón para reiniciar
btnReiniciar.addEventListener("click", () => {
  textarea.value = ""; // vaciamos el textarea
  actualizarContadores(); // reiniciamos los contadores
});

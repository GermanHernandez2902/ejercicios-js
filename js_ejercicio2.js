// Inicializamos la variable para contar clics
let contador = 0;

// Obtenemos las referencias de los elementos del DOM
const botonContar = document.getElementById("btnContar");
const botonReiniciar = document.getElementById("btnReiniciar");
const textoContador = document.getElementById("contador");

// Evento para contar clics
botonContar.addEventListener("click", () => {
  contador++; // sumamos 1 al contador
  textoContador.textContent = "Clics: " + contador; // actualizamos el texto
});

// Evento para reiniciar contador
botonReiniciar.addEventListener("click", () => {
  contador = 0; // reiniciamos
  textoContador.textContent = "Clics: " + contador; // mostramos en pantalla
});

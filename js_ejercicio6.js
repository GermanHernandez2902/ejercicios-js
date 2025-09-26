// Variables para controlar el tiempo
let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = null;
let enMarcha = false;

const tiempoElemento = document.getElementById("tiempo");
const btnIniciar = document.getElementById("btnIniciar");

// Función que actualiza el temporizador
function actualizarTiempo() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  let formato =
    (horas < 10 ? "0" + horas : horas) + ":" +
    (minutos < 10 ? "0" + minutos : minutos) + ":" +
    (segundos < 10 ? "0" + segundos : segundos);

  tiempoElemento.textContent = formato;
}

// Iniciar o Reanudar temporizador
btnIniciar.addEventListener("click", () => {
  if (!enMarcha) {
    intervalo = setInterval(actualizarTiempo, 1000);
    enMarcha = true;
    btnIniciar.textContent = "En marcha..."; // mientras corre
    btnIniciar.disabled = true; // desactivamos para que no se pulse varias veces
  }
});

// Pausar temporizador
document.getElementById("btnPausar").addEventListener("click", () => {
  if (enMarcha) {
    clearInterval(intervalo);
    enMarcha = false;
    btnIniciar.textContent = "Reanudar"; // cambiamos a reanudar
    btnIniciar.disabled = false; // habilitamos el botón otra vez
  }
});

// Reiniciar temporizador
document.getElementById("btnReiniciar").addEventListener("click", () => {
  clearInterval(intervalo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  tiempoElemento.textContent = "00:00:00";
  enMarcha = false;
  btnIniciar.textContent = "Iniciar"; // vuelve al estado inicial
  btnIniciar.disabled = false;
});

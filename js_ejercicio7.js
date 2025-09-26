// Obtenemos elementos del DOM
const inputLongitud = document.getElementById("longitud");
const botonGenerar = document.getElementById("btnGenerar");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

// Conjunto de caracteres posibles
const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}<>?";

// Evento para generar la contraseña
botonGenerar.addEventListener("click", () => {
  const longitud = parseInt(inputLongitud.value);

  // Validación
  if (isNaN(longitud) || longitud < 4) {
    error.style.display = "block";
    resultado.textContent = "Contraseña: ";
    return;
  }

  error.style.display = "none"; // ocultamos error si es válido
  let password = "";

  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    password += caracteres[randomIndex];
  }

  resultado.textContent = "Contraseña: " + password;
});

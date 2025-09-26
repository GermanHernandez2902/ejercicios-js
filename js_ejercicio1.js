// Cambiar a un color específico
function cambiarColor(color) {
  document.body.style.backgroundColor = color;
}

// Cambiar a un color aleatorio
function cambiarColorAleatorio() {
  // Colores en formato HEX
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
}

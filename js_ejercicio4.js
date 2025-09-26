// Obtenemos los elementos del DOM
const inputBuscador = document.getElementById("buscador");
const itemsLista = document.querySelectorAll("#lista li");
const noResultados = document.getElementById("noResultados");

// Escuchamos el evento "input" (cuando el usuario escribe en el campo)
inputBuscador.addEventListener("input", () => {
  const texto = inputBuscador.value.toLowerCase(); // lo pasamos a minúsculas
  let coincidencias = 0; // contador de resultados

  itemsLista.forEach(item => {
    const contenido = item.textContent.toLowerCase();
    
    if (contenido.includes(texto)) {
      item.classList.remove("hidden");
      coincidencias++;
    } else {
      item.classList.add("hidden");
    }
  });

  // Si no hay coincidencias, mostramos mensaje
  if (coincidencias === 0) {
    noResultados.style.display = "block";
  } else {
    noResultados.style.display = "none";
  }
});

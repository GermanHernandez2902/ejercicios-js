// Obtenemos referencias de los elementos del DOM
const input = document.getElementById("inputTexto");
const botonAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

// Evento para agregar un nuevo elemento a la lista
botonAgregar.addEventListener("click", () => {
  const texto = input.value.trim(); // Quitamos espacios en blanco

  if (texto !== "") {
    // Creamos un nuevo <li>
    const li = document.createElement("li");
    li.textContent = texto;

    // Creamos un botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("delete-btn");

    // Evento para eliminar el elemento cuando se haga clic
    botonEliminar.addEventListener("click", () => {
      lista.removeChild(li);
    });

    // Agregamos el botón al <li>
    li.appendChild(botonEliminar);

    // Agregamos el <li> a la lista
    lista.appendChild(li);

    // Limpiamos el campo de texto
    input.value = "";
  } else {
    alert("Por favor escribe algo antes de agregar.");
  }
});

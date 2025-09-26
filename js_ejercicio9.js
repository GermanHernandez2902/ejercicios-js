// Referencias del DOM
const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");
const listaTareas = document.getElementById("listaTareas");

// Cargamos las tareas desde localStorage
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// Función para renderizar las tareas en la lista
function renderizarTareas() {
  listaTareas.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    if (tarea.completada) li.classList.add("completed");

    // Texto de la tarea
    const span = document.createElement("span");
    span.textContent = tarea.texto;

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;
    checkbox.addEventListener("change", () => {
      tareas[index].completada = checkbox.checked;
      guardarTareas();
    });

    li.appendChild(span);
    li.appendChild(checkbox);
    listaTareas.appendChild(li);
  });
}

// Función para guardar en localStorage
function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
  renderizarTareas();
}

// Agregar nueva tarea
btnAgregar.addEventListener("click", () => {
  const texto = inputTarea.value.trim();
  if (texto !== "") {
    tareas.push({ texto: texto, completada: false });
    inputTarea.value = "";
    guardarTareas();
  } else {
    alert("⚠️ Escribe una tarea antes de agregar.");
  }
});

// Limpiar tareas completadas
btnLimpiar.addEventListener("click", () => {
  tareas = tareas.filter(t => !t.completada);
  guardarTareas();
});

// Renderizar al cargar la página
renderizarTareas();

// Función principal para calcular operaciones
function calcular(operacion) {
  // Obtenemos los valores de los inputs
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultadoTexto = document.getElementById("resultado");

  // Validación: verificar que ambos campos tengan número
  if (isNaN(num1) || isNaN(num2)) {
    resultadoTexto.textContent = "⚠️ Por favor ingresa ambos números.";
    return;
  }

  let resultado;

  // Lógica según la operación
  switch (operacion) {
    case "sumar":
      resultado = num1 + num2;
      break;
    case "restar":
      resultado = num1 - num2;
      break;
    case "multiplicar":
      resultado = num1 * num2;
      break;
    case "dividir":
      if (num2 === 0) {
        resultadoTexto.textContent = "❌ Error: No se puede dividir por 0.";
        return;
      }
      resultado = num1 / num2;
      break;
  }

  // Mostrar resultado en pantalla
  resultadoTexto.textContent = "Resultado: " + resultado;
}

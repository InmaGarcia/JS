var texto = confirm("¿Quieres cambiar el texto?");

document.addEventListener("DOMContentLoaded", () => {
  if (texto) {
    document.body.innerHTML = "<p>Texto Cambiado</p>";
  } else if (confirm("¿Quieres cambiar el color de la letra?")) {
    document.body.style.color = "orange";
  }
});

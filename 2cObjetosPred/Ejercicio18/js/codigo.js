function cambiarColor() {
  let color = document.body.style.backgroundColor;
  if (color == "orange") {
    window.document.body.style.backgroundColor = "blue";
  } else {
    window.document.body.style.backgroundColor = "orange";
  }
}

// el setInterval lleva la funcion sin () y luego los milisegundos
//no lleva () porque eso le dice que lance la funcion en ese mismo momento
var temporizador = setInterval(cambiarColor, 1000);
function detener() {
  clearInterval(temporizador);
}

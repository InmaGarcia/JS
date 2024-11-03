inicio = () => {
  var $nombre = document.getElementById("nombre").value.trim();
  var $apellido = document.getElementById("apellidos").value.trim();

  let mensajeErrorNombre = "";
  let mensajeErrorApellidos = "";
  let vocales = "a" && "e" && "i" && "o" && "u";
  if (!vocales.test(nombre)) {
    mensajeErrorNombre = "El nombre debe comenzar con una vocal.";
  }

  if (apellidos.split(" ").length < 2) {
    mensajeErrorApellidos = "Los apellidos deben tener al menos dos palabras.";
  }

  // Mostrar mensajes de error debajo de cada input
  document.getElementById("error-nombre").innerText = mensajeErrorNombre;
  document.getElementById("error-apellidos").innerText = mensajeErrorApellidos;

  // Si no hay errores, mostrar mensaje de éxito
  if (mensajeErrorNombre === "" && mensajeErrorApellidos === "") {
    alert("Formulario válido");
  }
};

document.addEventListener("DOMContentLoaded", inicio);



function cuadrado(n) {
  return n * n;
}

console.log("Función tradicional:" + cuadrado(5));

let valor = function (n) {
  return n * n;
};

console.log("Función anónima:" + valor(5));

let valor2 = (n) => {
  return n * n;
};

console.log("Función flecha:" + valor2(5));



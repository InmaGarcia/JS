var $nuevaVentana;
var $nombre;
var $apellidos;
var $nacimiento;
let array;
let apellido1;
let apellido2;

function abrirPagina() {
  $nuevaVentana = window.open("datos.html", "datos", "width=400, height=300");
}

function mostrar() {
  array = $apellidos.split(" ");
  apellido1 = array[0];
  apellido2 = array[1];

  window.opener.$nuevaVentana.window.document.body.innerHTML += `<p>Nombre: ${$nombre}<br>Primer Apellido: ${apellido1}<br>Segundo Apellido: ${apellido2}</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  $nombre = $nuevaVentana.getElementById("nombre");
  $apellidos = $nuevaVentana.getElementById("apellidos");
  $nacimiento = new Date($nuevaVentana.getElementById("nacimiento"));

  document.getElementById("abrirPagina").addEventListener("click", abrirPagina);
  $nuevaVentana.document
    .getElementById("mostrar")
    .addEventListener("click", mostrar);
});

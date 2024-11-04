var $error;
var formulario;
var $nombre;
var $apellidos;
var $edad;
var $provincia;
inicio = () => {
  //aqui no se cojen los valores porque estan vacios
  formulario = document.getElementById("formulario");
  $nombre = document.getElementById("nombre");
  $apellidos = document.getElementById("apellidos");
  $edad = document.getElementById("edad");

  $provincia = document.getElementById("provincia");

  $error = document.getElementById("resultado");

  document.getElementById("enviar").addEventListener("click", validar);
  //una vez que doy a enviar ya cojo los valores
};

validar = (e) => {
  e.preventDefault(); //evitar el envio por defecto del formulario

  for (var i = 0; i < formulario.elements.length; i++) {
    if (formulario.elements[i].type == "text") {
      if (formulario.elements[i].value == "") {
        $error.textContent = `El campo ${formulario.elements[i].name} no puede estar vacío`;
        $error.style.color = "red";
        return;
      }
    } else if (isNaN($edad.value) || 0 > $edad.value || $edad.value > 105) {
      $error.textContent = `La edad introducida no es válida`;
      $error.style.color = "red";
      return;
    } else if (provincia.value == 0) {
      $error.textContent = "Seleccione una provincia";
      $error.style.color = "red";
      return;
    } else {
      if (confirm("¿Deseas enviar el formulario?")) {
        formulario.submit(); //enviar el formulario si se confirma
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", inicio);

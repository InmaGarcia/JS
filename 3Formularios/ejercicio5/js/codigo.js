var $boton;
var $input;

document.addEventListener("DOMContentLoaded", () => {
  $boton = document.getElementsByName("boton");
  $boton[0].addEventListener("click", () => {
    $input = document.getElementsByName("radio");
    for (let radio of $input) {
      if (radio.checked) {
        alert("La opción seleccionada es: " + radio.value);
      }
    }
  });
});

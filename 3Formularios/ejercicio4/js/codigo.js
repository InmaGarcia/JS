var $boton;
var $input;
var $suma;

sumatorio = () => {
  $input = document.getElementsByName("checkbox");
  $suma = 0;
  for (let checkbox of $input) {
    if (checkbox.checked) {
      $suma += Number(checkbox.value);
    }
  }

  alert("La suma es: " + $suma);

  for (let checkbox of $input) {
    checkbox.checked = false;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $boton = document.getElementById("boton");
  $boton.addEventListener("click", sumatorio);
});

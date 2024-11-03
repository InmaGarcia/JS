var $texto;
var $boton;

modificar = () => {
  $texto.value = prompt("Dime tu nombre");
  $boton.innerHTML = "Pulsado";
};
document.addEventListener("DOMContentLoaded", () => {
  $texto = document.getElementsByTagName("input")[0];
  $boton = document.getElementsByTagName("button")[0];

  $boton.addEventListener("click", modificar);
});

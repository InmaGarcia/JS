var $boton;

document.addEventListener("DOMContentLoaded", () => {
  $boton = document.getElementsByTagName("button")[0];
  $boton.addEventListener("click", () => {
    document.getElementById("c1").checked = true;
  });
});

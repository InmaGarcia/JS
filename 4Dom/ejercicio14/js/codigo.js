window.addEventListener("DOMContentLoaded", () => {
  $boton = document.getElementById("btn");
  $boton.addEventListener("click", () => {
    let texto = prompt("Introduce un texto");
    let posicion = Number(prompt("Introduce una posición del 1 al 10"));

    if (posicion > 0 && posicion <= 10) {
      let lista = document.getElementsByTagName("li");
      lista[posicion - 1].innerHTML = texto;
    } else {
      alert("La posición indicada no es correcta");
    }
  });
});

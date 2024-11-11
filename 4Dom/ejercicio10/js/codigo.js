document.addEventListener("DOMContentLoaded", () => {
  var $boton = document.createElement("button");
  document.body.appendChild($boton);
  var $textBtn = document.createTextNode("Añadir");
  $boton.appendChild($textBtn);

  $boton.addEventListener("click", (e) => {
    e.preventDefault();
    var $nuevo = document.createElement("li");
    document.getElementById("lista").appendChild($nuevo);
    var $texto = document.createTextNode("nueva linea");
    $nuevo.appendChild($texto);
  });
});

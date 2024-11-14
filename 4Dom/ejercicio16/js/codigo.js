var $table = document.createElement("table");
var $body = document.body;
$body.appendChild($table);

for (let i = 0; i < 2; i++) {
  var fila = document.createElement("tr");
  $table.appendChild(fila);
  for (let j = 0; j < 2; j++) {
    var col = document.createElement("td");
    col.innerHTML = `Posición:${i}${j}`;
    fila.appendChild(col);
  }
}

var $tabla = Array.from(document.getElementsByTagName("tr"));
$tabla.forEach((element) => {
  element.firstElementChild.setAttribute("style", "background-color:red;");
  element.lastElementChild.setAttribute(
    "style",
    "background-color:yellow;font-weight: bold;"
  );
});

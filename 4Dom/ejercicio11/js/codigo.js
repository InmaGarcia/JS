const $estaciones = ["Invierno", "Primavera", "Verano", "Otoño"];
//crear titulo
$titulo = document.createElement("h2");
$titulo.appendChild(document.createTextNode("Estaciones del año"));
document.body.appendChild($titulo);

//creo la lista
$lista = document.createElement("ul");
document.body.appendChild($lista);

//recorro el array y creo el contenido de la lista
$estaciones.forEach((e) => {
  $linea = document.createElement("li");
  $linea.appendChild(document.createTextNode(e));
  $lista.appendChild($linea);
});

const $continentes = ["Europa", "Asia", "Africa", "America", "Oceanía"];
document.body.innerHTML += "<h2>Continentes</h2>";
$lista2 = document.createElement("ul");
document.body.appendChild($lista2);

$innerHtml = "";
$continentes.forEach((e) => {
  $innerHtml += `<li>${e}</li>`;
});

document.body.innerHTML += $innerHtml;

var prim;
var segu;

function abrirVentanas() {
  prim = window.open(
    "ventana1.html",
    "ventana 1",
    "width=300, height=200, top=100, left=300"
  );
  segu = window.open(
    "ventana2.html",
    "ventana 2 ",
    "width=300, height=200, top=500, left=300"
  );

  prim.focus();
  segu.focus();
}

function cerrarVentanas() {
  prim.close();
  segu.close();
}

function cambiarFondoVentana1() {
  prim.document.body.style.backgroundColor = "#FFECA1";
}

function cambiarFondoVentana2() {
  if (segu) {
    segu.document.body.style.backgroundColor = "#EFC3CA";
  }
}

function enviarMensajeAV2() {
  window.opener.segu.window.document.body.innerHTML +=
    "<p>La ventana 1 te saluda</p>";
}

function cambiarFondodesde1() {
  window.opener.segu.document.body.style.backgroundColor = "#7DDA58";
}

function enviarMensajeAV1() {
  window.opener.prim.document.body.innerHTML += "<p>La ventana 2 te saluda</p>";
}

function cambiarFondodesde2() {
  if (segu) {
    segu.document.body.style.backgroundColor = "#5DE2E7'";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("enlace_1").addEventListener("click", muestraOculta);
  document.getElementById("enlace_2").addEventListener("click", muestraOculta);
  document.getElementById("enlace_3").addEventListener("click", muestraOculta);
});

muestraOculta = (e) => {
  var trozos = e.target.id.split("_");
  var num = trozos[1];

  var elemento = document.getElementById("contenido_" + num);
  var enlace = document.getElementById("enlace_" + num);

  if (
    elemento.style.visibility == "" ||
    elemento.style.visibility == "visible"
  ) {
    elemento.style.visibility = "hidden";
    enlace.innerHTML = "Mostrar contenido";
  } else {
    elemento.style.visibility = "visible";
    enlace.innerHTML = "Ocultar contenido";
  }
};

document.getElementById("b1").addEventListener("click", contar);

function contar() {
  var sumar = 0;
  for (let i = 1; i <= 6; i++) {
    if (document.getElementById(`c${i}`).checked == true) {
      sumar++;
    }
  }
  console.log(sumar);
  if (sumar >= 3) {
    alert("Hay 3 o más marcados");
  } else {
    alert("No hay 3 elementos marcados");
  }
}

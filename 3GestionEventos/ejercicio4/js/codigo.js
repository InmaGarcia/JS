document.getElementById("sumar").addEventListener("click", sumar);

function sumar() {
  let valor = Number(document.getElementById("valor").innerText);
  valor++;
  document.getElementById("valor").innerHTML = valor;
  if (document.getElementById("valor").innerText == 3) {
    document.getElementById("texto").innerHTML +=
      '<p id="temp">Alcanzado valor 3</p>';
  } else {
    document.getElementById("temp").remove();
  }
}

document.getElementById("restar").addEventListener("click", restar);

function restar() {
  let valor = Number(document.getElementById("valor").innerText);
  valor--;
  document.getElementById("valor").innerHTML = valor;
  if (document.getElementById("valor").innerText == 3) {
    document.getElementById("texto").innerHTML +=
      '<p id="temp">Alcanzado valor 3</p>';
  } else {
    document.getElementById("temp").remove();
  }
}

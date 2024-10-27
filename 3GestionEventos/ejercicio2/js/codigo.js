document.getElementById("b1").addEventListener("focus", colorText);
document.getElementById("b2").addEventListener("focus", colorText);

function colorText() {
  document.getElementById("b1").style.color = "#FF0000";
  document.getElementById("b2").style.color = "#FF0000";
}

document.getElementById("b1").addEventListener("blur", colorNegro);
document.getElementById("b2").addEventListener("blur", colorNegro);

function colorNegro() {
  document.getElementById("b1").style.color = "#000000";
  document.getElementById("b2").style.color = "#000000";
}

document.getElementById("b3").addEventListener("focus", textAzul);

function textAzul() {
  document.getElementById("b3").style.color = "#0000FF";
}

document.getElementById("b4").addEventListener("mouseover", bordeColor);

function bordeColor() {
  document.getElementById("b4").style.borderColor = "green";
}

document.getElementById("b4").addEventListener("mouseout", bordeFuera);

function bordeFuera() {
  document.getElementById("b4").style.borderColor = "orange";
}

imprimir = () => {
  document.getElementById("resultado").innerHTML += `boton ${i}`;
};

inicio = () => {
  for (let i = 0; i <= 9; i++) {
    document.getElementById(`b` + i).addEventListener("click", () => imprimir);
  }
};
document.addEventListener("DOMContentLoaded", inicio);

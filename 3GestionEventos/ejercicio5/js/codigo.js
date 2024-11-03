imprimir = (i) => {
  document.body.innerHTML += `<p>boton ${i}</p>`;
};

inicio = () => {
  for (let i = 0; i <= 9; i++) {
    document
      .getElementById(`b${i}`)
      .addEventListener("click", () => imprimir(i));
  }
};
document.addEventListener("DOMContentLoaded", inicio);

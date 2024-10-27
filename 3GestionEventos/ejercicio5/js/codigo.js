for (let i = 0; i <= 9; i++) {
  document.getElementById(`${i}`).addEventListener("click", imprimir);

  function imprimir(i) {
    document.body.innerHTML = `<div>${i}</div>`;
  }
}

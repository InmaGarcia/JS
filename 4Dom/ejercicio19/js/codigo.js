var productos = [
  { id: 1, nombre: "galleta", precio: 2.5 },
  { id: 2, nombre: "pan", precio: 0.5 },
  { id: 3, nombre: "chocolate", precio: 1.7 },
  { id: 4, nombre: "café", precio: 2.5 },
];

window.addEventListener("DOMContentLoaded", (e) => {
  var tbody = document.getElementById("cuerpoTabla");
  //creamos el th para los input
  let col = document.createElement("th");
  col.innerHTML = "Marcar";
  document
    .getElementsByTagName("table")[0]
    .firstElementChild.firstElementChild.appendChild(col);
  productos.forEach((objeto) => {
    //Por cada objeto, se crea una fila y se le asigna su id.
    var fila = document.createElement("tr");
    fila.setAttribute("id", objeto.id);

    //luego se crea un td para cada atributo y se le asigna su valor
    var nombre = document.createElement("td");
    nombre.innerHTML = objeto.nombre;
    var precio = document.createElement("td");
    precio.innerHTML = objeto.precio;
    var codigo = document.createElement("td");
    codigo.innerHTML = objeto.precio;

    //Insertamos cada una de las celdas a la fila
    fila.appendChild(nombre);
    fila.appendChild(precio);
    fila.appendChild(codigo);
    //imprimimos cada fila
    tbody.appendChild(fila);

    //Creamos el td para el checkbox
    let tdCheck = document.createElement("td");
    //creamos el checkbox y sus atributos
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "checkbox" + objeto.id);
    check.setAttribute("name", "marcar");
    //añadimos el checkbox a mi columna
    tdCheck.appendChild(check);
    //y la columna del check a la fila
    fila.appendChild(tdCheck);
  });

  document.getElementById("btn1").addEventListener("click", seleccionar);
  document.getElementById("btn2").addEventListener("click", deseleccionar);
  document.getElementById("btn3").addEventListener("click", eliminar);

  // Función para seleccionar todos los checkboxes
  function seleccionar() {
    obtenerCheckboxes().forEach((checkbox) => {
      checkbox.checked = true;
    });
  }

  // Función para deseleccionar todos los checkboxes
  function deseleccionar() {
    obtenerCheckboxes().forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  // Función para eliminar las filas seleccionadas
  function eliminar() {
    obtenerCheckboxes().forEach((checkbox) => {
      if (checkbox.checked) {
        let row = checkbox.parentElement.parentElement; // fila del checkbox
        tbody.removeChild(row);
      }
    });
  }

  // Función para obtener todos los checkboxes en el tbody
  const obtenerCheckboxes = () =>
    Array.from(tbody.getElementsByTagName("input"));
});

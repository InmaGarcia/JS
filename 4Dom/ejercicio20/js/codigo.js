var productos = [
  { id: 1, nombre: "galleta", precio: 2.5, codigo: 1022 },
  { id: 2, nombre: "pan", precio: 0.5, codigo: 1033 },
  { id: 3, nombre: "chocolate", precio: 1.7, codigo: 1044 },
  { id: 4, nombre: "café", precio: 2.5, codigo: 1055 },
];
var $tbody;

// Función para seleccionar todos los checkboxes
seleccionar = () => {
  obtenerCheckboxes().forEach((checkbox) => {
    checkbox.checked = true;
  });
};

// Función para deseleccionar todos los checkboxes
deseleccionar = () => {
  obtenerCheckboxes().forEach((checkbox) => {
    checkbox.checked = false;
  });
};

// Función para eliminar las filas seleccionadas
eliminar = () => {
  obtenerCheckboxes().forEach((checkbox) => {
    if (checkbox.checked) {
      let row = checkbox.parentElement.parentElement; // fila del checkbox
      $tbody.removeChild(row);
    }
  });
};

//Función para añadir filas al array
añadir = () => {
  let nombreN = document.getElementById("nombreN");
  let precioN = document.getElementById("precioN");
  let codigoN = document.getElementById("codigoN");

  let productoN = {
    id: productos.length + 1,
    nombre: nombreN.value,
    precio: precioN.value,
    codigo: codigoN.value,
  };
  productos.push(productoN);

  // Creamos una nueva fila para agregarla al DOM
  const fila = document.createElement("tr");
  fila.setAttribute("id", productoN.id);

  const nombreTd = document.createElement("td");
  nombreTd.textContent = productoN.nombre;
  const precioTd = document.createElement("td");
  precioTd.textContent = productoN.precio;
  const codigoTd = document.createElement("td");
  codigoTd.textContent = productoN.codigo;

  // Insertamos cada celda a la fila
  fila.appendChild(nombreTd);
  fila.appendChild(precioTd);
  fila.appendChild(codigoTd);

  // Creamos y añadimos el checkbox en su celda
  const tdCheck = document.createElement("td");
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "checkbox" + productoN.id);
  check.setAttribute("name", "marcar");
  tdCheck.appendChild(check);
  fila.appendChild(tdCheck);

  // Agregamos la fila al tbody
  $tbody.appendChild(fila);
};

// Función para obtener todos los checkboxes en el tbody
const obtenerCheckboxes = () =>
  Array.from($tbody.getElementsByTagName("input"));

window.addEventListener("DOMContentLoaded", () => {
  $tbody = document.getElementById("cuerpoTabla");
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
    nombre.textContent = objeto.nombre;
    var precio = document.createElement("td");
    precio.textContent = objeto.precio;
    var codigo = document.createElement("td");
    codigo.textContent = objeto.codigo;

    //Insertamos cada una de las celdas a la fila
    fila.appendChild(nombre);
    fila.appendChild(precio);
    fila.appendChild(codigo);
    //imprimimos cada fila
    $tbody.appendChild(fila);

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

  document.getElementById("add").addEventListener("click", añadir);
});

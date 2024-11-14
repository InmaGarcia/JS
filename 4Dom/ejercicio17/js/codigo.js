window.addEventListener("DOMContentLoaded", () => {
  var productos = [
    { id: 1, nombre: "galleta", precio: 2.5 },
    { id: 2, nombre: "pan", precio: 0.5 },
    { id: 3, nombre: "chocolate", precio: 1.7 },
    { id: 4, nombre: "café", precio: 2.5 },
  ];

  productos.forEach((p) => {
    //Por cada objeto, se crea una fila y se le asigna su id.
    var fila = document.createElement("tr");
    fila.setAttribute("id", p.id);
    var tbody = document.getElementById("cuerpoTabla");

    //luego se crea un td para cada atributo y se le asigna su valor
    var nombre = document.createElement("td");
    nombre.innerHTML = p.nombre;
    var precio = document.createElement("td");
    precio.innerHTML = p.precio;
    var codigo = document.createElement("td");
    codigo.innerHTML = p.precio;

    //Insertamos cada una de las celdas a la fila
    fila.appendChild(nombre);
    fila.appendChild(precio);
    fila.appendChild(codigo);
    //imprimimos cada fila
    tbody.appendChild(fila);
  });
});

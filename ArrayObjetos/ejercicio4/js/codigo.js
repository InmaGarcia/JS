let bebida1 = {
  nombre: "cocacola",
  precio: 1.7,
  categoria: "bebida gaseosa",
};

let postres1 = {
  nombre: "chocolate con leche",
  precio: 1.2,
  categoria: "dulces",
};

let verduras1 = {
  nombre: "patata",
  precio: 2.1,
  categoria: "tuberculos",
};

let objetos = [bebida1, postres1, , , verduras1];

/*let newArr = objetos.map((el) => el.nombre.toUpperCase());*/
/*este método te deja el hueco de los undefined*/
let nombre = [];
objetos.forEach((element) => {
  nombre.push(element.nombre.toUpperCase());
});

/*let nombre = [];
for (let i in objetos) {
  nombre.push(objetos[i].nombre.toUpperCase());
}*/

document.body.innerHTML = nombre;

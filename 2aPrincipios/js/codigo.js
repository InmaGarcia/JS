// 1.1
console.log("Bienvenido\n");
// 1.2
console.log("'Comillas simples'\n");
// 1.3
console.log('"Comillas Dobles"');
// 1.4
alert("Inmaculada García");
// 1.5
var nombre = "Inmaculada García";
alert(nombre);
// 2
let resultado = prompt("Escribe tu nombre");
document.write(resultado);
// 3
let edad = confirm("¿Eres mayor de edad?");
console.log(`¿Eres mayor de edad? ${edad}`);
// 4.1
var txt = "Hola Mundo";
console.log(txt.indexOf("Mundo"));
// 4.2
console.log(txt.replace("Mundo", "Universo"));
// 4.3
console.log(txt.toUpperCase());
// 4.4
console.log(txt.toLowerCase());
// 4.5
var nombre = "Inmaculada";
var apellido = "Garcia";
console.log(nombre + " " + apellido);
// 4.6
var asig = "Cliente";
console.log(asig.substring(asig.indexOf("C"), asig.lastIndexOf("i") + 1));
// 4.7
console.log(asig.substring(asig.indexOf("e"), asig.lastIndexOf("e") + 1));


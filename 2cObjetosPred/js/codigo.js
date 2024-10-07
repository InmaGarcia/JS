// // Ej 1

// let hoy = new Date();
// let cumple = new Date(1990,9,16);
// document.write("Hoy es: "+hoy.toLocaleDateString()+"<br>");
// document.write("Mi cumpleaños es: "+cumple.toLocaleDateString()+"<br>");
// document.write(`Estamos en ${hoy.getFullYear()} y nací en el año ${cumple.getFullYear()}<br>`);
// hoy.setFullYear(2023);
// document.write(`Actualizo el año actual a ${hoy.toLocaleDateString()}<br>`);
// document.write(`Hoy estamos a ${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()}`);

// document.write("<br>");

// // Ej 2
// hoy = new Date();
// let fin = new Date(hoy.getFullYear()+1,5,30);
// let diff = fin.getTime() - hoy.getTime();
// let mlsdia= 1000*60*60*24;
// document.write(`Quedan ${Math.floor(diff/mlsdia)} días hasta fin de curso`);

// // Ej 3
// let num1 = prompt("Dime el día de tu cumple");
// let num2 = prompt("Dime el mes de tu cumple");

// // Ej 4
// let hoy = new Date();
// document.write(hoy.toLocaleDateString()+"<br>");
// document.write(hoy.toDateString()+"<br>");
// document.write(hoy.toLocaleString()+"<br>");
// document.write(hoy.toLocaleTimeString()+"<br>");
 
// // Ej 5
// let cumple = prompt("Dime tu fecha de nacimiento");
// let array = cumple.split("/");
// cumple = new Date(array[2],array[1]-1,array[0]);
// let diff = hoy.getTime() - cumple.getTime();
// let mlsanyo= 1000*60*60*24*365;
// document.write(`Tienes ${Math.floor(diff/mlsanyo)} años`);
 
// document.write("<br>");
 
// // Ej 6
// var mensaje="";
// switch(hoy.getDay()){
//     case 0:
//         mensaje= "Domingo";
//         break;
//     case 1:
//         mensaje= "Lunes";
//         break;
//     case 2:
//         mensaje="Martes";
//         break;
//     case 3:
//         mensaje="Miércoles";
//         break;
//     case 4:
//         mensaje="Jueves";
//         break;
//     case 5:
//         mensaje="Viernes";
//         break;
//     case 6:
//         mensaje="Sábado";
//         break;
// }
// document.write("Hoy es "+mensaje);
// document.write("<br>");
 
// // Ej 7
// anyo = hoy.getFullYear();
// document.write(anyo.toString().substring(2));
 
// // Ej 8
// aleatorio= Math.floor(Math.random() * 2);
// switch(aleatorio){
//     case 0:
//         mensaje="Cara";
//         break;
//     case 1:
//         mensaje="Cruz";
//         break;
// }
// alert(mensaje);
// console.log(mensaje);

// // Ej 9
// let max= 10;
// let min = 1;
// let aleatorio= Math.floor(Math.random() * (max-min + 1)) + min;
// let numusu = prompt("Dame un número entre el 1 y el 10");

// if(numusu == aleatorio){
//     alert("Felicidades, adivinaste el número!");
// }
// else{
//     alert(`Lo siento, el número era ${aleatorio}`);
// }

// // Ej 10
// let suma =0;
// document.write("La suma de los número ");
// for(let i=0; i<=10;i++){
//     let aleatorio = Math.floor(Math.random() * 21);
//     document.write(`${aleatorio} `);
//     suma+= aleatorio;
// }
// document.write(`es: ${suma}`);

// // Ej 11
// var name = prompt("Dime tu nombre");
// var hora = Number(hoy.getHours());
 
// if(hora>=7 && hora<12){
//     alert(`Buenos días ${name}`)
// }
// else if(hora>=12 && hora<20){
//     alert(`Buenas tardes ${name}`)
// }
// else {
//     alert(`Buenas noches ${name}`)
// }

// //Ej 12
// let dia = Math.floor(Math.random() * 31);
// let mes = Math.floor(Math.random() * 13);
// let anyo = Math.floor(Math.random() * 2025);

// document.write(`El año sería: ${dia}/${mes}/${anyo}`);
// alert(`El año sería: ${dia}/${mes}/${anyo}`);

// //Ej 15
// var result = confirm("¿Aceptas abrir otra página?");

// if(result){
//     let nuevaVentana = window.open("","segundaPag","toolbar=no, location=no, menubar=no, width=200, height=80, top=500, left=500, resizable=yes, scrollbars=yes ");
//     if (nuevaVentana){
//         nuevaVentana.document.write("<h1>Entorno Cliente</h1>")
//     }
//     else {
//         alert("No me abre la nueva ventana");
//     }
    
// }






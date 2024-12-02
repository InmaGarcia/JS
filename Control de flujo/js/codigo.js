// // Ej 10

// for(let i=5;i>=1;i--){
//     for(let j=i;j>=1;j--){
//         document.write(j);
//     }
//     document.write("<br>");    
// }

// document.write("<br>");

// // Ej 11
// var nombre = prompt("Dime tu nombre");
// var apellido = prompt("Dime tus apellidos");
// var sal = prompt("Dime tu sueldo");
// var edad = prompt("Dime tu edad");

// if(sal >= 1000 && sal <=2000){
//     if(edad>45){
//         sal= sal *1.03;
//     }
//     else{
//         sal= sal*1.1;
//     }
// }
// else if(sal < 1000){
//     if(edad<30){
//         sal = 1100;
//     }
//     else if(edad> 45){
//         sal = sal*1.15;
//     }
//     else{
//         sal= sal*1.03
//     }
// }
// document.write(`El trabajador ${nombre} ${apellido}, con edad ${edad} tiene un sueldo de ${sal}`);
// document.write("<br>");

// // Ej 12
// var txt = prompt("Dime un texto"); 
// var txtnuevo= "";
// for(let i = txt.length -1; i>=0; i--){
//     txtnuevo+= txt[i];
// }
// document.write(txtnuevo);
// document.write("<br>");

// // Ej 13
// var num1 = prompt("Dime un número");
// var num2 = prompt("Dime un segundo número");
// var num3 = prompt("Dime un tercer número");
// var promedio =(num1+num2+num3)/3;
// document.write(promedio);
// document.write("\t");
// if(promedio>=7){
//     document.write("Promocionado");
// }
// document.write("<br>");
// // Ej 14

// var lado = prompt("Dime cuanto mide el lado del cuadrado:");
// var perimetro = lado * 4;
// document.write(`El perímetro del cuadrado es ${perimetro}`)
// document.write("<br>");

// // Ej 15
// var base = prompt("Dime la base del rectangulo");
// var alt = prompt("Dime la altura del rectangulo");

// for(let i =1; i<=alt; i++){
//     for(let j =1; j<=base; j++){
//         if(i==1 || i==alt){
//             document.write("*");
//         }
//         else{
//             if(j==1||j==base){
//                 document.write("*");  
//             }
//             else{
//                 document.write(" ");
//             }
//         }        
//     }
//     document.write("<br>"); 
// }
// document.write("<br>");

// Ej 16

var rombo = prompt("Dime cuanto mide el rombo");
var cont = 1;
for(let i = 1; i<=rombo; i++){
    for(let j = rombo; j<=rombo;j--){
        if(cont<=i){
         document.write("*");   
        }
        else{
            document.write(" "); 
        }
        document.write("\t");
        cont++; 
    }
    document.write("<br>");
    cont=1; 
}
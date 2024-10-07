// // Ej 1
// let nota = prompt("Escribe la nota: ");
// if(nota>=5){
//     document.write(`La nota ${nota} es mayor o igual a 5.`)
// }
// if(nota>=5){
//     document.write(`Aprobado`);
// }
// else {
//     document.write(`Suspendido`);
// }

// document.write("<br>");
// // Ej 2
// do {
//     var num = prompt("Dame un número entre 0 y 23: ");
// }
// while (num<0 || num>23);
// if(num>=6 && num<=11){
//     document.write("Buenos días");
// }
// else if(num>=12 && num<=20){
//     document.write("Buenas tardes");
// }
// else {
//     document.write("Buenas noches");
// }

// document.write("<br>");
// // Ej 3
// let topping = prompt("¿Qué topping quieres?");
// let helado = 1.9;

// if(topping.toUpperCase() == "OREO"){
//     document.write(`El topping de ${topping} cuesta 1€`);
//     document.write("\tEl precio del helado es "+ helado + 1 + " €");
// }
// else if(topping.toUpperCase() == "KITKAT"){
//     document.write(`El topping de ${topping} cuesta 1,5€`);
//     document.write("\tEl precio del helado es "+ helado + 1.5 + " €" );
// }
// else if(topping.toUpperCase() == "BROWNIE"){
//     document.write(`El topping de ${topping} cuesta 0,75€`);
//     document.write("\tEl precio del helado es "+ helado + 0.75 + " €" );
// }
// else if(topping.toUpperCase() == "LACASITOS"){
//     document.write(`El topping de ${topping} cuesta 0,95€`);
//     document.write("\tEl precio del helado es "+ helado + 0.95 + " €" );
// }
// else{
//     document.write("No tenemos este topping, lo sentimos. El helado sin topping cuesta 1.90€ ");
// }

// document.write("<br>");
// // Ej 4
// let motor = prompt("Dime un tipo de motor");
// if(motor == 0){
//     document.write("No hay establecido un valor definido para el tipo de bomba");
// }
// else if(motor == 1){
//     document.write("La bomba es una bomba de agua");
// }
// else if(motor == 2){
//     document.write("La bomba es una bomba de gasolina");
// }
// else if(motor == 3){
//     document.write("La bomba es una bomba de hormigón");
// }
// else if(motor == 4){
//     document.write("La bomba es una bomba de pasta alimenticia");
// }
// else{
//     document.write("No existe un valor valido para tipo de bomba");
// }

// document.write("<br>");

// // Ej 5
// let par=0;
// while(par<=100){
//     document.write(par+"\t");
//     par += 2;
// }
// document.write("<br>");

// // Ej 6
// let i =100;
// while(i <=100 && i>=0){
//     document.write(i+"\t");
//     i--;
// }
// document.write("<br>");

// // Ej 7
// do{
// var numero = Number(prompt("Dame un número"));
// }while (isNaN(numero));

// let contador = 0;
// if(numero%2 == 0){
//     numero++;
// }
// else {
//     numero+= 2;
// }
// // alert("numero:" + numero); lo uso como comprobación mia interna
// while(contador <= 50){
//     document.write(numero+"\t");
//     numero +=2;
//     contador ++;
// }

// // Ej 8
// var valor = prompt("Introduce un valor");
// if(isNaN(valor)){
//     alert("No es un número");
// }
// else {
//     alert("Es un número");
// }
// document.write("<br>");

// // Ej 9
// var error = false;
// do {
//     var positivo = prompt("Dame un número positivo");

//     if(isNaN(positivo) || positivo <0)
//         error = true;

// }while(error);

// for( i = 1; i<= positivo; i++){
    
//     for (j = 1; j <= i; j++) {
//    document.write("* ");
//     }
//     document.write("<br>");
//    }
   
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
// if(promedio>=7){
//     document.write("Promocionado");
// }
// document.write("<br>");

// // Ej 14
 
// var lado = prompt("Dime cuanto mide el lado del cuadrado:");
// var perimetro = lado * 4;
// document.write(`El perímetro del cuadrado es ${perimetro}`)
// document.write("<br>");
 
// Ej 15
var base = prompt("Dime la base del rectangulo");
var alt = prompt("Dime la altura del rectangulo");
 
for(let i =1; i<=alt; i++){
    for(let j =1; j<=base; j++){
        if(i==1 || i==alt||j==1||j==base){
            document.write("*");
        }
        else{          
                document.write(" ");  
        }        
    }
    document.write("<br>");
}
document.write("<br>");

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


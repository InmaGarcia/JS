inicio = () =>{
    document.getElementById("validar").addEventListener("click", validar);
    
}

validar = () =>{
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellidos").value;

    alert(nombre, " - ", apellido);

    if(nombre.charAt(1) != "a"||"e"||"i"||"o"||"u"){
        document.getElementById("error1").innerHTML += "<p>El nombre no empieza por vocal</p>";
        document.getElementById("error1").innerHTML
    }
    if(apellido.split(" ").length < 2){
        document.getElementById("error2").innerHTML += "<p>Tienes que tener mínimo dos apellidos</p>";
    }
}

document.addEventListener("DOMContentLoaded", inicio);
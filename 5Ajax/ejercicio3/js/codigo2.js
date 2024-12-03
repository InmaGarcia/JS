window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("b2").addEventListener("click", (e) => {
    e.preventDefault();
    conexion();
  });
});

conexion = (e) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://yesno.wtf/api");
  xhr.send();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("éxito");

      let json = JSON.parse(xhr.responseText);
      console.log(json);
      respuesta(json);
    } else {
      console.log("error");
      let message = xhr.statusText || "Ocurrió un error";
      xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });
};

respuesta = (json) => {
  $respuesta = document.getElementById("respuesta");

  $respuesta.innerHTML = `<img src="${json.image}">`;
};

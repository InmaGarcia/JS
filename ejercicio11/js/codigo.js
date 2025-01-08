var $key;
window.addEventListener("DOMContentLoaded", () => {
  var $key = prompt("Escribe la API Key");

  async function fetchData() {
    var fecha = new Date();
    var url = `https://api.nasa.gov/planetary/apod?api_key=${$key}&date=${fecha.getFullYear()}-${
      fecha.getMonth() + 1
    }-${fecha.getDate()}`;
    try {
      const response = await fetch(url);
      console.log(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Espera y procesa el JSON
      console.log(data);
      mostrarImagen(data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error); // Manejo de errores
    }
  }

  fetchData();

  mostrarImagen = (data) => {
    $figure = document.getElementById("imagen");
    $img = document.createElement("img");
    $img.src = data.hdurl;

    $figure.appendChild($img);
  };
});

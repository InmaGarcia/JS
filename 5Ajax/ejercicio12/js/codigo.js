window.addEventListener("DOMContentLoaded", () => {
  fetch(`https://randomuser.me/api?results=1000`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
      }
      return response.json();
    })
    .then((data) => {
      const fotos = data.results.map((el) => el.picture.large);
      iniciarGaleria(fotos);
    })
    .catch((error) => {
      console.error(error);
    });
});

iniciarGaleria = (fotos) => {
  const maxMostradas = 50;
  const tiempoIntervalo = 200; // ms
  const cambios = 100;

  let cont = 0;
  var content = document.getElementById("contenedor");

  // Pintar las caras
  pintarCaras = () => {
    // Quitamos las caras de antes
    content.innerHTML = "";

    // Mezclar las caras
    barajar(fotos);

    // Mostrar las primeras 50 fotos
    const mostradas = fotos.slice(0, maxMostradas);
    mostradas.forEach((el) => {
      const img = document.createElement("img");
      img.src = el;
      content.appendChild(img);
    });

    //   si hemos hecho 100 cambios paramos
    cont++;
    if (cont === cambios) {
      clearInterval(interval);
    }
  };

  pintarCaras();
  const interval = setInterval(pintarCaras, tiempoIntervalo);
};

// barajar el array de fotos
barajar = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

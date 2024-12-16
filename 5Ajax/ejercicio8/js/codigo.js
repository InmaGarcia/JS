document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`https://randomuser.me/api/?results=10`)
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Error al obtener el usuario"));
        }
        return response.json();
      })
      .then((json) => mostrarUsuario(json));
  });
});

mostrarUsuario = (json) => {
  var $div = document.getElementById("container");
  $div.innerHTML = "";
  const usuario = json.results[0];

  $img = document.createElement("img");
  $img.setAttribute("src", usuario.picture.medium);
  $img.setAttribute("style", "border-radius:50%;width:70%;");
  $div.appendChild($img);
  document
    .getElementById("container")
    .setAttribute(
      "style",
      "width:33%;display:flex;flex-direction:column;background-color:grey;padding:5%;"
    );

  $pNombre = document.createElement("p");
  $pNombre.innerHTML = `Nombre: ${usuario.name.first} ${usuario.name.last}`;

  $pCorreo = document.createElement("p");
  $pCorreo.innerHTML = `Correo: ${usuario.email}`;

  $pCiudad = document.createElement("p");
  $pCiudad.innerHTML = `Ciudad: ${usuario.location.city}`;

  $div.appendChild($pNombre);
  $div.appendChild($pCorreo);
  $div.appendChild($pCiudad);
};

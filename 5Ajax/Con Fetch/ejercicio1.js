function conexion () {
  const userId = 5;
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        reject(new Error("Error al obtener el usuario"));
      }
      return response.json();
    })
    .then((usuario) => mostrarUsuario(usuario));
}

mostrarUsuario = (usuario) => {
  document.body.innerHTML += `<h1>Nombre:${el.name}</h1><p>Usuario:${el.username}</p><p>Email:${el.email}</p>`;
  document.body.innerHTML += `<p>Direccion: ${el.address.street}, ${el.address.suite}, ${el.address.city}</p>`;
};

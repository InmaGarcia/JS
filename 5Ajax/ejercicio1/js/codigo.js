const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState !== 4) return;
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("éxito");

    let json = JSON.parse(xhr.responseText);
    console.log(json);
    json.forEach((el) => {
      if (el.id === 5) {
        document.body.innerHTML += `<h1>Nombre:${el.name}</h1><p>Usuario:${el.username}</p><p>Email:${el.email}</p>`;
        document.body.innerHTML += `<p>Direccion: ${el.address.street}, ${el.address.suite}, ${el.address.city}</p>`;
        return;
      }
    });
  } else {
    console.log("error");
    let message = xhr.statusText || "Ocurrió un error";
    xhr.innerHTML = `Error ${xhr.status}: ${message}`;
  }
});

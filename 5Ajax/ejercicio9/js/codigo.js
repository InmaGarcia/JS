var suma = 1;

window.addEventListener("DOMContentLoaded", () => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5`)
    .then((response) => {
      if (!response.ok) {
        reject(new Error("Error al obtener el usuario"));
      }
      return response.json();
    })
    .then((posts) => mostrarPosts(posts));

  document.getElementById("load-more-btn").addEventListener("click", () => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=" + suma + "&_limit=5"
    )
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Error al obtener el usuario"));
        }
        return response.json();
      })
      .then((nuevos) => mostrarPosts(nuevos));
  });
});

mostrarPosts = (posts) => {
  posts.forEach((el) => {
    $div = document.createElement("div");
    $div.innerHTML = `<p><b>>>${el.title}</b></p><p>${el.body}</p>`;

    document.getElementById("posts-list").appendChild($div);
    suma++;
  });
};

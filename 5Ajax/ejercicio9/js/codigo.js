var num = 1;
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
      "https://jsonplaceholder.typicode.com/posts?_page=" + num + "&_limit=5"
    )
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Error al obtener el usuario"));
        }
        return response.json();
      })
      .then((nuevos) => mostrarPosts(nuevos));
  });
  document.getElementById("search-btn").addEventListener("click", buscarPost);
});

mostrarPosts = (posts) => {
  posts.forEach((el) => {
    $div = document.createElement("div");
    $div.innerHTML = `<p><b>${el.title}</b></p><p>${el.body}</p>`;
    $div.style = ("style", "border: 1px solid grey;margin-bottom: 10px;");
    $div.id = el.id;
    document.getElementById("posts-list").appendChild($div);
    num++;
    $div.addEventListener("click", mostrarComentario);
  });
};

mostrarComentario = (e) => {
  let seleccionado = e.target.parentNode;
  fetch(
    `https://jsonplaceholder.typicode.com/posts/${seleccionado.id}/comments`
  )
    .then((response) => {
      if (!response.ok) {
        reject(new Error("Error al obtener el usuario"));
      }
      return response.json();
    })
    .then((comentarios) => {
      $h3 = document.createElement("h3");
      $h3.innerHTML = `Comentarios ${seleccionado.id}`;
      document.getElementById("post-details").appendChild($h3);
      $div = document.createElement("div");
      $div.style = ("style", "border: 1px solid grey;margin-bottom: 10px;");
      document.getElementById("post-details").appendChild($div);

      comentarios.forEach((e) => {
        $div.innerHTML += `<p><b>${e.name}</b>: ${e.body}</p>`;
      });
    });
};

const buscarPost = async () => {
  const postId = document.getElementById("search-input").value.trim();
  if (!postId) {
    alert("Por favor, introduce un ID de post para buscar.");
    return;
  } else {
    let $buscado = document.getElementById(postId);
    console.log($buscado);
    $h3 = document.createElement("h3");
    $h3.innerHTML = `Post ${postId}`;
    document.getElementById("post-details").appendChild($h3);
    $postBuscado = document.createElement("div");
    $postBuscado.style =
      ("style", "border: 1px solid grey;margin-bottom: 10px;");
    $postBuscado.innerHTML = `${$buscado.children[0].children[0]} ${$buscado.children[1]}`;
    document.getElementById("post-details").appendChild($postBuscado);
  }
};

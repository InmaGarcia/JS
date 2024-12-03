window.addEventListener("DOMContentLoaded", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://opentdb.com/api.php?amount=5&type=multiple");
  xhr.send();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("éxito");

      let json = JSON.parse(xhr.responseText);
      console.log(json);
      lista(json.results);
    } else {
      console.log("error");
      let message = xhr.statusText || "Ocurrió un error";
      xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });
});

lista = (results) => {
  var $ul = document.getElementById("lista");
  results.forEach((el) => {
    $li = document.createElement("li");
    $li.innerHTML = `${el.category} - ${el.question} - Respuesta Correcta: <b>${el.correct_answer}</b>`;
    $ul.appendChild($li);
    $li.setAttribute(
      "style",
      "backgroundColor: #e9e9e9; padding: 10px; margin: 5px 0; border: 1px solid #ccc;borderRadius: 4px; fontFamily: Arial, sans-serif; color: #333;"
    );
  });
};

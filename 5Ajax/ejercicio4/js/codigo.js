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
  var ul = document.getElementById("lista");
  results.forEach((el) => {
    li = document.createElement("li");
    li.innerHTML = `${el.category} - ${el.question} - Respuesta Correcta: <b>${el.correct_answer}</b>`;

    li.style.backgroundColor = "#e9e9e9";
    li.style.padding = "10px";
    li.style.margin = "5px 0";
    li.style.border = "1px solid #ccc";
    li.style.borderRadius = "4px";
    li.style.fontFamily = "Arial, sans-serif";
    li.style.color = "#333";

    li.addEventListener("mouseover", function () {
      li.style.backgroundColor = "#d1d1d1";
    });

    li.addEventListener("mouseout", function () {
      li.style.backgroundColor = "#e9e9e9";
    });

    ul.appendChild(li);
  });
};

inicio = () => {
  document.getElementById("b1").addEventListener("click", (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("éxito");

        let json = JSON.parse(xhr.responseText);
        console.log(json);

        $div = document.getElementById("tabla-container");
        $tabla = document.createElement("table");
        $div.appendChild($tabla);

        $thead = document.createElement("thead");
        $tr = document.createElement("tr");

        $th1 = document.createElement("th");
        $th1.innerHTML = "Title";
        $th2 = document.createElement("th");
        $th2.innerHTML = "Body";

        $tr.appendChild($th1);
        $tr.appendChild($th2);
        $thead.appendChild($tr);
        $tabla.appendChild($thead);

        $tbody = document.createElement("tbody");
        $tabla.appendChild($tbody);
        $th1.setAttribute(
          "style",
          "border:1px solid black;background-color:purple"
        );
        $th2.setAttribute(
          "style",
          "border:1px solid black;background-color:purple"
        );
        json.forEach((el) => {
          $tbtr = document.createElement("tr");

          $tdT = document.createElement("td");
          $tdT.innerHTML = el.title;
          $tdB = document.createElement("td");
          $tdB.innerHTML = el.body;

          $tbtr.appendChild($tdT);
          $tbtr.appendChild($tdB);
          $tdT.setAttribute(
            "style",
            "border:1px solid black;background-color:pink"
          );
          $tdB.setAttribute(
            "style",
            "border:1px solid black;background-color:pink"
          );
          $tbody.appendChild($tbtr);
          $tbody.setAttribute(
            "style",
            "border:1px solid black;background-color:pink"
          );
        });
      } else {
        console.log("error");
        let message = xhr.statusText || "Ocurrió un error";
        xhr.innerHTML = `Error ${xhr.status}: ${message}`;
      }
    });
  });
};

window.addEventListener("DOMContentLoaded", inicio);

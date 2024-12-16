window.addEventListener("DOMContentLoaded", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../ejercicio5/js/data.json");
  xhr.send();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("éxito");

      let json = JSON.parse(xhr.responseText);
      console.log(json);
      tabla(json.students);
    } else {
      console.log("error");
      let message = xhr.statusText || "Ocurrió un error";
      xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });
});

tabla = (students) => {
  $tbody = document.getElementById("studentTable").children[1];
  var suma = 0;
  students.forEach((el) => {
    $fila = document.createElement("tr");
    $colId = document.createElement("td");
    $colId.innerHTML = el.id;
    $colName = document.createElement("td");
    $colName.innerHTML = el.nombre;
    $colGrades = document.createElement("td");
    $colGrades.innerHTML = el.notas.join(", ");
    $colAverage = document.createElement("td");
    $colAverage.innerHTML = media(el.notas);

    $fila.appendChild($colId);
    $fila.appendChild($colName);
    $fila.appendChild($colGrades);
    $fila.appendChild($colAverage);
    $tbody.appendChild($fila);
  });
};

media = (notas) => {
  suma = 0;
  count = 0;
  notas.forEach((el) => {
    suma += el;
    count++;
  });
  return suma / count;
};

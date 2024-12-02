window.addEventListener("DOMContentLoaded", () => {
  $boton1 = document.getElementById("btn");
  $boton1.addEventListener("click", formulario);
});

const formulario = (e) => {
  e.preventDefault();

  let $form = document.createElement("form");
  document.getElementById("ContentFormulario").appendChild($form);
  $form.style.width = "300px";
  $form.setAttribute("action", "https://www.google.es/");
  $form.setAttribute("method", "GET");

  // Crear los campos de entrada con el placeholder y estilos solicitados
  const placeholders = ["Nombres", "Apellidos", "Email", "Asunto", "Mensaje"];

  placeholders.forEach((placeholder, index) => {
    const $input = document.createElement("input");
    $input.setAttribute("type", "text");
    $input.setAttribute("placeholder", placeholder);
    $input.style.width = "100%";
    $input.style.margin = "10px 0px";
    $input.style.padding = "5px";

    if (placeholder === "Mensaje") {
      $input.style.height = "200px";
    }

    $form.appendChild($input);
  });

  let $boton2 = document.createElement("input");
  $boton2.setAttribute("type", "button");
  $boton2.setAttribute("value", "Enviar");
  $boton2.setAttribute("class", "boton");
  $form.appendChild($boton2);
  $boton2.addEventListener("click", () => alert("Estas enviando los datos"));
};

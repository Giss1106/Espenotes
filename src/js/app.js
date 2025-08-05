document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#modal-post-section form");
  const btnPostSubmit = document.getElementById("btn-post-submit");
  const btnPostCancel = document.getElementById("btn-post-cancel");
  const modal = document.getElementById("modal-post-section");

  // Mostrar modal
  document.getElementById("btn-upload-post").addEventListener("click", () => {
    modal.style.display = "block";
    modal.style.transform = "translateY(0)";
  });

  // Cancelar y ocultar modal
  btnPostCancel.addEventListener("click", () => {
    modal.style.display = "none";
    modal.style.transform = "translateY(100%)";
  });

  // Manejar envío del post
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que recargue la página

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();

    if (title === "" || description === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Aquí podrías mostrar el post en la pantalla, guardarlo, etc.
    console.log("Nuevo post:", { title, description });

    // Limpiar campos
    form.reset();

    // Ocultar modal
    modal.style.display = "none";
    modal.style.transform = "translateY(100%)";
  });
});

var img = document.getElementById("imgScatman");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var nameText = document.getElementById("name");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  nameText.innerHTML = this.getAttribute("data-name");
}

var img = document.getElementById("imgScatman");
var modal = document.getElementById("myModal");

// Obtener la imagen en el modal y el texto descriptivo
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Establecer la imagen y el texto descriptivo en el modal
modalImg.src = img.src;
captionText.innerHTML = img.alt;

// Agregar un evento de click en la imagen para mostrar el modal
img.onclick = function() {
  modal.style.display = "block";
}

// Agregar un evento de click en el botón de cerrar para ocultar el modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// Agregar un evento de click fuera del modal para ocultarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Agregar un evento de hover en la imagen para agrandarla centrada en la pantalla
img.addEventListener("mouseover", function() {
  modalImg.style.width = "80%";
  modalImg.style.height = "auto";
  modalImg.style.display = "block";
  modalImg.style.margin = "auto";
});

// Agregar un evento de salir del hover en la imagen para volver a su tamaño original
img.addEventListener("mouseout", function() {
  modalImg.style.width = "50%";
  modalImg.style.height = "auto";
  modalImg.style.display = "block";
  modalImg.style.margin = "auto";
});
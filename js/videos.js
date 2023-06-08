var slideIndex = 0;
var slides = document.getElementsByClassName("showSlider");

slidesDisplay(slideIndex);
function nextSlide() {
  const long = slides.length;
  if (slideIndex < long - 3) {
    slidesDisplay((slideIndex += 1));
  }
}
function previousSlide() {
  const long = slides.length;
  if (slideIndex > 0) {
    slidesDisplay((slideIndex -= 1));
  }
}
function currentSlide(n) {
  slidesDisplay(n);
}
function slidesDisplay(index) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "inline-block";
  slides[index + 1].style.display = "inline-block";
  slides[index + 2].style.display = "inline-block";
}

let foto = document.getElementById("slider_img_gemelas");
foto.addEventListener("click", mostrarVideoGemelas);
function mostrarVideoGemelas() {
  const iframe = document.getElementById("video_content__iframe");
  iframe.setAttribute("src", "https://www.youtube.com/embed/5gMkGbyEnag");
  
  const textGemelas = "Lisa y Louise Burns tenían diez años cuando "+
  "rodaron una de las secuencias más icónicas del cine de terror en "+ 
  "El resplandor(1980). En la película de culto de Stanley Kubrick "+ 
  "encarnaban a las gemelas Grady, que aparecían por sorpresa al fondo "+
  "de un pasillo del hotel Overlook por el que montaba en triciclo Danny "+ 
  "Torrance (Danny Lloyd), el hijo pequeño del inquietante personaje que "+
  "interpretaba Jack Nicholson. Con sus manos unidas y ataviadas con unos "+
  "vestidos azul celeste miraban con rostro siniestro y fijo al niño.";

  const videoTextElement = document.getElementById("text_container__p");
  videoTextElement.innerText = textGemelas;
  const element = document.getElementById("video_content");
  element.style.display = "flex";
  element.style.visibility = "visible";
}

let fotoJack = document.getElementById("slider_img_jack");
fotoJack.addEventListener("click", mostrarVideoJack);
function mostrarVideoJack() {
  const iframe = document.getElementById("video_content__iframe");
  iframe.setAttribute("src", "https://www.youtube.com/embed/WDpipB4yehk");
  
  const textJack = "De Stanley Kubrick El resplandor es considerada por "+
  "muchos como una de las mejores películas jamás realizadas, y una que "+
  "hasta el día de hoy sigue siendo objeto de muchos análisis y discusiones. "+
  "Kubrick deliberadamente dejó muchas cosas sin explicar, incluidos muchos "+
  "detalles del tercer acto; sin embargo, sí explicó por qué Jack Torrance "+
  "aparece en la foto al final. Por supuesto, una explicación del propio "+
  "cineasta no ha sido suficiente para muchos espectadores que desde entonces "+
  "han creado sus propias interpretaciones (algunas buenas, otras no tanto). "+
  "Lo cierto es que, casi cuatro décadas después, aún queda mucho por decir sobre El resplandor.";
  
  const videoTextElement = document.getElementById("text_container__p");
  videoTextElement.innerText = textJack;
  const element = document.getElementById("video_content");
  element.style.display = "flex";
  element.style.visibility = "visible";
}

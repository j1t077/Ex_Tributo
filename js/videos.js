var slideIndex = 0;
var slides = document.getElementsByClassName("showSlider");

slidesDisplay(slideIndex);
function nextSlide() {
    const long = slides.length;
    if(slideIndex < long -2){
        slidesDisplay((slideIndex += 1));   
    }    
       
}
function previousSlide(){
    const long = slides.length; 
    if(slideIndex>0){
        slidesDisplay((slideIndex -= 1)); 
    }   
    
}
function currentSlide(n) {
  slidesDisplay((n));
}
function slidesDisplay(index) {
   
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "inline-block";
  slides[index+1].style.display = "inline-block";
  slides[index + 2].style.display = "inline-block";
}

let foto = document.getElementById("slider_img_gemelas");
foto.addEventListener("click", mostrarVideo);
function mostrarVideo(){
  alert("mostrar video");
}

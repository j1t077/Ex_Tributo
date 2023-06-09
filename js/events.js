import { nextSlide, previousSlide } from "./videos.js";
const leftButton = document.getElementById("left_button");
leftButton.addEventListener("click", previousSlide());
const rightButton = document.getElementById("right_button");
leftButton.addEventListener("click", nextSlide());

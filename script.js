let totalSlides = document.querySelectorAll(".slider-item").length;

document.querySelector(".slider-container").style.width = `calc(100vw*${totalSlides})`;
document.querySelector(".slider-buttons").style.height = ` ${document.querySelector('.slider').clientHeight}px`;



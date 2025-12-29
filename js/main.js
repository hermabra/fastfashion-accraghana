let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
  const slideImages = [
    "images/Feb%202000.jpg",
    "images/June%202001.jpg",
    "images/May%202002.jpg",
    "images/Jan%202007.jpg",
    "images/Jan%202008.jpg",
    "images/Dec%202008.jpg",
    "images/May%202009.jpg",
    "images/Jan%202010.jpg",
    "images/Dec%202012.jpg",
    "images/Jan%202013.jpg",
    "images/Jan%202013%20pt%202.jpg",
    "images/Apr%202013.jpg",
    "images/Jan%202014.jpg",
    "images/Oct%202015.jpg",
    "images/Mar%202017.jpg",
    "images/Oct%202018.jpg",
    "images/Dec%202018.jpg",
    "images/Feb%202020.jpg",
    "images/Apr%202021.jpg",
    "images/Oct%202022.jpg",
    "images/Dec%202022.jpg",
    "images/June%202023.jpg",
    "images/Jan%202024.jpg",
    "images/Mar%202025.jpg"
  ];

  const container = document.querySelector(".slideshow-container");
  if (!container) return;

  // Insert images
  slideImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "slides";
    container.insertBefore(img, container.querySelector(".prev"));
  });

  // Show slides automatically
  function showSlides() {
    const slides = document.getElementsByClassName("slides");
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 1500);
  }

  // Manual navigation
  window.plusSlides = function(n) {
    const slides = document.getElementsByClassName("slides");
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex += n;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;

    slides[slideIndex - 1].style.display = "block";
  }

  showSlides();
});


let slideIndex = 1;
showSlides(slideIndex);
let slideInterval;
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
  resetAutoSlide();
}
startAutoSlide(); // Start automatic slideshow immediately

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to start the automatic slideshow
function startAutoSlide() {
  // Clear any existing interval first to avoid multiple intervals
  clearInterval(slideInterval);
  // Set up a new interval that advances the slide every 5 seconds
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000);
}
// Function to reset the automatic slideshow timer
function resetAutoSlide() {
  // This function clears the existing interval and starts a new one
  // It's called whenever a user manually changes slides
  clearInterval(slideInterval);
  startAutoSlide();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.id == "next") {
      plusSlides(1);
    }
    if (button.id == "prev") {
      plusSlides(-1);
    }
    if (button.getAttribute("slide-index")) {
      console.log(button.getAttribute("slide-index"));
      currentSlide(Number(button.getAttribute("slide-index")));
    }
  });
});

const slideshowContainer = document.querySelector(".slideshow-container");
if (slideshowContainer) {
  slideshowContainer.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  slideshowContainer.addEventListener("mouseleave", () => {
    startAutoSlide();
  });
}
export { showSlides };

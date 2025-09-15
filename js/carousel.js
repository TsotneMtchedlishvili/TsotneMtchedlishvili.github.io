// ---- carousel.js ----

// DOM refs
const slidesContainer = document.querySelector('.carousel_List');
const allSlides = Array.from(document.querySelectorAll('.carousel_Item'));
const slides = Array.from(slidesContainer.children);
const prevBtn = document.querySelector('.carousel_Button--left');
const nextBtn = document.querySelector('.carousel_Button--right');
const indicators = Array.from(document.querySelectorAll('.carousel_Indicator'));

let currentIndex = 0;
const slideCount = slides.length;
let currentSlideImage = allSlides[currentIndex].firstElementChild;

// Move slides + update trackers
function updateCarousel() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((dot, i) => {
    dot.classList.toggle('active_Slide', i === currentIndex);
  });
  
}

// Navigation helpers
function goTo(offset) {
  currentIndex = (currentIndex + offset + slideCount) % slideCount;
  updateCarousel();
  currentSlideImage = allSlides[currentIndex].firstElementChild;
  analyzeLogoBackground(currentSlideImage, document.querySelector(".header_Logo"))
}

// Event wiring
nextBtn.addEventListener('click', () => goTo(1));
prevBtn.addEventListener('click', () => goTo(-1));
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goTo(1);
  if (e.key === 'ArrowLeft')  goTo(-1);
});

// Indicator click jumping
indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
    currentSlideImage = allSlides[currentIndex].firstElementChild;
    analyzeLogoBackground(currentSlideImage, document.querySelector(".header_Logo"))

  });
});

// Resize safety
window.addEventListener('resize', updateCarousel);

// Kickoff
updateCarousel();

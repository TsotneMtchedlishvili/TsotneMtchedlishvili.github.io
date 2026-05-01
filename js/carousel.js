// ---- carousel.js ----

// DOM refs
const slidesContainer = document.querySelector('.carousel_List');
const allSlides = Array.from(document.querySelectorAll('.carousel_Item'));
const slides = Array.from(slidesContainer.children);
const prevBtn = document.querySelector('.carousel_Button--left');
const nextBtn = document.querySelector('.carousel_Button--right');
const indicators = Array.from(document.querySelectorAll('.carousel_Indicator'));
const liveRegion = document.querySelector('.sr-only');
const carousel = document.querySelector('.carousel');

let currentIndex = 0;
const slideCount = slides.length;
let currentSlideImage = allSlides[currentIndex].firstElementChild;

// Move slides + update trackers
function updateCarousel() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((dot, i) => {
    const isActive = i === currentIndex;
    dot.classList.toggle('active_Slide', isActive);
    dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
  
}

const announceSlide = () => {
  liveRegion.textContent = '';
  setTimeout(() => {
    liveRegion.textContent = `Slide ${currentIndex + 1} of ${slideCount}`;
  }, 10);
};

const accessibilityAdjustment = () => {

  allSlides.forEach((slide, i) => {
    const isHidden = i !== currentIndex;
    slide.setAttribute('aria-hidden', isHidden ? 'true' : 'false');
    slide.setAttribute('tabindex', isHidden ? '-1' : '0');
  });
}

// Navigation helpers
function goTo(offset) {
  currentIndex = (currentIndex + offset + slideCount) % slideCount;
  updateCarousel();
  accessibilityAdjustment();
  currentSlideImage = allSlides[currentIndex].firstElementChild;
  analyzeLogoBackground(currentSlideImage, document.querySelector(".header_Logo"));
  announceSlide();
}

// Event wiring
nextBtn.addEventListener('click', () => goTo(1));
prevBtn.addEventListener('click', () => goTo(-1));

// carousel.addEventListener('keydown', e => {
//   if (e.key === 'ArrowRight') goTo(1);
//   if (e.key === 'ArrowLeft')  goTo(-1); 
// });

// Indicator click jumping
indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
    accessibilityAdjustment();
    announceSlide();
    currentSlideImage = allSlides[currentIndex].firstElementChild;
    analyzeLogoBackground(currentSlideImage, document.querySelector(".header_Logo"))

  });

  dot.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      indicators[(i + 1) % indicators.length].focus();
    }
    if (e.key === 'ArrowLeft') {
      indicators[(i - 1 + indicators.length) % indicators.length].focus();
    }
    if (e.key === 'Enter' || e.key === ' ') {
      currentIndex = i;
      updateCarousel();
      accessibilityAdjustment();
      announceSlide();
    }
  });

});

// Resize safety
window.addEventListener('resize', updateCarousel);

updateCarousel();
accessibilityAdjustment();
announceSlide();

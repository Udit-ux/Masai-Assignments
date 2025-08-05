const image = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideNumber = document.getElementById('slideNumber');

let currentSlide = 1;
let lastClickTime = 0;
let clickCount = 0;

function updateImage() {
  image.src = `https://picsum.photos/600/400?random=${Date.now()}`;
  slideNumber.innerText = `Slide ${currentSlide}`;
}

function throttleHandler(direction) {
  const now = Date.now();

  // Check if less than 1 second passed since last click
  if (now - lastClickTime < 1000) {
    clickCount++;
    if (clickCount > 3) {
      alert("Chill chill, loading it!!");
    }
    return;
  }

  lastClickTime = now;
  clickCount = 1;

  if (direction === 'next') {
    currentSlide++;
  } else if (direction === 'prev' && currentSlide > 1) {
    currentSlide--;
  }

  updateImage();
}

nextBtn.addEventListener('click', () => throttleHandler('next'));
prevBtn.addEventListener('click', () => throttleHandler('prev'));

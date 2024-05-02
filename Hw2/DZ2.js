/* Домашнее задание - 02*/

const sliderImages = document.querySelectorAll('.slider-image');
const navigationDots = document.querySelectorAll('.dot');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showImage(index) {
  sliderImages.forEach(image => image.classList.remove('active'));
  navigationDots.forEach(dot => dot.classList.remove('active'));
  sliderImages[index].classList.add('active');
  navigationDots[index].classList.add('active');
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderImages.length - 1;
  }
  showImage(currentIndex);
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= sliderImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function switchToImage(index) {
  currentIndex = index;
  showImage(currentIndex);
}

previousButton.addEventListener('click', previousImage);
nextButton.addEventListener('click', nextImage);

navigationDots.forEach((dot, index) => {
  dot.addEventListener('click', () => switchToImage(index));
});

showImage(currentIndex);
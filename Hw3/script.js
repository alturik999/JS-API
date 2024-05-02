// Получите необходимые элементы
const image = document.getElementById('image');
const author = document.getElementById('author');
const likeButton = document.getElementById('like-button');
const likeCounter = document.getElementById('like-counter');

// Функция получения случайного изображения из Unsplash
async function getRandomImage() {
  const response = await fetch('https://api.unsplash.com/photos/random?client_id=*****');
  const data = await response.json();
  return data;
}

// Функция отображения изображения и информации об авторе
async function displayImage() {
  const imageData = await getRandomImage();
  image.src = imageData.urls.regular;
  author.textContent = imageData.user.name;
}

// Функция для обработки нажатия кнопки «Мне нравится»
function handleLikeClick() {
  likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
}

// Прослушиватель событий для загрузки страницы
window.addEventListener('load', displayImage);

// Прослушиватель событий для нажатия кнопки «Мне нравится»
likeButton.addEventListener('click', handleLikeClick);

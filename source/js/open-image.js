function addImageOverlay() {
  // Получаем ссылки на необходимые элементы
  const slides = document.querySelectorAll('.swiper-slide');
  const overlay = document.createElement('div');
  overlay.classList.add('swiper-overlay');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  const image = document.createElement('img');
  image.classList.add('overlay-image');
  imageContainer.appendChild(image);
  overlay.appendChild(imageContainer);
  document.body.appendChild(overlay);

  let currentIndex = 0; // Текущий индекс слайда

  // Функция для отображения изображения по индексу
  function showImageByIndex(index) {
    const slide = slides[index];
    const slideImage = slide.querySelector('img');
    image.src = slideImage.src;
    overlay.classList.add('show');
  }

  // Добавляем обработчик клика на каждый слайд
  slides.forEach((slide, index) => {
    slide.addEventListener('click', function() {
      currentIndex = index;
      showImageByIndex(currentIndex);
    });
  });

  // Добавляем обработчик клика на оверлей для закрытия
  overlay.addEventListener('click', function() {
    overlay.classList.remove('show');
  });

  // Добавляем обработчик события нажатия на клавишу Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      overlay.classList.remove('show');
    }
  });

  // Добавляем обработчик события нажатия на клавишу ArrowRight для переключения на следующее изображение
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % slides.length;
      showImageByIndex(currentIndex);
    }
  });

  // Добавляем обработчик события нажатия на клавишу ArrowLeft для переключения на предыдущее изображение
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showImageByIndex(currentIndex);
    }
  });
}

// Используйте функцию для добавления функциональности к слайдеру
export { addImageOverlay };

function addImageOverlay() {
  // Получаем ссылки на необходимые элементы
  const html = document.querySelector('html');
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
    html.classList.add('scroll-lock');
  }

  // Добавляем обработчик клика на каждый слайд
  slides.forEach((slide, index) => {
    slide.addEventListener('click', function () {
      currentIndex = index;
      showImageByIndex(currentIndex);
    });
  });

  // Добавляем обработчик клика на оверлей для закрытия
  overlay.addEventListener('click', function () {
    overlay.classList.remove('show');
    html.classList.remove('scroll-lock');
  });

  // Добавляем обработчик события нажатия на клавишу Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      overlay.classList.remove('show');
      html.classList.remove('scroll-lock');
    }
  });

  // Добавляем обработчик события нажатия на клавишу ArrowRight для переключения на следующее изображение
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      if (overlay.classList.contains('show')) {
        currentIndex = (currentIndex + 1) % slides.length;
        showImageByIndex(currentIndex);
      }
    }
  });

  // Добавляем обработчик события нажатия на клавишу ArrowLeft для переключения на предыдущее изображение
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      if (overlay.classList.contains('show')) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showImageByIndex(currentIndex);
      }
    }
  });

  // Добавляем обработчики событий touchstart, touchmove и touchend для перелистывания на тач-устройствах
  let touchStartX = 0;
  let touchEndX = 0;

  imageContainer.addEventListener('touchstart', function (event) {
    touchStartX = event.touches[0].clientX;
  });

  imageContainer.addEventListener('touchmove', function (event) {
    touchEndX = event.touches[0].clientX;
  });

  imageContainer.addEventListener('touchend', function () {
    const touchDiff = touchStartX - touchEndX;
    const swipeThreshold = 50; // Пороговое значение для срабатывания перелистывания

    if (touchDiff > swipeThreshold) {
      // Свайп влево
      currentIndex = (currentIndex + 1) % slides.length;
      showImageByIndex(currentIndex);
    } else if (touchDiff < -swipeThreshold) {
      // Свайп вправо
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showImageByIndex(currentIndex);
    }
  });
}

// Используйте функцию для добавления функциональности к слайдеру
export {addImageOverlay};

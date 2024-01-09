function addImageOverlay() {
  // Получаем ссылки на необходимые элементы
  const slides = document.querySelectorAll('.swiper-slide');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  const image = document.createElement('img');
  image.classList.add('overlay-image');
  imageContainer.appendChild(image);
  overlay.appendChild(imageContainer);
  document.body.appendChild(overlay);

  // Добавляем обработчик клика на каждый слайд
  slides.forEach((slide, index) => {
    slide.addEventListener('click', function() {
      const slideImage = slide.querySelector('img');
      image.src = slideImage.src;
      overlay.classList.add('show');
    });
  });

  // Добавляем обработчик клика на оверлей для закрытия
  overlay.addEventListener('click', function() {
    overlay.classList.remove('show');
  });

  
  // Добавляем обработчик события нажатия на клавишу Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      hideOverlay();
    }
  });

  // Функция для скрытия оверлея
  function hideOverlay() {
    overlay.classList.remove('show');
  }
}

// Используйте функцию для добавления функциональности к слайдеру
export {addImageOverlay};

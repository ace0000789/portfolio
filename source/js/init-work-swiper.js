import Swiper from './vendor/swiper';

function initWorkSwiper() {
  const myImageSlider = new Swiper('[data-validate="swiper-work"]', {

    // перетаскивание на ПК
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1,
    // угол срабатывания свайпа
    touchAngle: 45,
    // курсор перетаскивания
    grabCursor: true,

    // Управление клавиатурой
    keyboard: {
      // вкл/выкл
      enbled: true,
      // вкл/выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
    },

    // Автовысота картинки
    autoHeight: false,
    // Бесконечный слайдер
    loop: true,
    // Количнство дублирущих слайдов
    loopedSlides: 0,
    // Свободный режим (перетаскивание по 1 фрагменту)
    freeMod: true,
    // Скорость переклдючения слайда
    speed: 500,
    // Листание
    effect: 'slide',
    breakpoints: {
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: false,
        allowTouchMove: true,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 14,
      },
      0: {
        slidesPerView: 1,
        initialSlide: 0,
        watchSlidesProgress: true,
        spaceBetween: 35,
      },
    },
  });
  return myImageSlider;
}
export {initWorkSwiper};

import Swiper from './vendor/swiper';

function initWorkSwiper() {
  const myImageSlider = new Swiper('[data-validate="swiper-work"]', {

    // перетаскивание на ПК
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1.2,
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
    speed: 600,
    // Листание
    effect: 'slide',
    breakpoints: {
      1230: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: false,
        allowTouchMove: true,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 14,
        centeredSlides: true,
      },
      0: {
        slidesPerView: 1.4,
        initialSlide: 0,
        spaceBetween: 15,
        centeredSlides: true,
      },
    },
  });
  return myImageSlider;
}
export {initWorkSwiper};

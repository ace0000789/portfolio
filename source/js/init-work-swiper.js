import Swiper from './vendor/swiper';

function initWorkSwiper() {
  const myImageSlider = new Swiper('[data-validate="swiper-work"]', {

    navigation: {
      nextEl: '[data-validate="button-next"]',
      prevEl: '[data-validate="button-prev"]',
    },

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
    speed: 300,
    // Листание
    effect: 'slide',
    breakpoints: {
      1230: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: false,
        allowTouchMove: true,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },
      0: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 5,
      },
    },
  });
  return myImageSlider;
}
export {initWorkSwiper};

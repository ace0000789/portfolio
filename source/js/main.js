import {iosVhFix} from './utils/ios-vh-fix';
import {initWorkSwiper} from './init-work-swiper';
import {addImageOverlay} from './open-image';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initWorkSwiper();
  addImageOverlay();
});

import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";
import { initCurrentYear } from "./module/current-year.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initPopup } from "./module/popup.js";
import { initMask } from "./module/mask.js";
import { initValidation } from "./module/validation.js";

window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initMask();
    initValidation();
    initSlider();
    initCurrentYear();
    // initScrollToTop();
    initScroll();
    baguetteBox.run('.gallery-wrapper');
    initPopup();
});

export const initSlider = () => {

    // слайдер "Клиенты"
    const clientsSlider = document.querySelector('.clients-swiper');
    if (clientsSlider) {
        const swiper = new Swiper(clientsSlider, {
            loop: true,
            spaceBetween: 30,
            autoplay: true,
            speed: 500,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: true,
                },
                374: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: true,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1023: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            },
        });
    }
}
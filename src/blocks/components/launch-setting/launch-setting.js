import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".launch-setting__time", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-btn.swiper-btn-next",
            prevEl: ".swiper-btn.swiper-btn-prev",
        },
    });
});

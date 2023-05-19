const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
});

const strengthSwiper = new Swiper(".section-our-strength .swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  // direction: "horizontal",
  autoplay: {
    delay: 2000,
  },
});

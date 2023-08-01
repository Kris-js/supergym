const swiper = new Swiper('.trainer__swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.trainer__swiper-button--next',
    prevEl: '.trainer__swiper-button--prev',
    disabledClass: '.trainer__swiper-button--disabled',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1360: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

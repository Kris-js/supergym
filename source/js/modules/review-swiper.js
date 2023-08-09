const swipers = new Swiper('.review__swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.review__swiper-button--next',
    prevEl: '.review__swiper-button--prev',
    disabledClass: '.review__swiper-button--disabled',
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

export {swipers};

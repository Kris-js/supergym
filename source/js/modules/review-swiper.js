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
});

export {swipers};

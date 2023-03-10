$(document).ready(function () {
  "use strict";
  const swiper1 = new Swiper(".swiper1", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
      reverseDirection: true
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: 5,
    allowTouchMove: false,
    disableOnInteraction: true
  });
  const swiper2 = new Swiper(".swiper2", {
    autoplay: {
      delay: 0, // 途切れなくループ
      disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
    },
    loop: true, // ループ有効
    spaceBetween: 80,
    // loopedSlides: 14, //設定すると途中で止まる
    slidesPerView: 2, // 一度に表示する枚数
    speed: 6000, // ループの時間
    allowTouchMove: false, // スワイプ無効
  });
});

jQuery(document).ready(function ($) {
  let autoPlayDelay = 1500;
  let options = {
    init: true,
    slidesPerView: 1,
    loop: false,
    effect: "fade",
    autoplay: {
      delay: autoPlayDelay
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  let mySwiper = new Swiper('.swiper-container', options);
  let slidersCount = mySwiper.params.loop ? mySwiper.slides.length - 2 : mySwiper.slides.length;
  let widthParts = 100 / slidersCount;

  $('.swiper-counter .total').html(slidersCount);
  for (let i = 0; i < slidersCount; i++) {
    $('.swiper-progress-bar .progress-sections').append('<span></span>');
  }
  function initProgressBar() {
    let calcProgress = (slidersCount - 1) * (autoPlayDelay + mySwiper.params.speed);
    calcProgress += autoPlayDelay;
    $('.swiper-progress-bar .progress').animate({
      width: '100%'
    }, calcProgress, 'linear');
  }
  initProgressBar();
  mySwiper.on('slideChange', function () {
    let progress = $('.swiper-progress-bar .progress');
    $('.swiper-counter .current').html(this.activeIndex + 1);

    if ( ( this.progress == -0 || (this.progress == 1 && this.params.loop) ) && !progress.parent().is('.stopped')) {
      progress.css('width', '0');
      if (this.activeIndex == 0) {
        initProgressBar();
      }
    }
    if (progress.parent().is('.stopped')) {
      progress.animate({
        'width': Math.round(widthParts * (this.activeIndex + 1)) + '%'
      }, this.params.speed, 'linear');
    }
  });
  mySwiper.on('touchMove', function () {
    $('.swiper-progress-bar .progress').stop().parent().addClass('stopped');
  });
});

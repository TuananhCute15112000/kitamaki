$(document).ready(function () {
  "use strict";
  Splitting();
  new universalParallax().init({
    speed: 8.0,
  });
  // slider 1
  const swiper1 = new Swiper(".swiper1", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: 5,
    allowTouchMove: false,
    disableOnInteraction: true
  });
  // slider 2
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

  // slider mainvisual
  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    effect: 'fade',
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});

  // slider report
  // menu
  $(window).bind('scroll', function () {
    const height = $("#mainvisual").height();
    if ($(window).scrollTop() > height) {
      $('.menu_icon').addClass('scroll')
    } else {
      $('.menu_icon').removeClass('scroll')
    }
  });
  // slider party report
  var swiper = new Swiper(".swiper-container", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    speed: 500,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });
  $(".swiper-container").hover(function () {
    swiper.autoplay.stop();
    $(".swiper-progress-bar").removeClass("animate");
  }, function () {
    swiper.autoplay.start();
    $(".swiper-progress-bar").addClass("animate");
  });

  // animate text
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('#title1', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title1",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }});
  gsap.from('#title2', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title2",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  gsap.from('#title3', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title3",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  gsap.from('#title4', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title4",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  gsap.from('#title5', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title5",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  gsap.from('#title6', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title6",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  gsap.from('#text1', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#text1",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  gsap.from('#text2', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#text2",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  gsap.from('#text3', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#text3",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  gsap.from('#image1', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#image1",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
});



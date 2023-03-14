$(document).ready(function () {
  "use strict";
  Splitting();
  new universalParallax().init({
    speed: 8.0,
  });
  // slider 1
  const swiper1 = new Swiper(".swiper1", {
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    loopedSlides: 4,
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  });
  // slider 2
  const swiper2 = new Swiper(".swiper2", {
    // autoplay: {
    //   delay: 0, // 途切れなくループ
    //   disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
    // },
    spaceBetween: 20,
    loop: true, // ループ有効
    // loopedSlides: 14, //設定すると途中で止まる
    slidesPerView: 2, // 一度に表示する枚数
    speed: 6000, // ループの時間
    allowTouchMove: true, // スワイプ無効
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1024: {
        spaceBetween: 80,
      },
    },
  });

  // slider mainvisual
  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    effect: 'fade',
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 5000,
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
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.from('#title1', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title1",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }});
  // gsap.from('#title2', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title2",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('#title3', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title3",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('#title4', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title4",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('#title5', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title5",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('#title6', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#title6",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('#text1', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#text1",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('#text2', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#text2",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('#text3', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#text3",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('#image1', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:"#image1",start:"top 95%",end:"bottom 40%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('.image2', { duration: 1, y: '200', opacity: 0, ease: 'slow', scrollTrigger: { trigger:".image2", markers: true, start:"top 95%",end:"bottom 90%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('.image3', { duration: 2, y: '200', opacity: 0, deplay: 2 , ease: 'slow', scrollTrigger: { trigger:".image3", markers: true, start:"top 97%",end:"bottom 90%", toggleActions:"restart complete reverse reset" }})
  // gsap.from('.image4', { duration: 3, y: '200', opacity: 0, deplay: 3 , ease: 'slow', scrollTrigger: { trigger:".image4", markers: true, start:"top 95%",end:"bottom 90%", toggleActions:"restart complete reverse reset" }})
});



// menu
$(document).ready(function () {
    $('.menu_icon').click(function () {
        $('.menu_icon').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('hidden');
        // $('#header .menu nav').css('transition', 'all .3s linear');
    })
});

// click croll
$(document).ready(function () {
    $('#scroller').click(function () {
        $('html, body').animate({
            scrollTop: $('#news').offset().top,
        }, 300);
    });
});

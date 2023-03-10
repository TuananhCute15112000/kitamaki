// anchor in page
$(window).bind('load', function () {
    "use strict";
    $(function () {
        $('a[href^="#"]').click(function () {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                if ($(window).width() > 768) {
                    $('html,body').animate({
                        scrollTop: p.top - 170
                    }, 600);
                } else {
                    $('html,body').animate({
                        scrollTop: p.top - 60
                    }, 600);
                }
            }
            return false;
        });
    });
});

// anchor top page #
$(window).bind('load', function () {
    "use strict";
    var hash = location.hash;
    if (hash) {
        var p1 = $(hash).offset();
        if ($(window).width() > 768) {

            $('html,body').animate({
                scrollTop: p1.top - 170
            }, 600);
        } else {
            $('html,body').animate({
                scrollTop: p1.top - 60
            }, 600);
        }
    }

});

//totop
$(document).ready(function () {
    "use strict";
    $("#toTop").hide();
    $('#toTop a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
});

// scroll
// $(document).ready(function () {
//     $('#scroller').click(function () {
//         $('html, body').animate({
//             scrollTop: $('#aboutservices').offset().top,
//         }, 300);
//     });
// });

// menu
$(document).ready(function () {
    $('.menu_icon').click(function () {
        $('.menu_icon').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('hidden');
        // $('#header .menu nav').css('transition', 'all .3s linear');
    })
});
// $(window).on('resize', function () {
//     var win = $(window);
//     if (win.width() < 992) {
//         $('#header .menu nav').css('transition', 'all .3s linear');
//     }
//     else {
//         $('body').removeClass('hidden');
//         $('#header .menu nav').css('transition', 'none');
//     }
// });
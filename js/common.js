// menu
$(document).ready(function () {
    $('.menu_icon').click(function () {
        $('.menu_icon').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('hidden');
        // $('#header .menu nav').css('transition', 'all .3s linear');
    })
    // click scroll
    $('#scroller').click(function () {
        $('html, body').animate({
            scrollTop: $('#news').offset().top,
        }, 300);
    });

    // load image
    function load(img){
        const url = img.getAttribute('lazy-src');
        console.log(url);
        img.setAttribute('src', url)
    }
    function ready() {
        if ('IntersectionObserver' in window) {
            var lazyImgs = document.querySelectorAll('[lazy-src]');
            let observer = new IntersectionObserver((entries)=>{
                entries.forEach(entry=>{
                    if(entry.isIntersect){
                        load(entry.target);
                    }
                })
            });
            lazyImgs.forEach(img => {
                observer.observe(img);
            });
        } else {
            // 
        }
    }
    document.addEventListener('DOMContentLoaded', ready());
});

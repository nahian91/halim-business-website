$(document).ready(function(){
    $(".slider-area").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false
    });

    $(".testimonials").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        nav: false,
        margin: 30,
        center: true
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
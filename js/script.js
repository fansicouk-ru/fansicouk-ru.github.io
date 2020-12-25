$(document).ready(function() { 

    $('a[href^="#order"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $('.reviews-6, .comp-slider').slick({
        dots: true,
        infinite: true,
        speed: 200,
        fade: false,
        cssEase: 'linear',
        adaptiveHeight: true
    });

});
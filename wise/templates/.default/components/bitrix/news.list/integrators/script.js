function slickSlidesEqualizer(parent) {
    var $context = $(parent);
    var $slide = $('.slick-slide', $context);
    var $slideContent = $('.slick-slide .trust-item', $context);
    var $activeSlide = $('.slick-slide.slick-active', $context);
    var $activeSlideContent = $('.slick-slide.slick-active .trust-item', $context);

    var maxSlideHeight = 0;
    $slideContent.css('min-height', 0);
    $activeSlideContent.css('min-height', 0);

    $activeSlideContent.each(function() {
        var slideHeight = $(this).outerHeight();

        if(slideHeight > maxSlideHeight) {
            maxSlideHeight = slideHeight;
        }
    });

    $activeSlideContent.css('min-height', maxSlideHeight);
}

$(function () {
    var $slickSlideImg = $('.c-about__trust .slick-slide img');

    $('.c-about__trust').each(function () {
        var $context = $(this);
        var adaptParams = {
            630: '_w-630'
        };
        $context.adaptBlock(adaptParams);
    });

    $('.c-about__trust .slick-slider').on('afterChange', function (slick, currentSlide) {
        slickSlidesEqualizer('.c-about__trust');
    });

    $(window).load(function(){
        slickSlidesEqualizer('.c-about__trust');
    }).resize(function(){
        slickSlidesEqualizer('.c-about__trust');
    })

    $slickSlideImg.on('load', slickSlidesEqualizer('.c-about__trust'));
});
$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    fade: true,
    speed: 700,
    autoplay: true,
    delay: 1000,
    arrows: false
});
var $slider = $('.slider');
var $progressBar = $('.progress');
var $progressBarLabel = $('.slider__label');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
});
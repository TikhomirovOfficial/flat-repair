$('.projects__slider').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    autoplaySpeed: 1000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 536,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});
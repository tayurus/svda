$(".about-slider__nav-item").click(function() {
    let clickedSlide = parseInt($(this).text()) - 1;
    let scrollTo = clickedSlide * $(".about-slider__slider").width();
    $(".about-slider__slider").animate({scrollLeft: scrollTo}, 0);

    $(".about-slider__nav-item").removeClass("about-slider__nav-item_active");
    $(this).addClass("about-slider__nav-item_active");


});

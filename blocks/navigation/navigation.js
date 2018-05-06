function isInViewPort(elem) {
    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    // if (isInViewPort($("#top")) || isInViewPort($("#bottom")))
    //     $(".navigation__link").removeClass("navigation__link_active");
    if (isInViewPort($("#service"))){
        $(".navigation__link").removeClass("navigation__link_active");
        $(".navigation__link[href='#service']").addClass("navigation__link_active");
    }
    else if (isInViewPort($("#advantage"))){
        $(".navigation__link").removeClass("navigation__link_active");
        $(".navigation__link[href='#advantage']").addClass("navigation__link_active");
    }
    else if (isInViewPort($("#feedback"))){
        $(".navigation__link").removeClass("navigation__link_active");
        $(".navigation__link[href='#feedback']").addClass("navigation__link_active");
    }
    else if (isInViewPort($("#maps"))){
        $(".navigation__link").removeClass("navigation__link_active");
        $(".navigation__link[href='#maps']").addClass("navigation__link_active");
    }
});

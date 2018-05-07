$(".navigation").hide();

function isInViewPort(elem) {
    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    if (isInViewPort($("#top")) || isInViewPort($("#about"))){
        $(".navigation").hide();
    }
    else if (isInViewPort($("#service"))){
        console.log("service");
        $(".navigation__link").removeClass("navigation__link_active");
        $(".navigation__link[href='#service']").addClass("navigation__link_active");
        $(".navigation").show();
    }
    else if (isInViewPort($("#advantage"))){
        console.log("advantage");
        $(".navigation__link").removeClass("navigation__link_active");
        $(".navigation__link[href='#advantage']").addClass("navigation__link_active");
        $(".navigation").show();
    }
    else if (isInViewPort($("#feedback"))){
        console.log("feedback");
        $(".navigation__link").removeClass("navigation__link_active");
        $(".navigation__link[href='#feedback']").addClass("navigation__link_active");
        $(".navigation").show();
    }
    else if (isInViewPort($("#maps"))){
        console.log("maps");
        $(".navigation__link").removeClass("navigation__link_active");
        $(".navigation__link[href='#maps']").addClass("navigation__link_active");
        $(".navigation").show();
    }
});

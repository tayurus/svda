$(".feedback__carousel").owlCarousel({
    items:1,
    nav: true,
    dots: false,
    margin: 1000,
    navText: ["Предыдущий", "Следующий"],
    mouseDrag: false,
    touchDrag: true
});

$(".owl-prev").after("<div class='feedback__carousel-line'></div>")

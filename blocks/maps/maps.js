$(".maps__item").click(function() {
    $(".maps iframe").attr("src", $(this).attr("data-url"));

    $('.maps__item').removeClass("maps__item_active");
    $(this).addClass("maps__item_active");

    $(".maps__position").removeClass("maps__position_active");
    $(this).find(".maps__position").addClass("maps__position_active");
});

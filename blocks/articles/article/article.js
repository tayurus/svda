let owl = $(".article__carousel");
owl.owlCarousel({
    items:1,
    nav:true,
    dots:false,
    navText: ["", ""],
    onDragged: callback
});


function callback(event) {
    var item      = event.item.index;     // Position of the current item
    $(event.target).find('.article__carousel-current').text(item + 1);
}

$(".article .owl-prev").each(function(index,item) {
    $(item).after("<div class='article__carousel-counter'>\
    <span class='article__carousel-current'>1</span>\
    /\
    <span class='article__carousel-total'>"+$(this).parent().parent().find('.owl-stage-outer .owl-stage .owl-item').length+"</span>\
    </div>");
});

$(".article .owl-prev").click(function() {
    let curr = parseInt($(this).siblings().find('.article__carousel-current').text());
    if (curr > 1)
         $(this).siblings().find('.article__carousel-current').text(curr - 1);
});




$(".article .owl-next").click(function() {
    let curr = parseInt($(this).siblings().find('.article__carousel-current').text());
    let total = parseInt($(this).parent().parent().find('.owl-stage-outer .owl-stage .owl-item').length);
    if (curr < $(this).parent().parent().find('.owl-stage-outer .owl-stage .owl-item').length)
         $(this).siblings().find('.article__carousel-current').text(curr + 1);
});

$(".article__tab-icon").click(function() {
    $(".article__tab").removeClass("article__tab_active");
    $(this).parent().addClass("article__tab_active");


    $(".article__tab-content").removeClass("article__tab-content_active");
    $(".article__tab-content[data-tab="+$(this).attr('data-tab')+"]").addClass("article__tab-content_active");
})

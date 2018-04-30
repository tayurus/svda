$(".modal-window__close, .modal-wrapper").click(function() {
    $(".modal-window, .modal-wrapper").hide();
});

$(".header__backcall, .footer__backcall").click(function(){
    $(".modal-window, .modal-wrapper").show();
})

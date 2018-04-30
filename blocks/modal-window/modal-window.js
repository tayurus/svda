$(".modal-window__close, .modal-wrapper").click(function() {
    $(".modal-window, .modal-wrapper").hide();
});

$(".header__backcall, .footer__backcall, .consultation .button_modal-window").click(function(){
    $(".modal-window, .modal-wrapper").show();
})

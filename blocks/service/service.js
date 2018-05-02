var currentService = 0;
var countServices = $(".service").length;
$(".service__slider-next").click(function(){
    ChangeActiveService(currentService + 1);
})

$(".service__slider-prev").click(function(){
    ChangeActiveService(currentService - 1);
})

$(".service").click(function(){
    ChangeActiveService($(this).index());
})

function ChangeActiveService(n){
    if(n < countServices && n >= 0){
        $(".service").removeClass("service_active");
        $($(".service")[n]).addClass("service_active");
        
        $(".container__service-content").prop("hidden", true);
        $($(".container__service-content")[n]).prop("hidden", false);
        
        $(".service__slider-text").prop("hidden", true);
        $($(".service__slider-text")[n]).prop("hidden", false);

        $(".service__slider-prev, .service__slider-next").removeClass("service__slider_disabled");
        if(n == 0){
            $(".service__slider-prev").addClass("service__slider_disabled");
        }
        if(n == countServices - 1){
            $(".service__slider-next").addClass("service__slider_disabled");   
        }
        currentService = n;
    }
}
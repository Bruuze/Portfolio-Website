window.addEventListener('load', function(){

    $( ".nav__menu" ).toggle();

    setTimeout(function(){

        $( ".loading-page" ).animate({
            opacity: 0,
          }, 1000);
        

        setTimeout(function(){ 
            $( "lottie-player" ).animate({
                padding: 0,
              }, 500);
         }, 500);
         
        setTimeout(function(){ $(".loading-page").remove(); }, 1000);
        $("body").css("overflow-y", "auto");
    }, 2000);
    
})

$(document).ready(function(){
    $(".bodymovinanim, .nav__menu__top a").click(function(){
        $( ".nav__menu" ).toggle();
    });

    $(".nav__menu__top a").click(function(){
        $( ".nav__menu" ).toggle();
        $('.bodymovinanim').trigger('click');
        if($('.nav__menu:hidden').length == 0)
        {
            $( ".nav__logo a" ).toggle();
        }
    });

    $(".nav__logo a").click(function(){
        if($('.nav__menu:hidden').length == 0)
        {
            $('.bodymovinanim').trigger('click');
        }
    });
});
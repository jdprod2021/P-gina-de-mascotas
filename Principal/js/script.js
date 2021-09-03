/*https://www.youtube.com/watch?v=kaOlwXiYcgk*/ /*FalconMasters*/

$(document).ready(function(){
    var H=$('#Tiendas1');
    $(Window).scroll(function(){
        if( $(this).scrollTop() > 0){
            $('header') .addClass('show');
        } else {
            $('header').removeClass('show');
        }
    });
    H.click(function(){
        if( H.hasClass('Tiendas')){
            H.removeClass('Tiendas');
        }else{
            H.addClass('Tiendas');
        }
    });
});



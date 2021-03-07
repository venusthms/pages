$(document).ready(function(){
    // Target your element
    $('.venus').colourBrightness();
    $('.scroll').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    $('.d-button').click(function(){
    $(this).siblings('.d-links').slideToggle("slow");
    $(this).toggleClass("clicked");
    return false
});
});

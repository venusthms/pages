$(document).ready(function(){
    // Target your element
    $('.venus').colourBrightness();
    $('.scroll').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    $('.q').click(function(){
    $(this).siblings('.a').slideToggle("slow");
    $(this).children(".q-icon").toggleClass("clicked");
    return false
}); 
});

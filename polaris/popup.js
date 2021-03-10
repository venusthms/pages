$(document).ready(function(){
   $('.openp').click(function() {
                    $(this)
                        .closest('.content')
                        .find('.popup')
                        .fadeToggle();
                });
                $(".th").click(function(){
                    $(this)
                .closest('.openp')
                .find('.th')
                .toggleClass("th-gift-o th-cross-1-o");
    });
});

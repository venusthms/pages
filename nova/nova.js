    $( document ).ready(function() {
        
        $('.item p').each(function(){
            $(this).height(); 
            if($(this).height() > 40)
            {$(this).addClass('long');}
});

});

 $( document ).ready(function() {
     $('.cut-off').each(function(){
        $(this).height(); 
        if($(this).height() > 50)
        {$(this).addClass('long');}
});
});

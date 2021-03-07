 $( document ).ready(function() {
     $('.cut-off').each(function(){
        $(this).height(); 
        if($(this).height() > 40)
        {$(this).addClass('long');}
});
});

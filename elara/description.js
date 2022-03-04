 $( document ).ready(function() {
     $('.cut-off').each(function(){
        $(this).height(); 
        if($(this).height() > 70)
        {$(this).addClass('long');}
});
});

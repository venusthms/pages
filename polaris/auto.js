    $(function() {
    var currentDate = Date.now();
    var a = new Date(currentDate);
    $(".overlay").each(function() {
        var specifiedDate = $(this).data('date');
        var date = Date.parse(specifiedDate);
        var b = new Date(date);
        if(!isNaN(b) && a - b > 0) {
            $(this).addClass('past');
        }
    });
});

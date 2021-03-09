$(document).ready(function(){
var $grid = $(".grid"); $grid.imagesLoaded(function() {
   $grid.masonry({
       itemSelector: ".item",
       columnWidth: 270,
       horizontalOrder: true
   });
});
$(".button").click(function(){
   $(this).addClass("selected");
   $(".button").not($(this)).removeClass("selected");
   var ssf = $(this).attr("filter");
   $(".item." + ssf).show();
   $(".item").not("." + ssf).hide();
   $grid.masonry();
});
});

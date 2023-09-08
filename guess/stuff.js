$(document).ready(function(){
 var $container = $(".grid"); 
 var filters = {}; 
 var $grid = $container.isotope({
   itemSelector: ".item",
   masonry: {
   fitWidth: true,
   horizontalOrder: true,
   percentPosition: false
   }
 });
 
$('.item').click(function() {
    $(this).toggleClass("clicked", 1000);
    return false;
    });

$('.rndmDiv').hide()
$('#showRndmdiv').click(function(){
    var random = Math.floor(Math.random() * $('.rndmDiv').length);
    $('.rndmDiv').hide().eq(random).show();
});
  
});

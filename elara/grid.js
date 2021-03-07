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
 $(".option-set a").click(function(e) {
   var $this = $(this); 
   var filterAttr = "data-filter-value";
   var filterValue = $this.attr(filterAttr); 
   var $optionSet = $this.parents(".option-set"); 
   var group = $optionSet.attr("data-filter-group");  
   var filterGroup = filters[group];
   if (!filterGroup) {
     filterGroup = filters[group] = []; 
   }
   var $selectAll = $optionSet.find('a['+filterAttr+'=""]'); 
   var activeClass = "selected", 
     exclClass = "exclusive"; 
 comboFiltering($this,filters,filterAttr,filterValue,$optionSet,group,$selectAll,activeClass,exclClass);
   var comboFilter = getComboFilter(filters);
   $grid.isotope({
     filter: comboFilter
   });
   $this.toggleClass(activeClass);
   e.preventDefault();
 });
 

$grid.on( 'click', '.cut-off', function() {
  $(this).toggleClass('superlong');
  $container.isotope('layout');
  setTimeout( function() {
    $container.isotope('layout');
  }, 1000 );
    }); 
});

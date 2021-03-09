$(document).ready(function() {
 var $container = $(".grid"); // the container with all the elements to filter inside
 var filters = {}; //should be outside the scope of the filtering function
 /* --- read the documentation on isotope.metafizzy.co for more options --- */
 var $grid = $container.isotope({
   itemSelector: ".item", // the elements to filter
   percentPosition: false // put true if you use percentage widths, otherwise put false
 });
 $(".option-set a").click(function(e) {
   var $this = $(this); // cache the clicked link
   var filterAttr = "data-filter-value";
   var filterValue = $this.attr(filterAttr); // cache the filter
   var $optionSet = $this.parents(".option-set"); // cache the parent element
   var group = $optionSet.attr("data-filter-group"); // cache the parent filter group 
   var filterGroup = filters[group];
   if (!filterGroup) {
     filterGroup = filters[group] = []; 
   }
   var $selectAll = $optionSet.find('a['+filterAttr+'=""]'); // the 'select all' button in the current group
   var activeClass = "selected", // the class for active links
     exclClass = "exclusive"; // the class for exclusive groups
 comboFiltering($this,filters,filterAttr,filterValue,$optionSet,group,$selectAll,activeClass,exclClass);
   var comboFilter = getComboFilter(filters);
   $grid.isotope({
     filter: comboFilter
   });
   $this.toggleClass(activeClass);
   e.preventDefault();
 });
});

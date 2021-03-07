$(document).ready(function() {

var qsRegex;
var buttonFilter;

var $grid = $('.grid').isotope({
  itemSelector: '.item',
    masonry: {
   columnWidth: '.grid-sizer',
   horizontalOrder: true,
   gutter:10
   },
getSortData: {
    name: '.title h1',
  },
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  }
});

$('#filters').on( 'click', 'button', function() {
  buttonFilter = $( this ).attr('data-filter');
  $grid.isotope();
});

var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}) );

$('.filter-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.selected').removeClass('selected');
    $( this ).addClass('selected');
  });
});

$('#sorting').on( 'click', 'button', function() {
  var sortValue = $(this).attr('data-sort-value');
  $grid.isotope('updateSortData').isotope({ sortBy: sortValue });
});

$('#sorting').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.selected').removeClass('selected');
    $( this ).addClass('selected');
  });
});
  
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}
$('.filter-b').click(function() {
    $('#filters').slideToggle( "slow" );
    $("#sorting").fadeOut( "slow" );
    $(".sort-b").removeClass("clicked", 1000);
    $(".filter-b").toggleClass("clicked", 1000);
    return false;
    });
$('.sort-b').click(function() {
    $('#sorting').slideToggle( "slow" );
    $("#filters").fadeOut( "slow" );
    $(".filter-b").removeClass("clicked", 1000);
    $(".sort-b").toggleClass("clicked", 1000);
    return false;
    });
});

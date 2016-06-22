jQuery(document).ready(function(){

jQuery(".mainMenu").on('click', 
  function () {
	jQuery(this).animate({
		backgroundColor:"#03C",
    }, 500 );
});

jQuery(".mainMenu").on('click', 
  function() {
	jQuery(this).animate({
		backgroundColor:"#009688",
    }, 500 );
});

});
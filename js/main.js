$(function(){

	$('.js-menu').click(function() {
	    var buttonMenu = $(this);
	    var bigMenu = $('body').find('.big-menu');
	    buttonMenu[buttonMenu.hasClass('active') ? 'removeClass' : 'addClass']('active');
	    bigMenu[bigMenu.hasClass('active') ? 'removeClass' : 'addClass']('active');
	});

});
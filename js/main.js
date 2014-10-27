$(function(){

	$('.js-menu').click(function() {
	    var buttonMenu = $(this);
	    var bigMenu = $('body').find('.big-menu');
	    buttonMenu[buttonMenu.hasClass('active') ? 'removeClass' : 'addClass']('active');
	    bigMenu[bigMenu.hasClass('active') ? 'removeClass' : 'addClass']('active');
	});

	$('.js-result').click(function() {
		var block = $(this).closest('.poll-stat');
	   block.find('.choose').hide();
	   block.find('.progress-wrapper').show();
	});

});
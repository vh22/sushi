$(function(){

	$('.js-menu').click(function() {
	    var buttonMenu = $(this);
	    var bigMenu = $('body').find('.big-menu');
	    buttonMenu[buttonMenu.hasClass('active') ? 'removeClass' : 'addClass']('active');
	    // bigMenu[bigMenu.hasClass('active') ? 'removeClass' : 'addClass']('active');
	    bigMenu.slideToggle();
	    return false;
	});

	$('.js-result').click(function() {
		var block = $(this).closest('.poll-stat');
	   block.find('.choose').hide();
	   block.find('.progress-wrapper').show();
	});

	$(window).load(function(){
      $(".js-header-bottom").sticky({ topSpacing: 0, center:true, className:"hey" });
      $(".js-big-menu").sticky({ topSpacing: 65, center:true, className:"menu-height" });
    });
});
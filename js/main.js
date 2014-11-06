$(function(){
    var bigMenu = $('.big-menu');
    var headerBottom = $('.header-bottom')
	$('.js-menu').click(function() {
	    var buttonMenu = $(this);
	    buttonMenu[buttonMenu.hasClass('active') ? 'removeClass' : 'addClass']('active');
        buttonMenu.hasClass('active') ? headerBottom.addClass('active') : headerBottom.removeClass('active');
	    return false;
	});

	$('.js-result').click(function() {
		var block = $(this).closest('.poll-stat');
	   block.find('.choose').hide();
	   block.find('.progress-wrapper').show();
	});

	$(window).load(function(){
      $(".js-header-bottom").sticky({ topSpacing: 0, center:true, className:"hey" });
//      $(".js-big-menu").sticky({ topSpacing: 65, center:true, className:"menu-height" });
    });
});
$(function(){
    var bigMenu = $('.big-menu');
    var banerTime = $('.banner');
	$('.js-menu').click(function() {
	    var buttonMenu = $(this);
	    buttonMenu[buttonMenu.hasClass('active') ? 'removeClass' : 'addClass']('active');
        if(buttonMenu.hasClass('active')){
            bigMenu.stop().slideDown(400, function(){
                $(this).css('display', 'block');
            });
            banerTime.stop().animate({
                'padding-top': 155
            }, 400);
        }else{
           bigMenu.stop().slideUp(400, function(){
                $(this).removeAttr('style');
            });
             banerTime.stop().animate({
                'padding-top': 0
            }, 400);
        }
//	    bigMenu.slideDown();
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
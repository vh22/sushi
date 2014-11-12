$(function(){
    var bigMenu = $('.big-menu');
    var headerBottom = $('.header-bottom')
    $('.js-menu').click(function() {
        var buttonMenu = $(this);
        buttonMenu[buttonMenu.hasClass('active') ? 'removeClass' : 'addClass']('active');
        if(buttonMenu.hasClass('active')) {
            headerBottom.addClass('active');
            $('header').addClass('opened-menu');
        } else {
            headerBottom.removeClass('active');
            $('header').removeClass('opened-menu');
        }
        return false;
    });

    $('.js-result').click(function() {
        var block = $(this).closest('.poll-stat');
        block.find('.choose').hide();
        block.find('.progress-wrapper').show();
    });

    $('.change-view span').click(function(){
        $('.change-view span').removeClass('active');
        $(this).addClass('active');
        $('.list-product').hasClass('five') ? $('.list-product').removeClass('five').addClass('eight') : $('.list-product').removeClass('eight').addClass('five');
    });
    $('.js-more').click(function(){
        // var order = $(this).closest('.personal').find('.no');
        // order.hasClass('no-visible') ? order.removeClass('no-visible').addClass('visible') : order.removeClass('visible').addClass('no-visible');
        // order.slideToggle( "slow", function() {
        //     $(this).css('display', 'table');
        // });
        $(this).html();
        return false;
    });

    $(window).load(function(){
        $(".js-header-bottom").sticky({ topSpacing: 0, center:true, className:"sticked-menu" });
//      $(".js-big-menu").sticky({ topSpacing: 65, center:true, className:"menu-height" });
    });

    $(window).scroll(function(){
        $('.sticked-menu').length ? $('header').addClass('sticked') : $('header').removeClass('sticked');
    });

    $('.window').dialog({
        autoOpen: false,
        height: 345,
        width: 635,
        modal: true,
        resizable: false,
        closeOnEscape: true,
        show: {
            effect: 'fade',
            duration: 1000
        },
        open: function(){
            $('.ui-widget-overlay, .close').bind('click', function(){
               $('.window').dialog('close');     
            });
        }
    });

    $('.ui-dialog-titlebar').remove();

    $('.add-review').click(function(){
        $('#add-review').dialog('open');
    });
});
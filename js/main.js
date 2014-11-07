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

    $('.change-view span').click(function(){
        $('.change-view span').removeClass('active');
        $(this).addClass('active');
        $('.list-product').hasClass('five') ? $('.list-product').removeClass('five').addClass('eight') : $('.list-product').removeClass('eight').addClass('five');
    });

    $(window).load(function(){
        $(".js-header-bottom").sticky({ topSpacing: 0, center:true, className:"sticked-menu" });
//      $(".js-big-menu").sticky({ topSpacing: 65, center:true, className:"menu-height" });
    });

    $(window).scroll(function(){
        $('.sticked-menu').length ? $('header').addClass('sticked') : $('header').removeClass('sticked');
    });
});
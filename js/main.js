$(function(){

    $('.js-result').click(function() {
        var block = $(this).closest('.poll-stat');
        block.find('.choose').hide();
        block.find('.progress-wrapper').show();
    });

    $('.open-results').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').text('Посмотреть результаты');
            $(this).next('.show-results').hide(300);
        } else {
            $(this).addClass('active').text('Скрыть результаты');
            $(this).next('.show-results').show(300);
        }
    });

    $('.change-view span').click(function(){
        $('.change-view span').removeClass('active');
        $(this).addClass('active');
        $('.list-product').hasClass('five') ? $('.list-product').removeClass('five').addClass('eight') : $('.list-product').removeClass('eight').addClass('five');
    });
    $('.js-more').click(function(){
        $(this).html();
        return false;
    });
    $(window).load(function(){
        $(".js-header-bottom").sticky({ topSpacing: 0, center:true, className:"sticked-menu" });
        $(".js-my-lunch").sticky({ topSpacing: 75, bottomSpacing: 398, center:true, className:"sticked-menu" });
    });

    $(window).scroll(function(){
        $('.sticked-menu').length ? $('header').addClass('sticked') : $('header').removeClass('sticked');
    });

});
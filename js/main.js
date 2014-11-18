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
        $(".js-my-lunch").sticky({ topSpacing: 75, bottomSpacing: 398, center:true, className:"sticked-menu" });
//      $(".js-big-menu").sticky({ topSpacing: 65, center:true, className:"menu-height" });
    });

    $(window).scroll(function(){
        $('.sticked-menu').length ? $('header').addClass('sticked') : $('header').removeClass('sticked');
    });

    if ($('.window').length){
        $('.window').dialog({
            autoOpen: false,
//        height: 345,
            width: 635,
            modal: true,
            resizable: false,
            closeOnEscape: true,
            show: {
                effect: 'fade',
                duration: 300
            },
            hide: {
                effect: 'drop',
                duration: 200
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
        $('.pass-success').click(function(){
            $('#pass-success').dialog({width: 500});
            $('#pass-success').dialog('open');
        });
        $('.pass-sent').click(function(){
            $('#pass-sent').dialog({width: 725});
            $('#pass-sent').dialog('open');
        });
        $('.structure').click(function(){
            $('#structure').dialog({width: 270});
            $('#structure').dialog('open');
        });
        $('.pass-change').click(function(){
            $('#pass-change').dialog({width: 405});
            $('#pass-change').dialog('open');
            $('.pass-success').click(function(){
                $('#pass-change').dialog('close');
            });
        });
        $('.phone-change').click(function(){
            $('#phone-change').dialog({width: 410});
            $('#phone-change').dialog('open');
        });
        $('.phone-add').click(function(){
            $('#phone-add').dialog({width: 410});
            $('#phone-add').dialog('open');
        });
        $('.adress-change').click(function(){
            $('#adress-change').dialog({width: 840});
            $('#adress-change').dialog('open');
        });
        $('.adress-add').click(function(){
            $('#adress-add').dialog({width: 840});
            $('#adress-add').dialog('open');
        });
        $('.phone-call').click(function(){
            $('#phone-call').dialog({width: 435});
            $('#phone-call').dialog('open');
            $('.phone-sent').click(function(){
                $('#phone-call').dialog('close');
                $('#phone-sent').dialog({width: 600});
                $('#phone-sent').dialog('open');
            });
        });


    }
});
//顶部下拉框
$(function() {

    $('.header-nav li:eq(0)').mouseenter(function() {

        // $('.tanchuang:animated').toggle();
        $('.tanchuang').fadeIn();
        $('.tanchuang').mouseenter(function() {
            $('.list>li') each(function() {
                $(this).css('background', '#fff');
            })

        })


    });

    $('.header-nav li:eq(1)').mouseenter(function() {


        $('.tanchuang1').fadeIn();


    });

    $('.header-nav li:eq(2)').mouseenter(function() {


        $('.tanchuang2').fadeIn();


    });
    $('.header-nav li:eq(3)').mouseenter(function() {


        $('.tanchuang3').fadeIn();


    });
    $('.header-nav li:eq(4)').mouseenter(function() {

        $('.tanchuang4').fadeIn();


    });

    $('.header-nav li').mouseleave(function() {
        $('.aaa').fadeOut(1000);
    });


})

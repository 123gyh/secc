window.onload = function() {
    // menu1
    $('.menu1>ul li').mouseover(function() {
        var index = $(this).index();
        $(this).addClass('bgcolor').siblings().removeClass('bgcolor');
        $('.menu1>div ul').eq(index).stop(true, true).fadeIn(800).siblings().hide();
    })
    $('.header>ul>li').hover(function() {
        $(this).find('.menu').stop(true, true).fadeToggle();
    })

    // tab
    $('.tab a').click(function() {
        var value = $(this).html(),
            index = $(this).index();
        $('.tabName').html(value);
        $('.tab a').removeClass('bg-fff');
        $(this).addClass('bg-fff');
        $('.form form').removeClass('show');
        $('.form form').eq(index).addClass('show');
    })
}

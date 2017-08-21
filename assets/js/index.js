//选项卡
var li = document.querySelectorAll('.list>li');
var active = document.querySelectorAll('.list>li>.actives');
var len = li.length;
for (var i = 0; i < len; i++) {
    li[i].onmouseover = function() {
        for (var j = 0; j < len; j++) {
            active[j].style.display = 'none';
            li[j].className = '';
        }
        var index = this.getAttribute('data-index');
        active[index].style.display = 'block';
        li[index].className = 'aaa';
    }
}
// 顶部弹窗
//顶部下拉框
$(function() {

    $('.header-nav li:eq(0)').mouseenter(function() {

        $('.tanchuang:animated').toggle();
        $('.tanchuang').slideDown();

    });

    $('.header-nav li:eq(1)').mouseenter(function() {

        $('.tanchuang2:animated').toggle();
        $('.tanchuang2').slideDown();

    });

    $('.header-nav li:eq(2)').mouseenter(function() {

        $('.tanchuang3:animated').toggle();
        $('.tanchuang3').slideDown();

    });
    $('.header-nav li:eq(3)').mouseenter(function() {

        $('.tanchuang4:animated').toggle();
        $('.tanchuang4').slideDown();

    });

    $('.header-nav ul li').mouseleave(function() {
        console.log(1223);
        $('.aaa').slideUp();
    });


})

$(function() {

    $('.zhizhen').click(function() {
            $('.tongxun').hide();
            $('.jibenpage').show();
        })
        //点击切换
    $('.xinxi_tongx').click(function() {
            $('.jibenpage').hide();
            $('.tongxun').show();
        })
        //头像切换
    $('.inp2').click(function() {
        $('.huantx').slideToggle();
    })

    var citys = [
        //北京
        ['朝阳区', '昌平区', '西城区', '平谷区'],
        ['上海市', '长宁', '宋江', '闸北', '杨浦'],
        ['天津市', '北辰', '武清', '东丽', '汉沽'],
        ['万州', '江北', '巴南', '重庆市', '渝北'],
        ['齐齐哈尔', '鸡西', '大庆', '宜春', '佳木斯'],
        ['长沙', '衡阳', '岳阳', '常德', '株洲'],
        ['武汉', '黄石', '十堰', '宜昌', '鄂州'],
        ['长春', '白山', '通化', '松原', '四平'],
        ['西安', '铜川', '宝鸡', '延安', '汉中'],
        ['太原', '大同', '阳泉', '晋城', '晋中'],
        ['青岛', '淄博', '烟台', '潍坊', '枣庄'],
        ['赤峰', '包头', '通辽', '乌海', '兴安盟'],
        ['兰州', '白银', '天水', '威武', '金昌'],
        ['吴中', '固原', '银川', '石嘴山', '银南']
    ];


    //城市
    //点击换小箭头，出现下拉框
    $('.kuang1').click(function() {
        $('.xuanx').css('display', 'none');
        $('.xiala').removeClass('icon-xia');
        $('.xiala').addClass('icon-shang');
        $('.xuanx1').toggle();

    });

    $('.kuang2').click(function() {
        $('.xuanx').css('display', 'none');
        $('.xiala').removeClass('icon-xia');
        $('.xiala').addClass('icon-shang');
        $('.xuanx2').toggle();
        console.log(2222);
    });

    // $('html:not(kuang)').click(function() {
    //     $('.xuanx3').hide();
    //     //$('.xuanx2').hide();
    // })

    //点击 input 框防止消失
    $('.xuanx_ss').click(function() {
        return false;
    })


    // $('.kuang2').click(function() {
    //         $('.xiala').removeClass('icon-xia');
    //         $('.xiala').addClass('icon-shang');
    //         $('.xuanx2').toggle();
    //     })
    //更换颜色s
    // $('.xuanxk>ul>li').mousemove(function() {
    //     console.log(111);
    //     $(this).removeClass('xuanxk_color');
    //     $(this).addClass('xuanxk_color');
    // }).mouseleave(function() {
    //     $(this).removeClass('xuanxk_color');
    // });
    //使用on事件绑定
    $('.kuang ul').on('mouseover', 'li', function() {
            $(this).removeClass('xuanxk_color');
            $(this).addClass('xuanxk_color');
        }).on('mouseout', 'li', function() {
            $(this).removeClass('xuanxk_color');
        })
        //获取省级的文本，
    $('.xuanxk1 ul li').click(function() {
        //先（$(this).text()）获取文本内容，在写入文本内容

        $('.kuang>span').text($(this).text());
    });

    //获取市级的文本
    $('.xuanxk2 ul').on('click', 'li', function() {
        $('.kuang>q').text($(this).text());

    });

    //先居住地

    //点击换小箭头，出现下拉框
    $('.kuang3').click(function() {
        $('.xuanx').css('display', 'none');
        $('.xiala').removeClass('icon-xia');
        $('.xiala').addClass('icon-shang');
        $('.xuanx3').show();

    });

    $('.kuang3 ul li').click(function() {
        $('.xuanx3').hide(500);
    })

    $('.kuang4').click(function() {
        $('.xuanx').css('display', 'none');
        $('.xiala').removeClass('icon-xia');
        $('.xiala').addClass('icon-shang');
        $('.xuanx4').toggle();


    });
    $('.kuang4 ul li').on('click', 'li', function() {
        $('.xuanx4').hide(500);
    })

    $('.xuanxk3 ul li').click(function() {
        $('.kuang3>span').text($(this).text());
    })




    //获取市级的文本
    $('.xuanxk4 ul').on('click', 'li', function() {
        $('.kuang>q').text($(this).text());

    });

    //循环市级的内容
    $('.xuanxk ul li').click(function() {
        var index = $(this).index() - 1;

        var str = ' <li class="xuanxk_color">-请选择-</li>';
        citys[index].forEach(function(val, key) {
            str += ` 
            <li>${val}</li>
            	`
        })
        console.log(str);
        $('.xuanxk2 ul').html(str);
    })








})

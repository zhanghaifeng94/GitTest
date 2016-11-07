var $list = $(".pic_list");
var $picLi = $(".pic_list li");
var $btnLi = $(".btn_list li");
var $wrap = $("#banner_box");
var iNow = 0;
var iW = $picLi.outerWidth();
var len = $picLi.length;
var timer = null;
var animated = true;
$picLi.eq(0).clone().appendTo($list);
timer = setInterval(autoPlay, 3000)
$wrap.hover(function () {
    clearInterval(timer)
}, function () {
    timer = setInterval(autoPlay, 3000)
})
$btnLi.click(function () {
    iNow = $(this).index();
    changeView()
})

function changeView() {
    animated = false;
    $list.stop().animate({
        "left": -iNow * iW
    }, function () {
        animated = true;
        if (iNow >= len) {
            $list.css({
                "left": 0
            })
        }
    })
    $btnLi.removeClass('active').eq(iNow % len).addClass('active');
}

function autoPlay() {
    if (iNow >= len) {
        iNow = 0;
        $list.css({
            "left": 0
        })
    }
    iNow++;
    changeView()
}
$.ajax({
    type: 'get',
    url: "json/index_rend.json",
    dataType: 'JSON',
    asyne: true,
    success: function (data) {
        var num = 10;
        for (var i = 0; i < num; i++) {
            var html = '<li class="por_list"><div class="p_img"><a><img src="' + data[i].images + '"/></a></div><div class="p_info"><a heef="#"  class="name">' + data[i].name + '</a><a  href="#" class="price">' + data[i].price + '</a><div class="caer"><i class="iconfont" id="' + data[i].id + '">' + data[i].caer + '</i></div></div><div class="news"><span>' + data[i].news + '</span></div></li>'
            $('.list').append(html)
        }
    }
})
$.ajax({
    type: 'get',
    url: "json/index_to.json",
    dataType: 'JSON',
    asyne: true,
    success: function (data) {
        var num = 5;
        for (var i = 0; i < num; i++) {
            var html = '<li class="por_list"><div class="p_img"><a><img src="' + data[i].images + '"/></a></div><div class="p_info"><a heef="#"  class="name">' + data[i].name + '</a><a  href="#" class="price">' + data[i].price + '</a><div class="caer"><i class="iconfont" id="' + data[i].id + '">' + data[i].caer + '</i></div></div><div class="news"><span>' + data[i].news + '</span></div></li>'
            $('.list2').append(html)
        }
    }
})
$.ajax({
    type: 'get',
    url: "json/index_fresh.json",
    dataType: 'JSON',
    asyne: true,
    success: function (data) {
        var num = 10;
        for (var i = 0; i < num; i++) {
            var html = '<li class="por_list"><div class="p_img"><a><img src="' + data[i].images + '"/></a></div><div class="p_info"><a heef="#"  class="name">' + data[i].name + '</a><a  href="#" class="price">' + data[i].price + '</a><div class="caer"><i class="iconfont" id="' + data[i].id + '">' + data[i].caer + '</i></div></div><div class="news"><span>' + data[i].news + '</span></div></li>'
            $('.list3').append(html)
        }
    }
})
$.ajax({
    type: 'get',
    url: "json/index_gift.json",
    dataType: 'JSON',
    asyne: true,
    success: function (data) {
        var num = 10;
        for (var i = 0; i < num; i++) {
            var html = '<li class="por_list"><div class="p_img"><a><img src="' + data[i].images + '"/></a></div><div class="p_info"><a heef="#"  class="name">' + data[i].name + '</a><a  href="#" class="price">' + data[i].price + '</a><div class="caer"><i class="iconfont" id="' + data[i].id + '">' + data[i].caer + '</i></div></div><div class="news"><span>' + data[i].news + '</span></div></li>'
            $('.list4').append(html)
        }
    }
})
sc_car();
$('.rend_text ul').on('click', '.caer i', function () {
    var id = this.id;
    var first = $.cookie('goods') == null ? true : false;
    if (first) {
        $.cookie('goods', '[{id:' + id + ',num:1}]');
    } else {
        var str = $.cookie('goods');
        var arr = eval(str);
        var same = false;
        for (var i in arr) {
            if (arr[i].id == id) {
                arr[i].num = arr[i].num + 1; //让json结构中num自增。
                var cookieStr = JSON.stringify(arr); //将json对象转换成字符串.
                $.cookie('goods', cookieStr);
                same = true;
            }
        }
        if (!same) {
            var obj = {
                id: id,
                num: 1
            };
            arr.push(obj);
            var cookieStr = JSON.stringify(arr);
            $.cookie('goods', cookieStr);
        }
    }
    sc_car()
    alert('添加购物车成功')
})

function sc_car() {
    var sc_str = $.cookie('goods');
    if (sc_str) { //如果购物车cookie不为空。
        var sc_obj = eval(sc_str);
        var sc_num = 0;
        for (var i in sc_obj) {
            sc_num = Number(sc_obj[i].num) + sc_num;
        }
        $('.miniCart span').html(sc_num);
        $('.pull_left span').html(sc_num);

    }
}

function sc_msg() {
    $.ajax({
        url: "json/index.json",
        type: 'get',
        success: function (data) {
            var sc_str = $.cookie('goods');

            //var cart = sc_str[id]
            if (sc_str) {
                var sc_obj = eval(sc_str);
                var sc_num = 0;
                var html = '';
                for (var j in sc_obj) {
                    sc_num = Number(sc_obj[j].num);
                }
                for (var i in sc_obj) {
                    html += '<li><a><img src="' + data[sc_obj[i].id].images + '" class="sc_img"><div class="particulars"><h5>' + data[sc_obj[i].id].name + '</h5><h5 class="price">' + data[sc_obj[i].id].price+ '</h5></div></a><div class="sc_number"><span class="min">-</span><input type="text" value="' + sc_num + '" class="text_box"><span class="add">+</span></div><span class="delete" id="' + data[sc_obj[i].id] + '">删除</span></li>'
                    $('.cartcont ul').html(html);
                    var text = '<div class="pull_left">共<span></span>件商品</div><div class="pull_right">商品小计<span></span></div><button>立即结算</button>'
                    $('.pull').html(text)
                    $('.delete').click(function () {
                        setCookie('goods'+this.id,'',-1)
                        $('.sc_list').find('li').remove()
                    })
                    clearCookie('goods')
                }

                $('.sc').remove('.sc')

                $('.add').click(function () {
                    var t = $(this).parent().find('input');
                    t.val(parseInt(t.val()) + 1)
                    setTotal();
                })
                $('.min').click(function () {
                    var t = $(this).parent().find('input');
                    t.val(parseInt(t.val()) - 1)
                    if (parseInt(t.val()) < 1) {
                        t.val(1);
                    }
                    setTotal();
                })

                function setTotal() {
                    var s = 0;
                    var ui = $('.particulars').find('.price').text()
                    console.log($('.particulars').find('.price').text())
                    var lio = ui.substr(1,5)
                    $(".sc_number").each(function () {
                        s += parseInt($(this).find('input').val()) * parseFloat(lio);
                    });
                    $(".pull_right span").html(s.toFixed(2));
                }
                setTotal();
                
            } 
            

            sc_car()
        }
    })

}
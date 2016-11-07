window.onload = function () {
    $('.topL').hover(function () {
        $(this).find('.siteB').css('display', 'block')
    }, function () {
        $(this).find('.siteB').css('display', 'none')
    })
    $('.city_list li a').click(function () {
        if ($(this).parent().find('.citysel').css('display') == 'none') {
            $(this).parent().find('.citysel').css('display', 'block')
            $(this).parent().find('span').html('&#xe602;')
        } else {
            $(this).parent().find('.citysel').css('display', 'none')
            $(this).parent().find('span').html('&#xe604;')
        }
    })
    $('.site').hover(function () {
        $(this).css('background', '#fff')
    }, function () {
        $(this).css('background', '#eee')
    })
    $('.hotcity a').click(function () {
        $('.siteT').html('<a class="siteT">' + $(this).html() + '</a>' + '<i class="iconfont arrL">&#xe607;</i>')
    })
    $('.citysel a').click(function () {
        $('.siteT').html('<a class="siteT">' + $(this).html() + '</a>' + '<i class="iconfont arrL">&#xe607;</i>')
    })
    $('.city_list a').hover(function () {
        $(this).css('color', '#64A131')
    }, function () {
        $(this).css('color', '#999')
    })
    $('.hotcity a').hover(function () {
        $(this).css({
            color: '#64A131',
            textDecoration: 'underline'
        })
    }, function () {
        $(this).css({
            color: '#555',
            textDecoration: 'none'
        })
    })
    $('.login').hover(function () {
        $(this).css({
            color: '#64A131',
            textDecoration: 'underline'
        })
    }, function () {
        $(this).css({
            color: '#999',
            textDecoration: 'none'
        })
    })
    $('.register').hover(function () {
        $(this).css({
            color: '#64A131',
            textDecoration: 'underline'
        })
    }, function () {
        $(this).css({
            color: '#999',
            textDecoration: 'none'
        })
    })
    $('.announcement').hover(function () {
        $('.notice').css('display', 'block')
        $(this).css('background', '#fff')
    }, function () {
        $('.notice').css('display', 'none')
        $(this).css('background', '#eee')
    })
    $('.notice a').hover(function () {
        $(this).css('color', '#64A131')
    }, function () {
        $(this).css('color', '#555')
    })
    $('.text_center a').hover(function () {
        $(this).css('textDecoration', 'underline')
    }, function () {
        $(this).css('textDecoration', 'none')
    })
    $('.qk').hover(function () {
        $(this).css({
            color: '#64A131',
            textDecoration: 'underline'
        })
    }, function () {
        $(this).css({
            color: '#999',
            textDecoration: 'none'
        })
    })
    $('.garden').hover(function () {
        $('.hide').css('display', 'block')
        $(this).css('background', '#fff')
    }, function () {
        $('.hide').css('display', 'none')
        $(this).css('background', '#eee')
        console
    })
    var ert = true;
    $('.miniCart').click(function () {
        if (ert == true) {
            $('.cartbg').css('color', '#f6ab00')
            ert = false;
        } else if (ert == false) {
            $('.cartbg').css('color', '#64a131')
            ert = true;
        }
        $('.cartcont').slideToggle('fast')
        sc_msg();
    })
    $('.nav_list li a').click(function () {
        $(this).css('color', '#64a131')
    })
}
getCookie('texts')
function fn() {
    console.log(document.cookie)
    if (document.cookie == ('texts')) {
        
        $('#headR').find('li').eq(0).remove('li')
        $('#headR').prepend('<li class="yyy">您好,<a href="">' + getCookie('texts') + '</a></li>')
    }

}
fn();

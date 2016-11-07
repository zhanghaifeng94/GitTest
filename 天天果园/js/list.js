
    $.ajax({
        type: 'get',
        url: "../json/list.json",
        dataType: 'JSON',
        asyne: true,
        success: function (data) {
            var num = data.length
            for (var i = 0; i < num; i++) {
                var html = '<li><div><div class="l_img"><a><img src="' + data[i].images + '"></a></div></div><div class="l_info">' + data[i].name + '<span>' + data[i].price + '</span></div><div class="num"><div class="number"><span>' + data[i].number + '</span></div><div class="iconfont caer">' + data[i].caer + '</div></div></li>'
                $('.lis').append(html)
            }
        }
    })

getCookie('texts')
function fn() {
    if (document.cookie=='texts') {
        $('#headR').find('li').eq(0).remove('li')
        $('#headR').prepend('<li class="yyy">您好,<a href=""> '+ getCookie('texts') + '</a></li>')
    }
}
fn();
var tel = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
var passw = /^[a-z,A-Z]\w{6,20}$/;
var reg = true;
$('.texts').blur(function () {
    if (!(tel.test($(this).val()))) {
        $('.aq s').addClass('error')
    } else {
        $('.aq s').removeClass('error')
        $('.aq s').addClass('icons')
    }
})
$('.pasw').blur(function () {
    if (!(passw.test($(this).val()))) {
        $('.aw s').addClass('error')
    } else {
        $('.aw s').removeClass('error')
        $('.aw s').addClass('icons')
    }
})
$('.pawo').blur(function () {
    if ($(this).val() != $('.pasw').val()) {
        $('.ae s').addClass('error')
    } else {
        $('.ae s').removeClass('error')
        $('.ae s').addClass('icons')
    }
})

function testStr(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 100);
        if (num >= 0 && num <= 9) {
            arr.push(num);
        } else if (num >= 10 && num <= 35) {
            arr.push(String.fromCharCode(num + 87));
        } else if (num >= 65 && num <= 90) {
            arr.push(String.fromCharCode(num));
        } else {
            i--;
            continue;
        }
    }
    return arr.join("");
}
$('#idcode').html(testStr(4));
$('#idcode').click(function () {
    $(this).html(testStr(4));
})
$('.ar i').click(function () {
    $('#idcode').html(testStr(4));
})
$('.code').blur(function () {

    if ($(this).val() != $('#idcode').html()) {
        $('.ar s').addClass('error')
        $('#idcode').html(testStr(4));
    } else {
        $('.ar s').removeClass('error')
        $('.ar s').addClass('icons')
    }
})
$('.btn1').click(function () {

    if (!(tel.test($('.texts').val())) || !(passw.test($('.pasw').val())) || $('.pawo').val() != $('.pasw').val() || !(passw.test($('.pawo').val())) || $('.ar input').val() != $('#idcode').html()) {
        if (!(tel.test($('.texts').val()))) {
            alert('无效的手机号')
        } else if (!(passw.test($('.pasw').val()))) {
            alert('密码格式错误')
        } else if ($('.pawo').val() != $('.pasw').val()) {
            alert('俩次密码不一致')
        } else if ($('.ar input').val() != $('#idcode').html()) {
            alert('验证码错误')
        }
    } else {
        alert('注册成功');
        window.location.href = 'login.html'
        setCookie('texts',$('.texts').val(),6)
        setCookie('passWord',$('.pasw').val(),6)
    }
})
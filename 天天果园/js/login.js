var chBox = true;
$('.btn1').click(function () {
    if ($('.usname').val() == getCookie('texts') && $('.passw').val() == getCookie('passWord')) {
        alert('登录成功')
        window.location.href = '../index.html'
    }else{
        alert('手机号或密码错误')
    }
})
$('.chBox').click(function () {
    if ($(".chBox").is(":checked")) {
        $('.usname').val(getCookie('texts'))
        $('.passw').val(getCookie('passWord'))
    } else {
        $('.usname').val(null)
        $('.passw').val(null)
    }
})
console.log(getCookie('texts'))
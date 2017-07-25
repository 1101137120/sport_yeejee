function checkCookie() {
    if ($.cookie('logCookie')) {
        window.location.href = 'member/index.html'; // 3/20 0916成功跳轉
    }
}
/*
============================================================================
檢查是否有cookie，如果沒有就跳回首頁
============================================================================
*/

/*
============================================================================
登入頁面
============================================================================
*/
var url = 'http://35.167.221.25:8080/';
//使用 userlogin 取得登入資料，這裡單純 ajax 登入後取得 userName token 資料
function userLogin(cb) {
    var $userNameLogin = $('#userLogInName').val();
    var $passwordLogin = $('#userLogInPassword').val()
    $.ajax({
        type: 'POST',
        url: url + 'login2Server',
        dataType: 'json',
        data: {
            username: $userNameLogin,
            password: $passwordLogin
        },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function (data) {
            console.log(data);
            if (data.result === 'false') {
                var errorMsg = '';
                errorMsg += '<p>找不到您的帳戶資料，如您已申請過帳戶，請通知管理員或前往 ';
                errorMsg += '<a data-dismiss="modal" data-toggle="modal" href="#signup"> 註冊</a></p>';
                $('.errorMsg').html(errorMsg);
                $('#login').on('hidden.bs.modal', function () {
                    $('#userLogInName').val('');
                    $('#userLogInPassword').val('')
                    $('.errorMsg').html('');
                })
            } else {
                loginData = {
                    userName: $userNameLogin,
                    token: data.data.token
                }
                cb(null, loginData)
            }
        })
}
// 取得 user 的個人資料，當 user 登入後會先抓一次 profileGet api ，如果個人資料有 null 時會再導入 profileSet
// api ，讓 user 去設定個人資料 反之直接登入
function getProfile() {
    userLogin(function (err, loginData) {
        console.log(loginData);
        $.cookie('logCookie', JSON.stringify(loginData), {
            expires: 7,
            path: '/'
        });
        console.log($.cookie('logCookie'));
        $
            .ajax({
                type: 'POST',
                url: url + 'api/profileGet',
                dataType: 'json',
                data: {
                    username: loginData.userName,
                    token: loginData.token
                }
            })
            .done(function (data) {
                console.log(data);
                //取得個人資料後判斷是否有基本資料，如果沒有就進到 if 裡設定個人資料
                if (data.data.detail[0].userID === null) {
                    $("#login").modal('hide');
                    $('#information').modal('show');
                } else { // if over
                    // window.location.href = 'member/index.html';
                }
            })
        //profileGet api 後有 null 時的輸入個人資料表單
        $('#informationForm').on('submit', function () {
            var userSex = $("input[type='radio'][name='uSex']:checked").val();
            var username = loginData.userName;
            var token = loginData.token;
            //讓使用者輸入他的個人資料
            $.ajax({
                type: 'POST',
                url: url + 'api/profileSet',
                dataType: 'json',
                data: {
                    username: username,
                    uAge: $('#uAge').val(),
                    uHeight: $('#uHeight').val(),
                    uWeight: $('#uWeight').val(),
                    uSex: userSex,
                    token: token
                },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    }
                })
                .done(function (data) {
                    console.log(data);
                    if (data.result === 'true') {
                        window.location.href = 'member/index.html';
                        //因 api 的年齡格式長度為 2 ，故加個判定
                    } else if (data.result === 'false' && data.data.error.code === 'ER_DATA_TOO_LONG') {
                        var errorMsg = '';
                        errorMsg += '年齡輸入錯誤 ex：30'
                        $('.errorMsg').html(errorMsg);
                    }
                })
                .fail(function (xhr) {
                    alert('error');
                    console.log(xhr.responseText);
                })
            return false;
        })
    })
}

$('#userLogInForm')
    .submit(function () {
        getProfile();

        return false;
    });
// user 輸入完整的帳號密碼後，登入的 button 才可以按
$('#userLogInForm').on('focus input', function () {
    if ($('#userLogInName').val() !== '' && $('#userLogInPassword').val() !== '') {
        $('#userLogInForm :input[type="submit"]').prop('disabled', false);
    } else {
        $('#userLogInForm :input[type="submit"]').prop('disabled', true);
        $('.errorMsg').html('');
    }
})
// user 輸入完整的個人資料後開啟 button 按鈕
$('#informationForm').on('focus input', function () {
    if ($('#uAge').val() !== '' && $('#uHeight').val() !== '' && $('#uWeight').val() !== '') {
        $('#informationForm :input[type="submit"]').prop('disabled', false);
        //因 api 的年齡格式長度為 2 ，故加個判定
        if ($('#uAge').val().length <= 2 || $('#uAge').val() === '') {
            $('.errorMsg').html('');
        }
    } else {
        $('#informationForm :input[type="submit"]').prop('disabled', true);
    }
})
/*
============================================================================
登入頁面
============================================================================
*/
/*
============================================================================
註冊頁面
============================================================================
*/

//這裡單純 ajax 註冊，完成後去信箱收信
function userSignUp(cb) {
    var $userNameSignUp = $('#username').val();
    var $passwordSignUp = $('#password').val();
    $.ajax({
        type: 'POST',
        url: url + 'signupTemp',
        dataType: 'json',
        data: {
            username: $userNameSignUp,
            password: $passwordSignUp
        },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function (data) {
            console.log(data)
            var signUpMsg = '';
            if (data.result === 'success' && data.method === 'email send') {
                signUpMsg += '帳戶已申請成功';
                $('.signUpDone').html(signUpMsg);
                $('.signUpMsg').html('');
                cb(null, data);
                $('#signup').on('hidden.bs.modal', function () {
                    $('#username').val('');
                    $('#password').val('');
                    $('.signUpDone').html('');
                })
            } else if (data.result === 'false' && data.data.event === 'userName already used') {
                signUpMsg += '此帳號已被使用';
                $('.signUpMsg').html(signUpMsg);
                $('.signUpDone').html('');
            } else {
                cb(null, data)
            }

        })
}

$('#userSignUpForm')
    .on('focus input', function () {
        if ($('#username').val() === '') {
            $('.signUpMsg').html('');
            $('.signUpDone').html('');
            $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
        } else {
            $('#userSignUpForm :input[type="submit"]').prop('disabled', false);
        }
    })
$('#userSignUpForm').submit(function () {
    userSignUp(function (err, data) {
        console.log(data);
    })
    return false;
})
/*
============================================================================
註冊頁面
============================================================================
*/
$(function () {
    $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
    $('#userLogInForm :input[type="submit"]').prop('disabled', true);
    $('#informationForm :input[type="submit"]').prop('disabled', true);
});
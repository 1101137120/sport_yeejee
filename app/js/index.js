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
var url = 'http://34.216.81.49:9005/';


$(document).ready(function() {

    //$("#vid").get(0).play();
    var herovide = document.getElementById('vid');
    herovide.play();
    herovide.autoplay = true;
    //  herovide.load();
    window.fbAsyncInit = function() {
        FB.init({
            appId: '1700561416915068',
            cookie: false, // enable cookies to allow the server to access 
            // the session
            xfbml: false, // parse social plugins on this page
            status: false, // parse social plugins on this page
            version: 'v2.8' // use graph api version 2.8
        });

        /*  FB.getLoginStatus(function(response) {
              statusChangeCallback(response);
          });*/
        $('.service-icon').on('mouseenter', function() {
            $(this).attr('style', 'border-color:#55ce53');


        }).mouseleave(function() {
            $(this).attr('style', 'border-color:#ececec');
        })


        $('#LogIN').on('click', function() {

            /*  $("#LogIN").css({ "visibility": "hidden" });
              $("#CreateAccount").attr('style', 'visibility: hidden');
              $(".sssss").removeAttr('style', 'visibility: hidden');*/

            var clickLogIN = "<div class='sssss col-md-12 col-centered' >" +
                "<h2>Login</h2>" +

                "<div class='login-facebook text-left loginFBStatus radiusFB-button' style='border-radius: 50px; '>" +
                "<i class='fab fa-facebook-f'></i>" +
                "<span>login with facebook</span>" +
                "</div>" +

                "<p class='or'> OR </p>" +

                "<input type='text' class='form-control radiusB-Text' id='userid' name='userid' placeholder='username'>" +

                "<input type='password' class='form-control radiusB-Text' id='password' name='password' placeholder='password'>" +
                "<br>" +
                "<button type='submit' class='btn  btn-block radiusorange-button'>Login</button>" +
                "</div>";
            $('.IndexLogINList').empty();
            $('.IndexLogINList').append(clickLogIN);

        })


        $('#CreateAccount').on('click', function() {

            /*  $("#LogIN").css({ "visibility": "hidden" });
              $("#CreateAccount").attr('style', 'visibility: hidden');
              $(".sssss").removeAttr('style', 'visibility: hidden');*/

            var clickLogIN = "<div class='sssss col-md-12 col-centered' >" +
                "<h2>Login</h2>" +

                "<div class='login-facebook text-left loginFBStatus radiusFB-button' style='border-radius: 50px; '>" +
                "<i class='fab fa-facebook-f'></i>" +
                "<span>login with facebook</span>" +
                "</div>" +

                "<p class='or'> OR </p>" +
                "<div class='row'>" +
                "<div class='col-md-6'>" +
                "<input type='text' class='form-control radiusB-Text' id='FName' name='FName' placeholder='First Name'>" +
                "</div>" +
                "<div class='col-md-6'>" +
                "<input type='text' class='form-control radiusB-Text' id='LName' name='LName' placeholder='Last name'>" +
                "</div>" +
                "</div>" +
                "<div class='row'>" +
                "<div class='col-md-6'>" +
                "<input type='text' class='form-control radiusB-Text' id='uID' name='uID' placeholder='Username'>" +
                "</div>" +
                "<div class='col-md-6'>" +
                "<input type='text' class='form-control radiusB-Text' id='uPassword' name='uPassword' placeholder='Password'>" +
                "</div>" +
                "</div>" +
                "<input type='password' class='form-control radiusB-Text' id='EmailAddress' name='EmailAddress' placeholder='Email Address'>" +
                "<br>" +
                "<button type='submit' class='btn  btn-block radiusorange-button'>SIGN UP</button>" +
                "</div>";
            $('.IndexLogINList').empty();
            $('.IndexLogINList').append(clickLogIN);

        })


        $('.radiusorange-button').on('mouseenter', function() {
            $(this).css('background-color', '#ffba5a');
            $(this).css('border-color', '#ffba5a');

        }).mouseleave(function() {
            $(this).attr('background-color', '#fa9d1c');
            $(this).attr('border-color', '#fa9d1c');
        })


    };

    $('.loginFBStatus').on('click', function() {
        console.log('loginFBStatus');
        FB.login(function(response) {
            statusChangeCallback(response);
            console.log(response);
        }, {
            scope: 'public_profile,email,user_photos,user_birthday,user_location,user_gender'
        });
    });

    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            loginFB(response.authResponse.accessToken);
        } else {
            console.log("RTSEF");
            /*var popupWidth = 500;
            var popupHeight = 300;
            var xPosition = ($(window).width() - popupWidth) / 2;
            var yPosition = ($(window).height() - popupHeight) / 2;
            var loginUrl =
                "https://www.facebook.com/v2.8/dialog/oauth?client_id=1700561416915068&redirect_uri=http://www.ihoin.com/sportyeejeeDemo/app&scope=email%2Cuser_birthday%2Cuser_friends%2Cuser_location%2Cuser_gender%2Cuser_photos";
            window.location = loginUrl;
              var facebookLoginWindow = window.open(loginUrl, "LoginWindow",
                   "location=1,scrollbars=1," +
                   "width=" + popupWidth + ",height=" + popupHeight + "," +
                   "left=" + xPosition + ",top=" + yPosition);*/

            // The person is not logged into your app or we are unable to tell.
            document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
        }
    }

    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            console.log('Successful login for: ' + response.id);
            console.log('Successful login for: ' + response.token);
            document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
        });
    }
});


function loginFB(token) {
    var loginData = {
        uClientID: null,
        userName: null,
        token: null
    };
    //var showCookie = getCookie();
    console.log("fbINsert");
    $.ajax({
            type: 'POST',
            url: url + 'api/loginFB',
            dataType: 'json',
            data: {
                token: token
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {
            console.log(data);
            if (data.result) {
                loginData.userName = data.data.userName;
                loginData.uClientID = data.data.uClientID;
                loginData.token = data.data.token;
                $.cookie('logCookie', JSON.stringify(loginData), {
                    expires: 1,
                    path: '/'
                });
                $('#login').modal('toggle');
                checkCookie();
            }
        })

}

function checkLoginState() {


    //var showCookie = getCookie();
    console.log("sssssssaddads");
    $.ajax({
            type: 'GET',
            url: url + 'api/user',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {

        })

}
//使用 userlogin 取得登入資料，這裡單純 ajax 登入後取得 userName token 資料
function userLogin(cb) {
    var $userNameLogin = $('#userLogInName').val();
    var $passwordLogin = $('#userLogInPassword').val()
    var loginData = {
        uClientID: null,
        userName: null,
        token: null
    };
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
        .done(function(data) {
            console.log(data);
            var errorMsg = '';
            if (data.result === 'false') {
                if (data.data.event === 'password fail') {
                    errorMsg += '<p>密碼錯誤</p>';
                    $('.errorMsg').html('');
                    $('.errorPassword').html(errorMsg);
                } else {
                    errorMsg += '<p>找不到您的帳戶資料，如您已申請過帳戶，請通知管理員或前往 ';
                    errorMsg += '<a data-dismiss="modal" data-toggle="modal" href="#signup"> 註冊</a></p>';
                    $('.errorPassword').html('');
                    $('.errorMsg').html(errorMsg);
                }

                $('#login')
                    .on('hidden.bs.modal', function() {
                        $('#userLogInName').val('');
                        $('#userLogInPassword').val('')
                        $('.errorMsg').html('');
                    })
            } else {
                /*loginData = {
                    userName: $userNameLogin,
                    uClientID: data.data.uClientID,
                    token: data.data.token
                }*/
                loginData.userName = $userNameLogin;
                loginData.uClientID = data.data.uClientID;
                loginData.token = data.data.token;
                cb(null, loginData)
            }
        })
}
// 取得 user 的個人資料，當 user 登入後會先抓一次 profileGet api ，如果個人資料有 null 時會再導入 profileSet
// api ，讓 user 去設定個人資料 反之直接登入
function getProfile() {
    userLogin(function(err, loginData) {
        console.log(loginData);
        $
            .ajax({
                type: 'POST',
                url: url + 'api/profileGet',
                dataType: 'json',
                data: {
                    username: loginData.userName,
                    uClientID: loginData.uClientID,
                    token: loginData.token
                }
            })
            .done(function(data) {
                console.log(data);
                loginData = {
                    uClientID: data.data.detail[0].uClientID,
                    userName: loginData.userName,
                    token: loginData.token
                };
                console.log(loginData);
                $.cookie('logCookie', JSON.stringify(loginData), {
                    expires: 1,
                    path: '/'
                });
                console.log($.cookie('logCookie'));
                //取得個人資料後判斷是否有基本資料，如果沒有就進到 if 裡設定個人資料
                if (data.data.detail[0].uAge === null && data.data.detail[0].uHeight === null && data.data.detail[0].uWeight === null) {
                    $("#login").modal('hide');
                    $('#information').modal('show');
                } else {
                    window.location.href = 'member/index.html';
                }
            })
            //profileGet api 後有 null 時的輸入個人資料表單
        $('#informationForm').on('submit', function() {
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
                .done(function(data) {
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
                .fail(function(xhr) {
                    alert('error');
                    console.log(xhr.responseText);
                })
            return false;
        })
    })
}

$('#userLogInForm')
    .submit(function() {
        getProfile();

        return false;
    });
// user 輸入完整的帳號密碼後，登入的 button 才可以按
$('#userLogInForm').on('focus input', function() {
        if ($('#userLogInName').val() !== '' && $('#userLogInPassword').val() !== '') {
            $('#userLogInForm :input[type="submit"]').prop('disabled', false);
        } else {
            $('#userLogInForm :input[type="submit"]').prop('disabled', true);
            $('.errorMsg').html('');
        }
    })
    // user 輸入完整的個人資料後開啟 button 按鈕
$('#informationForm').on('focus input', function() {
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
        .done(function(data) {
            console.log(data)
            var signUpMsg = '';
            if (data.result === 'success' && data.method === 'email send') {
                signUpMsg += '帳戶已申請成功';
                $('.signUpDone').html(signUpMsg);
                $('.signUpMsg').html('');
                cb(null, data);
                $('#signup').on('hidden.bs.modal', function() {
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
    .on('focus input', function() {
        if ($('#username').val() === '') {
            $('.signUpMsg').html('');
            $('.signUpDone').html('');
            $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
        } else {
            $('#userSignUpForm :input[type="submit"]').prop('disabled', false);
        }
    })
$('#userSignUpForm').submit(function() {
        userSignUp(function(err, data) {
            console.log(data);
        })
        return false;
    })
    /*
    ============================================================================
    註冊頁面
    ============================================================================
    */
$(function() {
    $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
    $('#userLogInForm :input[type="submit"]').prop('disabled', true);
    $('#informationForm :input[type="submit"]').prop('disabled', true);
});
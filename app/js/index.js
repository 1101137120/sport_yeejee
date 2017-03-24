var checkCookie = function() {
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
註冊頁面
============================================================================
*/
$(function() {
    $('#userSignUpForm').submit(function() {
        $.ajax({
                type: 'POST',
                url: 'http://35.167.221.25:8080/signup',
                dataType: 'json',
                data: {
                    username: $('#username').val(),
                    password: $('#password').val()
                },
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true
            })
            .done(function(data) {
                console.log(data);
                if (data.result === "true") {
                    alert('註冊成功');
                    $("#signup").modal('hide');
                    var username = $('#username').val();
                    var password = $('#password').val();
                    //當註冊成功後把使用者的資料put到server
                    $.ajax({
                            type: 'POST',
                            url: 'http://35.167.221.25:8080/UserData/PUT/' + username,
                            dataType: 'json',
                            data: {
                                username: username,
                                password: password,
                                UserPassword: password,
                            },
                            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                            crossDomain: true,
                            xhrFields: {
                                withCredentials: true
                            }
                        })
                        .done(function(uData) {
                            console.log(uData);
                            $('#username').val('');
                            $('#password').val('');
                            $('#repassword').val('');
                            $('#userN').val('');
                            $('#userDate').val('');
                        })
                        .fail(function(xhr) {
                            alert('error');
                            console.log(xhr.responseText);
                        })
                    return false;
                }
            })
            .fail(function(xhr) {
                console.log(xhr.status);
                if (xhr.status == '400') {
                    alert('未輸入');
                    $('#username').val('');
                    $('#password').val('');
                } else if (xhr.status == '401') {
                    alert('帳號已註冊');
                    $('#username').val('');
                    $('#password').val('');
                    $('#repassword').val('');
                    $('#userN').val('');
                    $('#userDate').val('');
                }
            });
        return false;
    });
});
/*
============================================================================
註冊頁面
============================================================================
*/

/*
============================================================================
登入頁面
============================================================================
*/
$(function() {
    $('#userLogInForm').submit(function() {
        var username = $('#userLogInName').val();
        $.ajax({
                type: 'POST',
                url: 'http://35.167.221.25:8080/profile/' + username,
                dataType: 'json',
                data: {
                    username: $('#userLogInName').val(),
                    password: $('#userLogInPassword').val()
                },
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                }
            })
            .done(function(data) {
                console.log(data);
                data.data.UserPassword = $('#userLogInPassword').val();
                //成功登入後檢查個人資料是否有 null ，如果有的話就進入 if
                if (data.result === 'false' ||
                    data.data.uAge === null ||
                    data.data.uHeight === null ||
                    data.data.uWeight === null ||
                    data.data.uSex === null
                    ) {
                    $("#login").modal('hide');
                    $('#information').modal('show');
                    $('#informationForm').on('submit', function() {
                        var usex = $("input[type='radio'][name='uSex']:checked").val();
                        var username = $('#userLogInName').val();
                        //讓使用者輸入他的個人資料
                        $.ajax({
                                type: 'POST',
                                url: 'http://35.167.221.25:8080/UserData/PUT/' + username,
                                dataType: 'json',
                                data: {
                                    username: username,
                                    password: data.data.UserPassword,
                                    UserPassword: data.data.UserPassword,
                                    uAge: $('#uAge').val(),
                                    uHeight: $('#uHeight').val(),
                                    uWeight: $('#uWeight').val(),
                                    uSex: usex
                                },
                                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                                crossDomain: true,
                                xhrFields: {
                                    withCredentials: true
                                }
                            })
                            .done(function(uData) {
                                console.log(uData);
                                //輸入完使用者的個人資料後在新增到 server
                                if (uData.result === 'true') {
                                    $.ajax({
                                        type: 'POST',
                                        url: 'http://35.167.221.25:8080/profile/' + $('#userLogInName').val(),
                                        dataType: 'json',
                                        data: {
                                            username: $('#userLogInName').val(),
                                            password: data.data.UserPassword
                                        },
                                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                                        crossDomain: true,
                                        xhrFields: {
                                            withCredentials: true
                                        }
                                    }).done(function(userProfile) {
                                        //成功後存入cookie在跳轉到會員網頁
                                        userProfile.data.UserPassword = $('#userLogInPassword').val();
                                        $.cookie('logCookie', JSON.stringify(userProfile), { expires: 7 , path: '/' });
                                        console.log($.cookie('logCookie'));
                                        window.location.href = 'member/index.html'; // 3/20 0916成功跳轉
                                    }).fail(function(xhr) {
                                        console.log(xhr.status);
                                    })
                                    return false;
                                }
                            })
                            .fail(function(xhr) {
                                alert('error');
                                console.log(xhr.responseText);
                            })
                        return false;
                    })
                } else {
                    //如果個人資料沒有 null 就直接存入 cookie 後再跳轉到會員網頁
                    $.cookie('logCookie', JSON.stringify(data), { expires: 7 , path: '/' });
                    console.log($.cookie('logCookie'));
                    window.location.href = 'member/index.html';// 3/20 0916成功跳轉
                }


            })
            .fail(function(xhr) {
                console.log(xhr.status);
                if (xhr.status == '400') {
                    alert('未輸入');
                    $('#username').val('');
                    $('#password').val('');
                } else if (xhr.status == '401') {
                    alert('帳號或密碼有誤');
                } else if (xhr.status == '404') {
                    alert('未輸入');
                }
            });
        return false;
    });
});

/*
============================================================================
登入頁面
============================================================================
*/

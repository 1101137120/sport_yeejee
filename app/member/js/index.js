/*jshint esversion: 6 */
/*jshint loopfunc: true */
/*
=======================================================
進入畫面自動取得年紀錄
=======================================================
*/
$(window)
    .load(function () {
        if ($.cookie('logCookie')) {
            let jsonObj = JSON.parse($.cookie('logCookie'));
            console.log(jsonObj);
            $.ajax({
                type: 'POST',
                url: 'http://35.167.221.25:8080/api/checkToken',
                dataType: 'json',
                data: {
                    token: jsonObj.token,
                    username: jsonObj.userName
                },
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                xhrFields: {
                    withCredentials: true
                },
                    crossDomain: true
                })
                .done(function (uJsonObj) {
                    console.log(uJsonObj);
                })
                .fail(function (xhr) {})
        }
    });

$(function () {
    $('.logOut')
        .on('click', function () {
            $.removeCookie('logCookie', {
                expires: -1,
                path: '/'
            });
            console.log($.cookie('logCookie'));
            console.log($.removeCookie('logCookie'));
        });
});

let showProfile = function () {
    //先檢查是否有 cookie ，如果沒有就跳回登入頁面
    if ($.cookie('logCookie')) {
        let jsonObj = JSON.parse($.cookie('logCookie'));
        console.log(jsonObj);
        if (jsonObj.token) {
            $.ajax({
                type: 'POST',
                url: 'http://35.167.221.25:8080/api/profileGet',
                dataType: 'json',
                data: {
                    token: jsonObj.token,
                    username: jsonObj.userName
                },
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                xhrFields: {
                    withCredentials: true
                },
                    crossDomain: true
                })
                .done(function (data) {
                    console.log(data);
                    $('.showProfile').append('<p>姓名： ' + data.data.detail[0].userName + '</p><p>性別： ' + data.data.detail[0].uSex + '</p><p>年齡： ' + data.data.detail[0].uAge + '</p><p>身高： ' + data.data.detail[0].uHeight + '</p><p>體重： ' + data.data.detail[0].uWeight + '</p>');

                })
        }
    } else {
        window.location.href = '../index.html';
    }
};
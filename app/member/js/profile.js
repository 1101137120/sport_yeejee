/*jshint esversion: 6 */
/*jshint loopfunc: true */

// 取得 user 的 cookie
function getCookie() {
    const userData = JSON.parse($.cookie('logCookie'));
    return userData;
}
/*
=======================================================
進入畫面自動取得年紀錄
=======================================================
*/
var url = 'http://34.216.81.49:9005/';
// 會員登出 function
function userLogOut() {
    $('.logOut')
        .on('click', function() {
            $.removeCookie('logCookie', {
                expires: -1,
                path: '/'
            });
            console.log($.cookie('logCookie'));
            console.log($.removeCookie('logCookie'));
        });
}


function showProfile() {
    //先檢查是否有 cookie ，如果沒有就跳回登入頁面
    if ($.cookie('logCookie')) {
        let jsonObj = JSON.parse($.cookie('logCookie'));
        console.log(jsonObj);
        if (jsonObj.token) {
            $.ajax({
                    type: 'POST',
                    url: 'http://34.216.81.49:9005/api/profileGet',
                    dataType: 'json',
                    data: {
                        token: jsonObj.token,
                        username: jsonObj.userName,
                        uClientID: jsonObj.uClientID
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true
                })
                .done(function(data) {
                    console.log(data);
                    $('.showProfile').append('<p>姓名： ' + data.data.detail[0].userName +
                        '</p><p>性別： ' + data.data.detail[0].uSex +
                        '</p><p>年齡： ' + data.data.detail[0].uAge +
                        '</p><p>身高： ' + data.data.detail[0].uHeight +
                        '</p><p>體重： ' + data.data.detail[0].uWeight +
                        '</p>');
                    if (data.data.detail[0].uSex = "M") {
                        $("#Mradio").attr('checked', 'checked');
                    } else if (data.data.detail[0].uSex = "F") {
                        $("#Fradio").attr('checked', 'checked');
                    } else {

                    }

                    $('#age').val(data.data.detail[0].uAge);
                    $('#height').val(data.data.detail[0].uHeight);
                    $('#weight').val(data.data.detail[0].uWeight);
                    $('#username').val(data.data.detail[0].userName);
                    $('#instagram').val(data.data.detail[0].uInstagram);
                    $('#facebook').val(data.data.detail[0].uFaceBook);
                    $('#twitter').val(data.data.detail[0].uTwitter);
                })
        }
    } else {
        window.location.href = '../index.html';
    }
};



function userDataSet() {
    //先檢查是否有 cookie ，如果沒有就跳回登入頁面
    if ($.cookie('logCookie')) {
        let jsonObj = JSON.parse($.cookie('logCookie'));
        console.log(jsonObj);
        if (jsonObj.token) {
            var Name = $('#username').val();
            var Sex = $('input:radio[name=gender]:checked').val();
            var Age = $('#age').val();
            var Height = $('#height').val();
            var Weight = $('#weight').val();
            var NewPW = '00000000';
            var Twitter = $('#twitter').val();
            var FaceBook = $('#facebook').val();
            var Instagram = $('#instagram').val();
            var Country = $('#countrySelect').val();
            var Address = $('#Address').val();
            var TownCity = $('#TownCity').val();
            var ZipPostcode = $('#ZipPostcode').val();
            var PhoneNumber = $('#PhoneNumber').val();
            var ProfileStatus = $('#profileStatus').val();
            var LogBookStatus = $('#logbookStatus').val();
            console.log("jsonObj.uClientID" + jsonObj.uClientID);
            $.ajax({
                    type: 'POST',
                    url: 'http://34.216.81.49:9005/api/profileDataUpdate',
                    dataType: 'json',
                    data: {
                        token: jsonObj.token,
                        username: jsonObj.userName,
                        uClientID: jsonObj.uClientID,
                        Name: Name,
                        Sex: Sex,
                        Age: Age,
                        Height: Height,
                        Weight: Weight,
                        NewPW: NewPW,
                        Twitter: Twitter,
                        FaceBook: FaceBook,
                        Instagram: Instagram,
                        Country: Country,
                        Address: Address,
                        TownCity: TownCity,
                        ZipPostcode: ZipPostcode,
                        PhoneNumber: PhoneNumber,
                        ProfileStatus: ProfileStatus,
                        LogBookStatus: LogBookStatus
                    }
                })
                .done(function(data) {
                    console.log(data);
                    /*      $('.showProfile').append('<p>姓名： ' + data.data.detail[0].userName +
                              '</p><p>性別： ' + data.data.detail[0].uSex +
                              '</p><p>年齡： ' + data.data.detail[0].uAge +
                              '</p><p>身高： ' + data.data.detail[0].uHeight +
                              '</p><p>體重： ' + data.data.detail[0].uWeight +
                              '</p>');
                          if (data.data.detail[0].uSex = "M") {
                              $("#Mradio").attr('checked', 'checked');
                          } else if (data.data.detail[0].uSex = "F") {
                              $("#Fradio").attr('checked', 'checked');
                          } else {

                          }

                          $('#age').val(data.data.detail[0].uAge);
                          $('#height').val(data.data.detail[0].uHeight);
                          $('#weight').val(data.data.detail[0].uWeight);
                          $('#username').val(data.data.detail[0].userName);
                          $('#instagram').val(data.data.detail[0].uInstagram);
                          $('#facebook').val(data.data.detail[0].uFaceBook);
                          $('#twitter').val(data.data.detail[0].uTwitter);*/
                })
        }
    } else {
        window.location.href = '../index.html';
    }
};
var myChart = null;

function profileImage() {
    var form_data = new FormData();
    var showCookie = getCookie();
    var file_data = $("#input-b3").prop("files")[0];
    console.log("file_dataININNINININN");
    console.log("file_data" + file_data);
    form_data.append("username", showCookie.userName);
    form_data.append("token", "showCookie.token");
    form_data.append("img", file_data);
    $.ajax({
        type: "POST",
        url: url + 'uploadImg',
        dataType: "json",
        processData: false,
        contentType: false,
        data: form_data
    }).success(function(msg) {
        console.log(msg);
    }).fail(function(msg) {
        console.log(msg);
    });
}



$(document).ready(function() {

    userLogOut();
    showProfile();
    $("#uploadImg").click(function() {

        profileImage();
    });

    $("#updateUserData").click(function() {

        userDataSet();
    });



});
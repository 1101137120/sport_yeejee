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

var myChart = null;

function friendListData() {


    var showCookie = getCookie();
    //console.log(uRankID);
    $.ajax({
            type: 'POST',
            url: url + 'api/friendList/',
            dataType: 'json',
            data: {
                username: showCookie.userName,
                token: showCookie.token,
                uClientID: showCookie.uClientID
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {

            console.log(data.data.rows);

            var friendListData = "";
            for (var i = 0; i < data.data.rows.length; i++) {
                friendListData = friendListData + "<div class='row' id='" + data.data.rows[i].friendRankID + "'>";

                if (data.data.rows[i].uImagePhoto == null)
                    var img = "<i style='margin-left: 8px;' class='fas fa-user fa-4x'></i>";
                else
                    var img = "<img src='" + data.data.rows[i].uImagePhoto + "' alt='' class='img-responsive'>";
                friendListData = friendListData + "<div class='col-md-1' style='float:  left;margin:  10px;'><figure class='' style='padding: 2px;/* margin: 10px; *//* margin-right: 200px; */border: 1px solid #ccc;width:75px;height:75px;'>" + img + "</figure></div>";
                friendListData = friendListData + "<div class='col-md-4' style='margin: 15px;'><h4>" + data.data.rows[i].uCName + "</h4>" + data.data.rows[i].uCountry + "</p></div>";
                friendListData = friendListData + "<div class='col-md-3' style='margin:  15px;'><button   class='btn btn-xs btn-default Cancel' type='button''>Cancel</button><button class='btn btn-xs btn-default' type='submit'>Send Mail</button></div></div>";


            }

            console.log(friendListData);
            $('.friendDataListClass').append(friendListData);


            $('.Cancel').on('click', function() {

                friendDel($(this).parent().parent().attr("id"));
            });
        })

}


function searchUserDataR(uRankID) {


    var showCookie = getCookie();
    console.log(uRankID);
    $.ajax({
            type: 'POST',
            url: url + 'api/SearchUserDataByRankID',
            dataType: 'json',
            data: {
                username: showCookie.userName,
                token: showCookie.token,
                uClientID: showCookie.uClientID,
                RankID: uRankID
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {

            $('.alert').remove();
            if (data.data.rows) {
                $('.content').prepend('<div class="alert alert-success">A training partner request has been sent to ' + data.data.rows[0].uCName + '</div>');

            } else {
                $('.content').prepend('<div class="alert alert-danger" role="alert">This user does not exist!</div>');

            }
        })

}



function searchUserDataE(email) {


    var showCookie = getCookie();
    console.log(uRankID);
    $.ajax({
            type: 'POST',
            url: url + 'api/SearchUserDataByRankID',
            dataType: 'json',
            data: {
                username: showCookie.userName,
                token: showCookie.token,
                uClientID: showCookie.uClientID,
                Email: email
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {


            $('.alert').remove();
            if (data.data.rows) {
                $('.content').prepend('<div class="alert alert-success">A training partner request has been sent to ' + data.data.rows[0].uCName + '</div>');

            } else {
                $('.content').prepend('<div class="alert alert-danger" role="alert">This user does not exist!</div>');

            }

        })

}

function friendDel(fRankID) {


    var showCookie = getCookie();
    console.log(fRankID);
    $.ajax({
            type: 'POST',
            url: url + 'api/friendDataDel',
            dataType: 'json',
            data: {
                username: showCookie.userName,
                token: showCookie.token,
                uClientID: showCookie.uClientID,
                fRankID: fRankID
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {

            console.log(data);
            if (data.result == true) {
                location.replace(location.href);
            }

        })

}
$(document).ready(function() {

    userLogOut();
    var urldata = location.href;
    if (urldata.indexOf('?') != -1) {
        var uRankID = "";
        //在此直接將各自的參數資料切割放進ary中
        var ary = urldata.split('?')[1].split('&');

        //此時ary的內容為：
        //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'

        //下迴圈去搜尋每個資料參數
        for (i = 0; i <= ary.length - 1; i++) {
            //如果資料名稱為id的話那就把他取出來
            if (ary[i].split('=')[0] = 'uRankID')
                uRankID = ary[i].split('=')[1];
        }

    }


    $("#RankIDSearch").click(function() {

        searchUserDataR($("#RankID").val());
    });
    $("#EmailSearch").click(function() {

        searchUserDataE($("#Email").val());
    });



    friendListData();

});
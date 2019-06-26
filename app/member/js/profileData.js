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

function profileData(uRankID) {


    var showCookie = getCookie();
    console.log(uRankID);
    $.ajax({
            type: 'POST',
            url: url + 'api/RandIDUserData/' + uRankID,
            dataType: 'json',
            data: {
                username: showCookie.userName,
                token: showCookie.token,
                uClientID: showCookie.uClientID,
                uRankID: uRankID
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {

            console.log(data.data.detail);
            if (data.data.userData != null) {
                var userData = '<h2>' + data.data.detail[0].uCName + '</h2><p><strong>Age:</strong>' + data.data.detail[0].uAge + '<br>' +
                    '<strong>Country:</strong>' + data.data.detail[0].uCountry + '<br>' +
                    '<strong>Height:</strong>' + data.data.detail[0].uHeight + '<br>' +
                    '<strong>Weight:</strong>' + data.data.detail[0].uWeight + '<br>' +
                    '<strong>RankingID:</strong>' + data.data.detail[0].uRankingID + '<br>' +
                    '<strong>Birth:</strong>' + data.data.detail[0].uBirthD + '<br>' +
                    '</p>';
                var link = "";
                if (data.data.detail[0].uFaceBook) {
                    var linkFB = "<a href='" + data.data.detail[0].uFaceBook + "' class='btn btn-social-icon btn-instagram'><i class='fab fa-facebook-square fa-2x'></i></a>";
                    link = link + linkFB;
                }
                if (data.data.detail[0].uInstagram) {

                    var linkIG = "<a href='" + data.data.detail[0].uInstagram + "' class='btn btn-social-icon btn-instagram'><i class='fab fa-instagram fa-2x'></i></a>";
                    link = link + linkIG;
                }
                if (data.data.detail[0].uTwitter) {
                    var linkTW = "<a href='" + data.data.detail[0].uTwitter + "' class='btn btn-social-icon btn-instagram'><i class='fab fa-twitter-square fa-2x'></i></a>";
                    link = link + linkTW;
                }
                console.log("link" + link);
                if (link != "")
                    $('.social-links').append(link);

                $('.userData').append(userData);
                if (data.data.detail[0].uImagePhoto != null) {
                    var ImageData = "<img style='width: auto;height: auto;max-width:100%;max-height: 100%;' src='http://ec2-34-216-81-49.us-west-2.compute.amazonaws.com:9004/Member/Img/" + data.data.detail[0].uImagePhoto + "' alt='' class='img-responsive'>";

                    $('.profileImage').append(ImageData);
                }
            } else {
                $('.userData').append('User set data private');
            }

            if (data.data.logBookData != null) {
                for (var i = 0; i < data.data.logBookData.length; i++) {
                    var tabledata = '<tr><th>Date</th><th>Total Meters</th><th>Total Time</th></tr>';
                }

            }


        })

}


function profileEvetData(uRankID) {


    var showCookie = getCookie();
    console.log(uRankID);
    $.ajax({
            type: 'POST',
            url: url + 'api/rankProfileGET',
            dataType: 'json',
            data: {
                username: showCookie.userName,
                token: showCookie.token,
                uClientID: showCookie.uClientID,
                uRankID: uRankID
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {

            console.log(data.data.detail);
            if (data.data.userData != null)
                var userData = '<h2>' + data.data.detail[0].uCName + '</h2><p><strong>Age:</strong>' + data.data.detail[0].uAge + '<br>' +
                    '<strong>Country:</strong>' + data.data.detail[0].uCountry + '<br>' +
                    '<strong>Height:</strong>' + data.data.detail[0].uHeight + '<br>' +
                    '<strong>Weight:</strong>' + data.data.detail[0].uWeight + '<br>' +
                    '<strong>RankingID:</strong>' + data.data.detail[0].uRankingID + '<br>' +
                    '<strong>Birth:</strong>' + data.data.detail[0].uBirthD + '<br>' +
                    '</p>';

            var tabledata = '<tr><th>Date</th><th>Total Meters</th><th>Total Time</th></tr>';

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
    profileData(uRankID);

});
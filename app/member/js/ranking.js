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

function SearchRankData() {


    var showCookie = getCookie();
    var sportmechanical = $('input:radio[name=mechanical]:checked').val();
    var rowerType = $('#rowerType').val();
    /*if ($('#events').val().indexOf('m') != -1) {
        console.log("ssssss");
        var ary = $('#events').val().split('m');
        var eventMenter = ary[0];
    } else if ($('#events').val().indexOf('Minutes') != -1) {
        var ary = $('#events').val().split('Minutes');
        var eventTime = ary[0];
    }*/
    var eventValue = $('#events').val();

    var season = $('#season').val();
    if ($('#ageRange').val() == "") {
        var ageRangeMax = "";
        var ageRangeMin = "";
    } else if ($('#ageRange').val() == "custom") {
        var ageRangeMax = $('#customLow').val();
        var ageRangeMin = $('#customHigh').val();

    } else {

        if ($('#ageRange').val().indexOf('+') != -1) {
            var ary = $('#ageRange').val().split('+');
            var ageRangeMax = 200;
            var ageRangeMin = ary[0];
        } else {
            var ary = $('#ageRange').val().split('-');
            var ageRangeMax = ary[1];
            var ageRangeMin = ary[0];

        }


    }

    var weight = $('#weight').val();
    var sex = $('#gender').val();
    var country = $('#country_id').val();
    window.location = "./rankingsYA.html?sportmechanical=" + sportmechanical + "&rowerType=" + rowerType + "&eventValue=" + eventValue + "&season=" + season + "&ageRangeMax=" + ageRangeMax + "&ageRangeMin=" + ageRangeMin + "&weight=" + weight + "&sex=" + sex + "&country=" + country;

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


    $('#ageRange').on('change', function() {
        console.log($('#ageRange').val());
        if ($('#ageRange').val() == 'custom') {
            console.log($('#ageRange').val());
            $('#ageRange').parent().parent().after().append('<div class="form-group row" id="age_custom"><div class="col-sm-3 col-sm-offset-4"><label>Low:</label><input class="form-control" name="age-min" type="text" value=""></div><div class="col-sm-3"><label>High:</label><input class="form-control" name="age-max" type="text" value=""></div></div>');

        } else {
            if ($('#age_custom').length > 0) {
                $('#age_custom').remove();
            }
        }
    });

    $('#Search').on('click', function() {

        SearchRankData();
    });
    userLogOut();

});
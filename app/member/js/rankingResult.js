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


function showProfile(uRankID) {
    //先檢查是否有 cookie ，如果沒有就跳回登入頁面
    if ($.cookie('logCookie')) {
        let jsonObj = JSON.parse($.cookie('logCookie'));
        console.log(jsonObj);
        if (jsonObj.token) {
            $.ajax({
                    type: 'POST',
                    url: url + 'api/rankProfileGET',
                    dataType: 'json',
                    data: {
                        token: jsonObj.token,
                        username: jsonObj.userName,
                        uClientID: jsonObj.uClientID,
                        uRankID: uRankID
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true
                })
                .done(function(data) {

                    console.log(data);
                    $('.userData').empty();
                    var userData = '<h2>' + data.data.detail[0].uCName + '</h2><p><strong>Age:</strong>' + data.data.detail[0].uAge + '<br>' +
                        '<strong>Country:</strong>' + data.data.detail[0].uCountry + '<br>' +
                        '<strong>Height:</strong>' + data.data.detail[0].uHeight + '<br>' +
                        '<strong>Weight:</strong>' + data.data.detail[0].uWeight + '<br>' +
                        '<strong>RankingID:</strong><span id="RankingID">' + data.data.detail[0].uRankingID + '</span><br>' +
                        '<strong>Birth:</strong>' + data.data.detail[0].uBirthD + '<br>' +
                        '</p>';

                    $('.userData').append(userData);
                })
        }
    } else {
        window.location.href = '../index.html';
    }
};


function rankingData(sportmechanical, rowerType, eventValue, season, ageRangeMax, ageRangeMin, weight, sex, country) {
    console.log("ININ" + eventValue);
    var table = "";
    var showCookie = getCookie();
    if (eventValue > 60) {
        var columnsData = [{
                "data": null,
                "title": "序號",
            },
            {
                "data": "uCName",
                "title": "Name"
            },
            {
                "data": "uAge",
                "title": "Age"
            },
            {
                "data": "uCountry",
                "title": "Country"
            },
            {
                "data": "AvgTimeT",
                "title": "Time"
            }
        ];
    } else {
        var columnsData = [{
                "data": null,
                "title": "序號",
            },
            {
                "data": "uCName",
                "title": "Name",
                orderable: false, // 禁用排序
                render: function(data, type, row, meta) {
                    //row指的是資料列物件 data變數相等於row.sysid
                    return "<a href='javascript:void(0)' data-toggle='modal' data-target='#exampleModalLong' onclick=showProfile($(this).parent().parent().attr('id'));>" + data + "</i><a>";

                }
            },
            {
                "data": "uAge",
                "title": "Age"
            },
            {
                "data": "uCountry",
                "title": "Country"
            },
            {
                "data": "AvgDisT",
                "title": "Disance"
            }
        ];
    }

    table = $('#RankingTable').DataTable({
        "destroy": true, //这个如果不加的话不能够再次调用这个函数
        "ajax": function(data, callback, setting) {
            $.ajax({
                    type: 'POST',
                    url: url + 'api/rankingDataSearch',
                    dataType: 'json',
                    data: {
                        username: showCookie.userName,
                        token: showCookie.token,
                        uClientID: showCookie.uClientID,
                        sportmechanical: sportmechanical,
                        rowerType: rowerType,
                        eventValue: eventValue,
                        season: season,
                        ageRangeMax: ageRangeMax,
                        ageRangeMin: ageRangeMin,
                        weight: weight,
                        sex: sex,
                        country: country
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    }
                })
                .done(function(data) {
                    var result = {};
                    result.data = data.data.rows;
                    console.log(result);


                    console.log("columnsData" + columnsData);

                    callback(result);



                })
        },
        "columns": columnsData,
        "rowId": 'uRankingID'
    });



    table.on('draw.dt', function() {
        table.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            //i 从0开始，所以这里先加1

            i = i + 1;
            //服务器模式下获取分页信息，使用 DT 提供的 API 直接获取分页信息

            var page = table.page.info();
            //当前第几页，从0开始

            var pageno = page.page;
            //每页数据

            var length = page.length;
            //行号等于 页数*每页数据长度+行号

            var columnIndex = (i + pageno * length);
            cell.innerHTML = columnIndex;
        });


    });



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

    userLogOut();
    var urldata = location.href;
    if (urldata.indexOf('?') != -1) {
        var sportmechanical = "";
        var rowerType = "";
        var eventValue = "";
        var season = "";
        var ageRangeMax = "";
        var ageRangeMin = "";
        var weight = "";
        var sex = "";
        var country = "";
        //在此直接將各自的參數資料切割放進ary中
        var ary = urldata.split('?')[1].split('&');

        //此時ary的內容為：
        //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'

        //下迴圈去搜尋每個資料參數
        for (i = 0; i <= ary.length - 1; i++) {

            //如果資料名稱為id的話那就把他取出來
            if (ary[i].split('=')[0] == 'sportmechanical') {
                sportmechanical = ary[i].split('=')[1];
            } else if (ary[i].split('=')[0] == 'rowerType') {
                rowerType = ary[i].split('=')[1];
            } else if (ary[i].split('=')[0] == 'eventValue') {
                eventValue = ary[i].split('=')[1];
                console.log("eventValueDDDDDDDD" + eventValue);
            } else if (ary[i].split('=')[0] == 'season') {
                season = ary[i].split('=')[1];
            } else if (ary[i].split('=')[0] == 'ageRangeMax') {
                ageRangeMax = ary[i].split('=')[1];
            } else if (ary[i].split('=')[0] == 'ageRangeMin') {
                ageRangeMin = ary[i].split('=')[1];
            } else if (ary[i].split('=')[0] == 'weight') {
                weight = ary[i].split('=')[1];
            } else if (ary[i].split('=')[0] == 'sex') {
                sex = ary[i].split('=')[1];
            } else if (ary[i].split('=')[0] == 'country') {
                country = ary[i].split('=')[1];
            }



        }


    }
    rankingData(sportmechanical, rowerType, eventValue, season, ageRangeMax, ageRangeMin, weight, sex, country);

    $("#profileDetail").click(function() {

        window.location = "./profileData.html?rankID=" + $("#RankingID").text();
    });

});
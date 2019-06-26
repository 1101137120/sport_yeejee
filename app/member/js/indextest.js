/*jshint esversion: 6 */
/*jshint loopfunc: true */

// 取得 user 的 cookie
function getCookie() {
    if (!$.cookie('logCookie')) {
        const userData = false;
        return userData;
        // window.location.assign("../index.html")
    } else {
        const userData = JSON.parse($.cookie('logCookie'));
        return userData;
    }




}

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



function SeasonData(starttime, endtime, type) {
    var showCookie = getCookie();
    $.ajax({
            type: 'POST',
            url: url + 'api/rtInfoSum/' + showCookie.uClientID + '/' + starttime + '/' + endtime + '/' + type,
            dataType: 'json',
            data: {
                username: showCookie.userName,
                uClientID: showCookie.uClientID,
                token: showCookie.token
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        }).fail(function(err) {})
        .done(function(data) {
            var result = {};
            if (data.result == "false") {
                console.log("PPO");
                result.data = {
                    SportsInfoID: 0,
                    StartTime: "null",
                    calT: "null",

                    distT: "null",

                    eventType: "null",

                    sTimeT: "null"

                }
            } else {
                result.data = data.data.rows;
            }
            console.log(result.data);

            //   RowData.data = result.data;
            var aaa = "";
            for (var i = 0; i < result.data.length; i++) {
                result.data[i].page = parseInt(i / 10) + 1;
                if (result.data[i].page == 1) {
                    aaa = aaa + "<tr class='page" + result.data[i].page + "'>";

                } else {
                    aaa = aaa + "<tr class='page" + result.data[i].page + "' style='display:none;'>";
                }

                aaa = aaa + "<th scope='row'>" + result.data[i].StartTime + "</th>" +
                    "<td>" + result.data[i].sTimeT + "</td>" +
                    "<td>" + result.data[i].hrAvg + "</td>" +
                    "<td>" + result.data[i].eventType + "</td>" +
                    "<td>" + result.data[i].event + "</td>" +
                    "<td>" + result.data[i].state + "</td>" +
                    "<td><a href='#'><img src='../images/member/menu_2.png'></td>" +
                    "<td><a href='#'><img src='../images/member/delete_icon.png'></td>" +
                    "</tr>";

            }
            $('table tbody').append(aaa);

            $('.pagination a').click(function() {
                var aaa = "";
                var page = $(this).text();
                $('.pagination').find('a').each(function(i, el) {
                    $(el).toggleClass('active', false);
                });
                $(this).toggleClass('active', true);

                $('table tbody').find('tr').each(function(i, el) {

                    if ($(el).attr('class') == "page" + page)
                        $(el).attr('style', '');
                    else
                        $(el).attr('style', 'display:none');
                });
            });

        })
}

$(document).ready(function() {

    var RowData = {};
    var date = new Date();
    var nowyear = date.getFullYear();
    var starttime = nowyear + '-01-01';
    var endtime = nowyear + '-12-31';
    var tabledata = SeasonData(starttime, endtime, "all");



});
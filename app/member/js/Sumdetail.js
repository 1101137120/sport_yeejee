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


function getSportsInfoData() {
    var urldata = location.href;
    var showCookie = getCookie();
    if (urldata.indexOf('?') != -1) {
        var sportID = "";
        //在此直接將各自的參數資料切割放進ary中
        var ary = urldata.split('?')[1].split('&');

        //此時ary的內容為：
        //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'

        //下迴圈去搜尋每個資料參數
        for (i = 0; i <= ary.length - 1; i++) {
            //如果資料名稱為id的話那就把他取出來
            if (ary[i].split('=')[0] = 'sportID')
                sportID = ary[i].split('=')[1];
        }

    }
    $.ajax({
            type: 'POST',
            url: url + 'api/rtInfoSum/' + showCookie.uClientID + '/' + sportID + '',
            dataType: 'json',
            data: {
                SportsInfoID: sportID,
                uClientID: showCookie.uClientID,
                username: showCookie.userName,
                token: showCookie.token
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {
            console.log(data);
            var Sumdetail = "";
            Sumdetail = "<p><strong>Workout</strong><br>Indoor Rower</p><p>";
            /*   var tbodyData = "";
            var tableData = "";
            tableData = "<table id='example' class='table table-striped table-bordered' style='width:100%'><thead>" +
                "<tr role='row'>" +
                "<th class='sorting_asc' tabindex='0' aria-controls='example' rowspan='1' colspan='1' aria-label='Name: activate to sort column ascending' aria-sort='ascending' style='width: 258px;'>Name</th>" +
                "<th class='sorting' tabindex='0' aria-controls='example' rowspan='1' colspan='1' aria-label='Position: activate to sort column ascending' style='width: 399px;'>Position</th>" +
                "<th class='sorting' tabindex='0' aria-controls='example' rowspan='1' colspan='1' aria-label='Office: activate to sort column ascending' style='width: 199px;'>Office</th>" +
                "<th class='sorting' tabindex='0' aria-controls='example' rowspan='1' colspan='1' aria-label='Salary: activate to sort column ascending' style='width: 157px;'>Salary</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>";
*/
        })
}



function getRtInfoSumData() {
    var urldata = location.href;
    var showCookie = getCookie();
    if (urldata.indexOf('?') != -1) {
        var sportID = "";
        //在此直接將各自的參數資料切割放進ary中
        var ary = urldata.split('?')[1].split('&');

        //此時ary的內容為：
        //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'

        //下迴圈去搜尋每個資料參數
        for (i = 0; i <= ary.length - 1; i++) {
            //如果資料名稱為id的話那就把他取出來
            if (ary[i].split('=')[0] = 'sportID')
                sportID = ary[i].split('=')[1];
        }

    }
    $.ajax({
            type: 'POST',
            url: url + 'api/rtInfoSum/' + showCookie.uClientID + '/' + sportID + '',
            dataType: 'json',
            data: {
                SportsInfoID: sportID,
                uClientID: showCookie.uClientID,
                username: showCookie.userName,
                token: showCookie.token
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {
            console.log(data);
            var Sumdetail = "";
            Sumdetail = "<p><strong>Workout</strong><br>Indoor Rower</p><p>";
            /*var tbodyData = "";
            var tableData = "";
            tableData = "<table id='example' class='table table-striped table-bordered' style='width:100%'><thead>" +
                "<tr role='row'>" +
                "<th class='sorting_asc' tabindex='0' aria-controls='example' rowspan='1' colspan='1' aria-label='Name: activate to sort column ascending' aria-sort='ascending' style='width: 258px;'>Name</th>" +
                "<th class='sorting' tabindex='0' aria-controls='example' rowspan='1' colspan='1' aria-label='Position: activate to sort column ascending' style='width: 399px;'>Position</th>" +
                "<th class='sorting' tabindex='0' aria-controls='example' rowspan='1' colspan='1' aria-label='Office: activate to sort column ascending' style='width: 199px;'>Office</th>" +
                "<th class='sorting' tabindex='0' aria-controls='example' rowspan='1' colspan='1' aria-label='Salary: activate to sort column ascending' style='width: 157px;'>Salary</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>";
*/
        })
}


function getRtInfoGETData() {
    var urldata = location.href;
    var showCookie = getCookie();
    if (urldata.indexOf('?') != -1) {
        var sportID = "";
        //在此直接將各自的參數資料切割放進ary中
        var ary = urldata.split('?')[1].split('&');

        //此時ary的內容為：
        //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'

        //下迴圈去搜尋每個資料參數
        for (i = 0; i <= ary.length - 1; i++) {
            //如果資料名稱為id的話那就把他取出來
            if (ary[i].split('=')[0] = 'sportID')
                sportID = ary[i].split('=')[1];
        }

    }
    $.ajax({
            type: 'POST',
            url: url + 'api/rtInfotestjson/GET',
            dataType: 'json',
            data: {
                uClientID: showCookie.uClientID,
                SportsInfoID: sportID,
                username: showCookie.userName,
                token: showCookie.token
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(data) {
            console.log(data);
            var rtRPMArr = Array();
            var rtTime2Arr = Array();
            var iSPMArr = Array();
            for (var i = 0; i < data.data.rows.length; i++) {
                rtRPMArr.push(data.data.rows[i].rtRPM);
                rtTime2Arr.push(data.data.rows[i].rtTime2);
                iSPMArr.push(data.data.rows[i].iSPM);

            }
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: rtTime2Arr,
                    datasets: [{
                            label: "rtRPM",
                            data: rtRPMArr,
                            borderWidth: 3,
                            fill: false, //背景色，常用transparent透明
                            borderColor: 'rgba(75, 192, 192, 0.2)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)'
                        },
                        {
                            label: "iSPM",
                            data: iSPMArr,
                            borderWidth: 3,
                            fill: false,
                            borderColor: 'rgba(153, 102, 255, 1)',
                            backgroundColor: 'rgba(153, 102, 255, 1)'

                        }
                    ]
                },
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                maxTicksLimit: 10,
                            }

                        }]
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                }
            });
        })
}
$(document).ready(function() {
    userLogOut();
    getRtInfoSumData();
    getRtInfoGETData();
});
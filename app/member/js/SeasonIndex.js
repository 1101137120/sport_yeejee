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

function rtInfoDel(sportID) {
    var showCookie = getCookie();
    $.ajax({
            type: 'POST',
            url: url + 'api/rtInfoSumTypeUpdate/',
            dataType: 'json',
            data: {
                SportsInfoID: sportID,
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
            console.log(data);
        })

}



function SeasonData2(starttime, endtime, type, datatable) {
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
            datatable.clear();
            datatable.rows.add(result.data);
            datatable.draw();
        })
}


function SeasonData(starttime, endtime, type) {

    var showCookie = getCookie();
    var table = $('#example').DataTable({
        "destroy": true, //这个如果不加的话不能够再次调用这个函数
        "ajax": function(data, callback, setting) {
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
                    callback(result);
                })
        },
        "columns": [{
                "data": null,
                "title": "序號",
            },
            {
                "data": "StartTime",
                "title": "開始時間"
            },
            {
                "data": "sTimeT",
                "title": "時間"
            },
            {
                "data": "distT",
                "title": "總距離"
            },
            {
                "data": "calT",
                "title": "總卡洛里"
            },
            {
                //這裡的data變數值為sysid，相等於row.sysid
                data: "SportsInfoID", //資料行繫結屬性
                orderable: false, // 禁用排序
                render: function(data, type, row, meta) {
                    //row指的是資料列物件 data變數相等於row.sysid
                    return "<a style='margin:10px;' href='/sportyeejeeDemo/app/member/Sumdetail.html?sportID=" + data + "'><i class='Sumdetail fas fa-address-card'></i><a><a style='margin:10px;' onclick='rtInfoDel(" + data + ")'><i class='Sumdetail far fa-times-circle'></i><a>";

                }
            },
            {
                //這裡的data變數值為sysid，相等於row.sysid
                "data": "eventType", //資料行繫結屬性
                "hidden": true
            }
        ]
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

        table.column(6).visible(false);



    });


    var radioButton = "<div class='col-md-6 col-md-offset-5'><div class='btn-group' data-toggle='buttons'>" +
        "<label class='btn btn-primary active'>" +
        "<input type='radio' name='options' id='option1' autocomplete='off'  value='all'> ALL" +
        "</label>" +
        "<label class='btn btn-primary'>" +
        "<input type='radio' name='options' id='option2' autocomplete='off' value='0'> Just Now" +
        "</label>" +
        "<label class='btn btn-primary'>" +
        "<input type='radio' name='options' id='option3' autocomplete='off' value='1'> Time" +
        "</label>" +
        "<label class='btn btn-primary'>" +
        "<input type='radio' name='options' id='option3' autocomplete='off' value='2'> Distance" +
        "</label>" +
        "<label class='btn btn-primary'>" +
        "<input type='radio' name='options' id='option3' autocomplete='off' value='3'> Calorie" +
        "</label>" +
        "</div>" +
        "</div>";

    $("#example_wrapper :eq(0)").append(radioButton);
    $("input[type=radio]").change(function() {

        SeasonData2(starttime, endtime, $(this).val(), table);

    });

    return table;
}
$(document).ready(function() {


    $("#MonthFilter").click(function() {

        alert($('#sel1').val());

        SeasonData($('#monthlySTime').data("DateTimePicker").date().format('YYYY-MM'), $('#monthlyETime').data("DateTimePicker").date().format('YYYY-MM'), "all");
    });


    userLogOut();

    console.log("location.href" + location.href);
    var date = new Date();
    var nowyear = date.getFullYear();
    var starttime = nowyear + '-01-01';
    var endtime = nowyear + '-12-31';
    var tabledata = SeasonData(starttime, endtime, "all");




});
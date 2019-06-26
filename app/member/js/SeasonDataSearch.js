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
//取得整年份的運動資料

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

function SeasonData(starttime, endtime, apiselect) {

    var showCookie = getCookie();
    var date = new Date();
    var TotaldistT = Array();
    var TotalsTimeT = Array();
    var TotalcalT = Array();
    var TotalMonth = Array();
    var OveralldisT = 0;
    var OverallcalT = 0;
    var OverallsTimeT = 0;
    var AvedisT = 0;
    var AvecalT = 0;
    var AvesTimeT = 0;
    var tabledata = '<tr><th>Month</th><th>Total Meters</th><th>Total Time</th></tr>';
    console.log("111111111111");
    $.ajax({
            type: 'POST',
            url: url + 'api/rtInfoSum/' + showCookie.uClientID + '/' + apiselect + '/' + starttime + '/' + endtime + '',
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
        })
        .done(function(data) {
            console.log(data);
            if (data.data.rows.length != 0) {
                $('.Monthlytable tbody').empty();
                for (var i = 0; i < data.data.rows.length; i++) {
                    TotaldistT.push(data.data.rows[i].TotalDIS);
                    OveralldisT = OveralldisT + data.data.rows[i].TotalDIS;
                    TotalsTimeT.push(data.data.rows[i].TotalsTimeT);
                    OverallsTimeT = OverallsTimeT + data.data.rows[i].TotalsTimeT;
                    TotalcalT.push(data.data.rows[i].TotalcalT);
                    OverallcalT = OverallcalT + data.data.rows[i].TotalcalT;
                    if (apiselect == 'yearly') {
                        TotalMonth.push(data.data.rows[i].year);
                        tabledata = tabledata + '<tr><td>' + data.data.rows[i].year + '</td><td>' + data.data.rows[i].TotalDIS + 'm</td><td>' + sec_to_time(data.data.rows[i].TotalsTimeT); + '</td></tr>';
                    } else if (apiselect == 'monthly') {
                        TotalMonth.push(data.data.rows[i].year + "/" + data.data.rows[i].month);
                        tabledata = tabledata + '<tr><td>' + data.data.rows[i].year + "/" + data.data.rows[i].month + '</td><td>' + data.data.rows[i].TotalDIS + 'm</td><td>' + sec_to_time(data.data.rows[i].TotalsTimeT) + '</td></tr>';
                    } else if (apiselect == 'weekly') {
                        TotalMonth.push(data.data.rows[i].week);
                        tabledata = tabledata + '<tr><td>' + data.data.rows[i].week + '</td><td>' + data.data.rows[i].TotalDIS + 'm</td><td>' + sec_to_time(data.data.rows[i].TotalsTimeT) + '</td></tr>';
                    }

                }
                AvedisT = OveralldisT / data.data.rows.length;
                AvesTimeT = OverallsTimeT / data.data.rows.length;
                AvecalT = OverallcalT / data.data.rows.length;

            }

            tabledata = tabledata + '<tr><td>Overall</td><td>' + OveralldisT + 'm</td><td>' + sec_to_time(OverallsTimeT) + '</td></tr>' +
                '<tr><td>Monthly Average</td><td>' + AvedisT + 'm</td><td>' + sec_to_time(AvesTimeT) + '</td></tr>';
            $('.Monthlytable tbody').append(tabledata);

            if (myChart != null) {
                console.log("NOTNULL");
                $('#canvasDiv').empty();
                $('#canvasDiv').append('<canvas id="myChart"></canvas>');
                /* myChart.data.datasets[0].data = TotaldistT;
                 myChart.data.datasets[1].data = TotalcalT;
                 myChart.data.labels = TotalMonth;
                 myChart.update();*/
            }
            var ctx = document.getElementById("myChart").getContext('2d');
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: TotalMonth,
                    datasets: [{
                            label: "TotaldistT",
                            data: TotaldistT,
                            yAxisID: 'TaotaldistTGroup',
                            borderWidth: 3,
                            fill: false, //背景色，常用transparent透明
                            borderColor: 'rgba(75, 192, 192, 0.2)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)'
                        },
                        {
                            label: "TotalcalT",
                            data: TotalcalT,
                            yAxisID: 'TaotalcalTGroup',
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

                        }],
                        yAxes: [{
                                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance  
                                position: 'left',
                                id: 'TaotaldistTGroup',
                                ticks: {
                                    beginAtZero: true
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: '總時間(%)'
                                }
                            },
                            {
                                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance  
                                position: 'right',
                                id: 'TaotalcalTGroup',
                                gridLines: {
                                    drawOnChartArea: false, // only want the grid lines for one axis to show up  
                                },
                                ticks: {
                                    beginAtZero: true
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: '卡洛里(卡)'
                                }
                            }
                        ]
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                }
            });

            return data.data.rows;
        })
}
$(document).ready(function() {
    $("#MonthFilter").click(function() {

        alert($('#sel1').val());

        SeasonData($('#monthlySTime').data("DateTimePicker").date().format('YYYY-MM'), $('#monthlyETime').data("DateTimePicker").date().format('YYYY-MM'), $('#sel1').val());
    });


    userLogOut();

    console.log("location.href" + location.href);
    var date = new Date();
    var nowyear = date.getFullYear();
    var starttime = nowyear + '-01-01';
    var endtime = nowyear + '-12-31';
    var type = 0;
    var apiselect = $('#sel1').val();
    var nowMonth = parseInt(date.getMonth());

    /*console.log("nowMonth" + nowMonth);
    if (nowMonth.length != 2) {
        nowMonth = "0" + nowMonth;
    } else if (nowMonth == 0) {
        nowyear = nowyear - 1;
        nowMonth = 12;
    }
    type = 1;
    starttime = nowyear + '-' + nowMonth + '-01';
    endtime = nowyear + '-' + nowMonth + '-31';*/
    $('#monthlySTime').datetimepicker({
        viewMode: 'years',
        format: 'YYYY-MM'
    });
    $('#monthlyETime').datetimepicker({
        viewMode: 'years',
        format: 'YYYY-MM',
        useCurrent: false
    });

    $("#monthlySTime").on("dp.change", function(e) {
        $('#monthlyETime').data("DateTimePicker").minDate(e.date);
    });
    $("#monthlyETime").on("dp.change", function(e) {
        $('#monthlySTime').data("DateTimePicker").maxDate(e.date);
    });
    SeasonData(starttime, endtime, apiselect);
});

var sec_to_time = function(s) {
    var t;
    if (s > -1) {
        var hour = Math.floor(s / 3600);
        var min = Math.floor(s / 60) % 60;
        var sec = s % 60;
        if (hour == 0)
            hour = "";
        else if (hour < 10)
            hour = "0" + hour + ":";
        else
            hour = hour + ":";

        if (min == 0)
            min = "00:";
        else if (min == 0 && hour == 0)
            min = "";
        else if (min < 10)
            min = "0" + min + ":";
        else
            min = min + ":";

        if (sec == 0)
            sec = "00";
        else if (hour == 0 && min == 0 && sec == 0)
            sec = "0";
        else if (sec < 10)
            sec = "0" + sec;
        else
            sec = sec;

        t = hour + min + sec;

    }
    return t;
}
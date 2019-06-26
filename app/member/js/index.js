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
function getAllData(cb) {
    var showCookie = getCookie();
    $.ajax({
            type: 'POST',
            url: url + 'api/rtInfoSum/' + showCookie.uClientID + '/2017-01-01/2017-12-31',
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
            cb(null, data);
        })
}

//取得每個月份的所有運動資料
function getAllSportData() {
    var showCookie = getCookie();
    $('.showYear').append('<h1>年紀錄</h1>');
    getAllData(function(err, data) {
        if (err) {
            console.log(err)
        }
        console.log(data);
        let janData = {
            mile: 0,
            data: []
        };
        let febData = {
            mile: 0,
            data: []
        };
        let marData = {
            mile: 0,
            data: []
        };
        let aprData = {
            mile: 0,
            data: []
        };
        let mayData = {
            mile: 0,
            data: []
        };
        let junData = {
            mile: 0,
            data: []
        };
        let julData = {
            mile: 0,
            data: []
        };
        let augData = {
            mile: 0,
            data: []
        };
        let sepData = {
            mile: 0,
            data: []
        };
        let octData = {
            mile: 0,
            data: []
        };
        let novData = {
            mile: 0,
            data: []
        };
        let decData = {
            mile: 0,
            data: []
        };
        for (var i in data.data.rows) {
            switch (data.data.rows[i].StartTime.slice(5, 7)) {
                case '01':
                    janData.data.push(data.data.rows[i]);
                    janData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '02':
                    febData.data.push(data.data.rows[i]);
                    febData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '03':
                    marData.data.push(data.data.rows[i]);
                    marData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '04':
                    aprData.data.push(data.data.rows[i]);
                    aprData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '05':
                    mayData.data.push(data.data.rows[i]);
                    mayData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '06':
                    junData.data.push(data.data.rows[i]);
                    junData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '07':
                    julData.data.push(data.data.rows[i]);
                    julData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '08':
                    augData.data.push(data.data.rows[i]);
                    augData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '09':
                    sepData.data.push(data.data.rows[i]);
                    sepData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '10':
                    octData.data.push(data.data.rows[i]);
                    octData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '11':
                    novData.data.push(data.data.rows[i]);
                    novData.mile += parseInt(data.data.rows[i].distT);
                    break;
                case '12':
                    decData.data.push(data.data.rows[i]);
                    decData.mile += parseInt(data.data.rows[i].distT);
                    break;
            }
        }
        const allMonthData = {
            janData,
            febData,
            marData,
            aprData,
            mayData,
            junData,
            julData,
            augData,
            sepData,
            octData,
            novData,
            decData
        }
        const getMonthMileTotal = [
            janData.mile, febData.mile, marData.mile, aprData.mile, mayData.mile, junData.mile,
            julData.mile, augData.mile, sepData.mile, octData.mile, novData.mile, decData.mile
        ]
        console.log(getMonthMileTotal);
        console.log(allMonthData);
        let chartdata = {
            labels: [
                "一月", "二月", "三月", "四月", "五月", "六月",
                "七月", "八月", "九月", "十月", "十一月", "十二月"
            ],
            datasets: [{
                label: 'Mile',
                backgroundColor: 'rgba(200,200,200,0.9)',
                borderColor: 'rgba(200,200,200,0.75)',
                hoverBackgroundColor: 'rgba(200,200,200,1)',
                hoverBorderColor: 'rgba(200,200,200,1)',
                animationEasing: "easeOutQuart",
                data: getMonthMileTotal
            }]
        }; //chartdata 結束

        let canvas = document.getElementById("mycanvas");
        let ctx = canvas.getContext("2d");
        let myNewChart = new Chart(ctx, {
            type: 'bar',
            data: chartdata
        });
        canvas.onclick = function(evt) {
            let activePoints = myNewChart.getElementsAtEvent(evt);
            let chartData = activePoints[0]['_chart'].config.data;
            let idx = activePoints[0]['_index'];
            let label = chartData.labels[idx];
            let value = chartData.datasets[0].data[idx];
            $('.monthMune ul').html('');
            $('.showDayMessage').html('');
            $('.showTextMune').html('');
            $('#mycanvasDay').show();
            $('.monthMune ul').show();
            $('.showDayMessage').show();
            $('.showTextMune').show();
            // 監聽 user 點柱狀圖裡的哪個月份後進入 switch ，然後再進入 setMonthData function 帶月份跟資料兩個參數得到運動資料
            switch (label) {
                case '一月':
                    $('.showDayMessage2').html('');
                    $('.showDayMessage3').html('');
                    $('.showDay').html('');
                    setMonthData(janData);
                    break;
                case '七月':
                    $('.showDayMessage2').html('');
                    $('.showDayMessage3').html('');
                    $('.showDay').html('');
                    setMonthData(julData);
                    break;
                case '八月':
                    $('.showDayMessage2').html('');
                    $('.showDayMessage3').html('');
                    $('.showDay').html('');
                    setMonthData(augData);
                    break;
                default:
                    console.log('no');
                    break;
            } // outside switch
        }
    })
}
// 這個 function 是抓 user 點哪個月份資料而
function setMonthData(month) {
    console.log(month.data.length);
    let day1 = 0;
    let day2 = 0;
    let day3 = 0;
    let day4 = 0;
    let day5 = 0;
    let day6 = 0;
    let day7 = 0;
    let day8 = 0;
    let day9 = 0;
    let day10 = 0;
    let day11 = 0;
    let day12 = 0;
    let day13 = 0;
    let day14 = 0;
    let day15 = 0;
    let day16 = 0;
    let day17 = 0;
    let day18 = 0;
    let day19 = 0;
    let day20 = 0;
    let day21 = 0;
    let day22 = 0;
    let day23 = 0;
    let day24 = 0;
    let day25 = 0;
    let day26 = 0;
    let day27 = 0;
    let day28 = 0;
    let day29 = 0;
    let day30 = 0;
    let day31 = 0;
    let getdEncodingArr = [];
    // 判斷這個月有沒有運動資料
    if (month.data.length === 0) {
        $('.showMonth').html('沒有運動資料');
        $('#mycanvasDay').hide();
        $('.mouseOver .row').css({
            overflow: 'hidden',
            height: '0px'
        })
        return;
    }
    for (var i in month.data) {
        var monthDoubleDay = month
            .data[i]
            .StartTime
            .slice(8, 10);
        switch (monthDoubleDay) {
            case '01':
                console.log('01');
                day1 += parseInt(month.data[i].distT);
                break;
            case '02':
                console.log('02');
                day2 += parseInt(month.data[i].distT);
                break;
            case '03':
                console.log('03');
                day3 += parseInt(month.data[i].distT);
                break;
            case '04':
                console.log('04');
                day4 += parseInt(month.data[i].distT);
                break;
            case '05':
                console.log('05');
                day5 += parseInt(month.data[i].distT);
                break;
            case '06':
                console.log('06');
                day6 += parseInt(month.data[i].distT);
                break;
            case '07':
                console.log('07');
                day7 += parseInt(month.data[i].distT);
                break;
            case '08':
                console.log('08');
                day8 += parseInt(month.data[i].distT);
                break;
            case '09':
                console.log('09');
                day9 += parseInt(month.data[i].distT);
                break;
            case '10':
                console.log('10');
                day10 += parseInt(month.data[i].distT);
                break;
            case '11':
                console.log('11');
                day11 += parseInt(month.data[i].distT);
                break;
            case '12':
                console.log('12');
                day12 += parseInt(month.data[i].distT);
                break;
            case '13':
                console.log('13');
                day13 += parseInt(month.data[i].distT);
                break;
            case '14':
                console.log('14');
                day14 += parseInt(month.data[i].distT);
                break;
            case '15':
                console.log('15');
                day15 += parseInt(month.data[i].distT);
                break;
            case '16':
                console.log('16');
                day16 += parseInt(month.data[i].distT);
                break;
            case '17':
                console.log('17');
                day17 += parseInt(month.data[i].distT);
                break;
            case '18':
                console.log('18');
                day18 += parseInt(month.data[i].distT);
                break;
            case '19':
                console.log('19');
                day19 += parseInt(month.data[i].distT);
                break;
            case '20':
                console.log('20');
                day20 += parseInt(month.data[i].distT);
                break;
            case '21':
                console.log('21');
                day21 += parseInt(month.data[i].distT);
                break;
            case '22':
                console.log('22');
                day22 += parseInt(month.data[i].distT);
                break;
            case '23':
                console.log('23');
                day23 += parseInt(month.data[i].distT);
                break;
            case '24':
                console.log('24');
                day24 += parseInt(month.data[i].distT);
                break;
            case '25':
                console.log('25');
                day25 += parseInt(month.data[i].distT);
                break;
            case '26':
                console.log('26');
                day26 += parseInt(month.data[i].distT);
                break;
            case '27':
                console.log('27');
                day27 += parseInt(month.data[i].distT);
                break;
            case '28':
                console.log('28');
                day28 += parseInt(month.data[i].distT);
                break;
            case '29':
                console.log('29');
                day29 += parseInt(month.data[i].distT);
                break;
            case '30':
                console.log('30');
                day30 += parseInt(month.data[i].distT);
                break;
            case '31':
                console.log('31');
                day31 += parseInt(month.data[i].distT);
                break;
        } // inside switch
        let getAllDay = month.data[i].StartTime;
        let getYear = getAllDay.slice(0, 4);
        let getMonth = getAllDay.slice(5, 7);
        let getDate = getAllDay.slice(8, 10);
        $('.mouseOver .row').css({
            overflow: 'scroll',
            height: '400px'
        })
        $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + month.data.length + ' 筆運動資料</p>');
        $('.showMonth').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
        $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + month.data[i].distT + ' <span class="font">mile</span> </th><th>' + month.data[i].calT + ' <span class="font">kcal</span> </th><th>' + month.data[i].wattT + ' <span class="font">w</span> </th></tr>');
        let getdEncoding = month.data[i];
        getdEncodingArr[i] = getdEncoding;
        $('.searchDay')
            .removeClass('searchDay')
            .addClass('searchDay' + i);
    } // for
    //抓出使用者點哪一筆的日紀錄
    for (let i in getdEncodingArr) {
        let getDateForMune = month.data[i].StartTime;
        let getMonth = getDateForMune.slice(5, 7);
        let getDate = getDateForMune.slice(8, 10);
        // 運算詳細資料裡的運動時間
        function formatSeconds(value) {
            var theSecond = parseInt((getdEncodingArr[i].sTimeT) / 2 % 60);
            var theMinute = parseInt((getdEncodingArr[i].sTimeT) / 2 / 60 % 60);
            var theHour = parseInt((getdEncodingArr[i].sTimeT) / 2 / 60 / 60);
            var result = "" + parseInt(theSecond) + "秒";
            if (theMinute > 0) {
                result = "" + parseInt(theMinute) + "分" + result;
            }
            if (theHour > 0) {
                result = "" + parseInt(theHour) + "小時" + result;
            }
            return result;
        }
        $('.searchDay' + i)
            .on('click', function() {
                $('.showDay').html('<p>' + getMonth + '月' + getDate + '號詳細的運動資料</p>');
                $('.showDayMessage2').html('');
                $('.showDayMessage3').html('');
                $('.showAnimated')
                    .hide()
                    .fadeIn(300);
                $('.showDayMessage2').html('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                    'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].distT +
                    ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' + 'd><td>' + formatSeconds(getdEncodingArr[i].sTimeT) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].calT + ' <span class="font">kcal</span></td></tr>');
                $('.showDayMessage3').html('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                    '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].wattAvg + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].wattMax + '</td></tr><tr><td>' + getdEncodingArr[i].rpmAvg + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].rpmMax + '</td></tr><tr><td>' + getdEncodingArr[i].speedAvg + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].speedMax + '</td></tr><tr><td>' + getdEncodingArr[i].hrAvg + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].hrMax + '</td></tr>');

            });
    }
    let chart = {
        labels: [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
            "11", "12", "13", "14", "15", "16", "17", "18", "19",
            "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
        ],
        datasets: [{
            label: 'Mile',
            backgroundColor: 'rgba(200,200,200,0.75)',
            borderColor: 'rgba(200,200,200,0.75)',
            hoverBackgroundColor: 'rgba(200,200,200,1)',
            hoverBorderColor: 'rgba(200,200,200,1)',
            animationEasing: "easeOutQuart",
            data: [
                day1, day2, day3, day4, day5, day6, day7, day8, day9, day10,
                day11, day12, day13, day14, day15, day16, day17, day18, day19,
                day20, day21, day22, day23, day24, day25, day26, day27, day28,
                day29, day30, day31
            ]
        }]
    };
    $('.showMonthOfDay').html('<canvas id="mycanvasDay"></canvas>');
    let canvas = document.getElementById("mycanvasDay");
    let ctx = canvas.getContext("2d");
    let myNewChartJul = new Chart(ctx, {
        type: 'bar',
        data: chart
    });
}
// user 查看個人資料的 method


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

$(function() {
    userLogOut();
    // showProfile();

    getAllSportData();
});
// function
for (var i in allMonthData.julData.data) {
    var monthDoubleDay = allMonthData
        .julData
        .data[i]
        .StartTime
        .slice(8, 10);
    switch (monthDoubleDay) {
        case '01':
            console.log('01');
            day1 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '02':
            console.log('02');
            day2 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '03':
            console.log('03');
            day3 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '04':
            console.log('04');
            day4 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '05':
            console.log('05');
            day5 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '06':
            console.log('06');
            day6 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '07':
            console.log('07');
            day7 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '08':
            console.log('08');
            day8 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '09':
            console.log('09');
            day9 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '10':
            console.log('10');
            day10 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '11':
            console.log('11');
            day11 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '12':
            console.log('12');
            day12 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '13':
            console.log('13');
            day13 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '14':
            console.log('14');
            day14 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '15':
            console.log('15');
            day15 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '16':
            console.log('16');
            day16 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '17':
            console.log('17');
            day17 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '18':
            console.log('18');
            day18 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '19':
            console.log('19');
            day19 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '20':
            console.log('20');
            day20 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '21':
            console.log('21');
            day21 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '22':
            console.log('22');
            day22 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '23':
            console.log('23');
            day23 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '24':
            console.log('24');
            day24 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '25':
            console.log('25');
            day25 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '26':
            console.log('26');
            day26 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '27':
            console.log('27');
            day27 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '28':
            console.log('28');
            day28 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '29':
            console.log('29');
            day29 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '30':
            console.log('30');
            day30 += parseInt(allMonthData.julData.data[i].distT);
            break;
        case '31':
            console.log('31');
            day31 += parseInt(allMonthData.julData.data[i].distT);
            break;
    } // inside switch
    let getAllDay = julData.data[i].StartTime;
    let getYear = getAllDay.slice(0, 4);
    let getMonth = getAllDay.slice(5, 7);
    let getDate = getAllDay.slice(8, 10);
    $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料</p>');
    $('.showMonth').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
    $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + julData.data[i].distT + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].calT + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].wattT + ' <span class="font">w</span> </th></tr>');
    let getdEncoding = julData.data[i];
    getdEncodingArr[i] = getdEncoding;
    $('.searchDay')
        .removeClass('searchDay')
        .addClass('searchDay' + i);
} // for
//抓出使用者點哪一筆的日紀錄
for (let i in getdEncodingArr) {
    let getDateForMune = data.data.rows[i].StartTime;
    let getMonth = getDateForMune.slice(5, 7);
    let getDate = getDateForMune.slice(8, 10);

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
        .on('click', function () {
            $('.showDay').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料</span>');
            $('.showDayMessage2').html('');
            $('.showDayMessage3').html('');
            $('.showDayMessage2').html('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                    'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].distT + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                    'd><td>' + formatSeconds(getdEncodingArr[i].sTimeT) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].calT + ' <span class="font">kcal</span></td></tr>');
            $('.showDayMessage3').html('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                    '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].wattAvg + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].wattMax + '</td></tr><tr><td>' + getdEncodingArr[i].rpmAvg + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].rpmMax + '</td></tr><tr><td>' + getdEncodingArr[i].speedAvg + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].speedMax + '</td></tr><tr><td>' + getdEncodingArr[i].hrAvg + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].hrMax + '</td></tr>');

        });
}
let chartdata1 = {
    labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31"
    ],
    datasets: [
        {
            label: 'Mile',
            backgroundColor: 'rgba(200,200,200,0.75)',
            borderColor: 'rgba(200,200,200,0.75)',
            hoverBackgroundColor: 'rgba(200,200,200,1)',
            hoverBorderColor: 'rgba(200,200,200,1)',
            animationEasing: "easeOutQuart",
            data: [
                day1,
                day2,
                day3,
                day4,
                day5,
                day6,
                day7,
                day8,
                day9,
                day10,
                day11,
                day12,
                day13,
                day14,
                day15,
                day16,
                day17,
                day18,
                day19,
                day20,
                day21,
                day22,
                day23,
                day24,
                day25,
                day26,
                day27,
                day28,
                day29,
                day30,
                day31
            ]
        }
    ]
};
let canvas3 = document.getElementById("mycanvasDay");
let ctx3 = canvas3.getContext("2d");
let myNewChart3 = new Chart(ctx3, {
    type: 'bar',
    data: chartdata1
});

//test function
function setMonthData(month, getMonthData) {
    for (var i in getMonthData.month.data) {
        var monthDoubleDay = getMonthData
            .month
            .data[i]
            .StartTime
            .slice(8, 10);
        switch (monthDoubleDay) {
            case '01':
                console.log('01');
                day1 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '02':
                console.log('02');
                day2 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '03':
                console.log('03');
                day3 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '04':
                console.log('04');
                day4 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '05':
                console.log('05');
                day5 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '06':
                console.log('06');
                day6 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '07':
                console.log('07');
                day7 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '08':
                console.log('08');
                day8 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '09':
                console.log('09');
                day9 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '10':
                console.log('10');
                day10 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '11':
                console.log('11');
                day11 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '12':
                console.log('12');
                day12 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '13':
                console.log('13');
                day13 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '14':
                console.log('14');
                day14 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '15':
                console.log('15');
                day15 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '16':
                console.log('16');
                day16 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '17':
                console.log('17');
                day17 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '18':
                console.log('18');
                day18 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '19':
                console.log('19');
                day19 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '20':
                console.log('20');
                day20 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '21':
                console.log('21');
                day21 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '22':
                console.log('22');
                day22 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '23':
                console.log('23');
                day23 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '24':
                console.log('24');
                day24 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '25':
                console.log('25');
                day25 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '26':
                console.log('26');
                day26 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '27':
                console.log('27');
                day27 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '28':
                console.log('28');
                day28 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '29':
                console.log('29');
                day29 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '30':
                console.log('30');
                day30 += parseInt(getMonthData.month.data[i].distT);
                break;
            case '31':
                console.log('31');
                day31 += parseInt(getMonthData.month.data[i].distT);
                break;
        } // inside switch
        let getAllDay = month.data[i].StartTime;
        let getYear = getAllDay.slice(0, 4);
        let getMonth = getAllDay.slice(5, 7);
        let getDate = getAllDay.slice(8, 10);
        $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料</p>');
        $('.showMonth').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
        $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + month.data[i].distT + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].calT + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].wattT + ' <span class="font">w</span> </th></tr>');
        let getdEncoding = month.data[i];
        getdEncodingArr[i] = getdEncoding;
        $('.searchDay')
            .removeClass('searchDay')
            .addClass('searchDay' + i);
    } // for
    //抓出使用者點哪一筆的日紀錄
    for (let i in getdEncodingArr) {
        let getDateForMune = data.data.rows[i].StartTime;
        let getMonth = getDateForMune.slice(5, 7);
        let getDate = getDateForMune.slice(8, 10);

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
            .on('click', function () {
                $('.showDay').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料</span>');
                $('.showDayMessage2').html('');
                $('.showDayMessage3').html('');
                $('.showDayMessage2').html('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                        'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].distT + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                        'd><td>' + formatSeconds(getdEncodingArr[i].sTimeT) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].calT + ' <span class="font">kcal</span></td></tr>');
                $('.showDayMessage3').html('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                        '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].wattAvg + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].wattMax + '</td></tr><tr><td>' + getdEncodingArr[i].rpmAvg + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].rpmMax + '</td></tr><tr><td>' + getdEncodingArr[i].speedAvg + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].speedMax + '</td></tr><tr><td>' + getdEncodingArr[i].hrAvg + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].hrMax + '</td></tr>');

            });
    }
    let chartJul = {
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31"
        ],
        datasets: [
            {
                label: 'Mile',
                backgroundColor: 'rgba(200,200,200,0.75)',
                borderColor: 'rgba(200,200,200,0.75)',
                hoverBackgroundColor: 'rgba(200,200,200,1)',
                hoverBorderColor: 'rgba(200,200,200,1)',
                animationEasing: "easeOutQuart",
                data: [
                    day1,
                    day2,
                    day3,
                    day4,
                    day5,
                    day6,
                    day7,
                    day8,
                    day9,
                    day10,
                    day11,
                    day12,
                    day13,
                    day14,
                    day15,
                    day16,
                    day17,
                    day18,
                    day19,
                    day20,
                    day21,
                    day22,
                    day23,
                    day24,
                    day25,
                    day26,
                    day27,
                    day28,
                    day29,
                    day30,
                    day31
                ]
            }
        ]
    };
    let canvasJul = document.getElementById("mycanvasDay");
    let ctxJul = canvasJul.getContext("2d");
    let myNewChartJul = new Chart(ctxJul, {
        type: 'bar',
        data: chartJul
    });
}

$('#userLogInForm')
    .submit(function () {
        var username = $('#userLogInName').val();
        $.ajax({
            type: 'POST',
            url: url + 'login2Server',
            dataType: 'json',
            data: {
                username: $('#userLogInName').val(),
                password: $('#userLogInPassword').val()
            },
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                }
            })
            .done(function (data) {
                console.log(data);
                tokenData = {
                    username: $('#userLogInName').val(),
                    UserPassword: $('#userLogInPassword').val(),
                    token: data.data.token
                }
                console.log(tokenData);
                data.data.UserPassword = $('#userLogInPassword').val();
                // 成功登入後檢查個人資料是否有 null ，如果有的話就進入 if if (data.result === 'false' ||
                // data.data.uAge === null || data.data.uHeight === null || data.data.uWeight
                // === null || data.data.uSex === null) {
                $("#login").modal('hide');
                $('#information').modal('show');
                $('#informationForm').on('submit', function () {
                    var usex = $("input[type='radio'][name='uSex']:checked").val();
                    var username = $('#userLogInName').val();
                    var token = data.data.token;
                    //讓使用者輸入他的個人資料
                    $.ajax({
                        type: 'POST',
                        url: 'http://35.167.221.25:8080/api/profileSet',
                        dataType: 'json',
                        data: {
                            username: username,
                            password: data.data.UserPassword,
                            UserPassword: data.data.UserPassword,
                            uAge: $('#uAge').val(),
                            uHeight: $('#uHeight').val(),
                            uWeight: $('#uWeight').val(),
                            uSex: usex,
                            token: token
                        },
                            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                            crossDomain: true,
                            xhrFields: {
                                withCredentials: true
                            }
                        })
                        .done(function (uData) {
                            console.log(uData);
                        })
                        .fail(function (xhr) {
                            alert('error');
                            console.log(xhr.responseText);
                        })
                    return false;
                })
                if ($('#userLogInName').val() === 'intenza') {
                    window.location.href = 'intenza/index.html';
                } else {
                    //如果個人資料沒有 null 就直接存入 cookie 後再跳轉到會員網頁
                    $.cookie('logCookie', JSON.stringify(tokenData), {
                        expires: 7,
                        path: '/'
                    });
                    console.log($.cookie('logCookie'));
                    // window.location.href = 'member/index.html'; // 3/20 0916成功跳轉
                }

            })
            .fail(function (xhr) {
                console.log(xhr.status);
                if (xhr.status == '400') {
                    alert('未輸入');
                    $('#username').val('');
                    $('#password').val('');
                } else if (xhr.status == '401') {
                    alert('帳號或密碼有誤');
                } else if (xhr.status == '404') {
                    alert('未輸入');
                }
            });
        return false;
    });

/*
============================================================================
註冊頁面
============================================================================
*/
/*
function checkUsed() {
    var $username = $('#username').val();
    $('#username').on('keyup', function () {
        if ($(this).val() !== '') {
            $.ajax({
                type: 'POST',
                url: 'http://35.167.221.25:8080/signupTemp',
                data: {
                    username: $(this).val()
                },
                    dataType: 'json'
                })
                .done(function (data) {
                    console.log(data);
                    if (data.method === 'email send' || $username === '') {
                        $('#usernameUsed').html('');
                        $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
                        if ($username !== '' && $password !== '') {
                            $('#userSignUpForm :input[type="submit"]').prop('disabled', false);
                        }
                    } else if (data.method === 'email send fail') {
                        $('#usernameUsed').html('請使用信箱註冊 ex： sample@gmail.com');
                        $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
                    } else if (data.data.event === 'userName already used') {
                        $('#usernameUsed').html('帳號已使用');
                        $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
                    }
                })
        }
    })
}
checkUsed();
*/
function checkAleardyUsed() {
    var timer;
    $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
    $('#userSignUpForm').on('focus', 'input', function () {
        clearTimeout(timer);
        var $username = $('#username').val();
        var $password = $("#password").val();
        timer = setTimeout(function () {
            $
                .ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/login2Server',
                    dataType: 'json',
                    data: {
                        username: $username
                    }
                })
                .done(function (data) {
                    console.log(data);
                    if (data.method === 'email send' || $username === '') {
                        $('#usernameUsed').html('');
                        $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
                        $('#username')
                            .parent()
                            .removeClass('has-error')
                            .addClass('has-success');
                        if ($username !== '' && $password !== '') {
                            $('#userSignUpForm :input[type="submit"]').prop('disabled', false);
                        }
                    } else if (data.method === 'email send fail') {
                        $('#usernameUsed').html('請使用信箱註冊 ex： sample@gmail.com');
                        $('#username')
                            .parent()
                            .removeClass('has-success')
                            .addClass('has-error');
                        $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
                    } else if (data.data.error === 'not in userData') {
                        $('#usernameUsed').html('此帳號已被使用');
                        $('#userSignUpForm :input[type="submit"]').prop('disabled', true);
                        $('#username')
                            .parent()
                            .removeClass('has-success')
                            .addClass('has-error');
                    }
                })
        }, 500);

    })
}
checkAleardyUsed()

$(function () {
    $('#userSignUpForm')
        .submit(function () {
            $.ajax({
                type: 'POST',
                url: 'http://35.167.221.25:8080/signupTemp',
                dataType: 'json',
                data: {
                    username: $('#username').val(),
                    password: $('#password').val()
                },
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                xhrFields: {
                    withCredentials: true
                },
                    crossDomain: true
                })
                .done(function (data) {
                    console.log(data);
                    if (data.result === "true") {
                        alert('註冊成功');
                        $("#signup").modal('hide');
                        $('#username').val('');
                        $('#password').val('');
                        $('#repassword').val('');
                        $('#userN').val('');
                        $('#userDate').val('');
                        return false;
                    }
                })
                .fail(function (xhr) {
                    console.log(xhr.status);
                    if (xhr.status == '400') {
                        alert('未輸入');
                        $('#username').val('');
                        $('#password').val('');
                    } else if (xhr.status == '401') {
                        alert('帳號已註冊');
                        $('#username').val('');
                        $('#password').val('');
                        $('#repassword').val('');
                        $('#userN').val('');
                        $('#userDate').val('');
                    }
                });
            return false;
        });
});
/*
============================================================================
註冊頁面
============================================================================
*/

if (true) {
    console.log(uJsonObj);
    $('.showDate').append('<h1>年紀錄</h1>');
    let janMile = 0;
    let febMile = 0;
    let marMile = 0;
    let aprMile = 0;
    let mayMile = 0;
    let junMile = 0;
    let julMile = 0;
    let augMile = 0;
    let sepMile = 0;
    let octMile = 0;
    let novMile = 0;
    let decMile = 0;
    for (let i in uJsonObj.data.rows) {
        let getAllMonth = uJsonObj.data.rows[i].StartTime;
        getAllMonthStr = getAllMonth.slice(5, 7);
        switch (getAllMonthStr) {
            case '01':
                janMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '02':
                febMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '03':
                marMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '04':
                aprMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '05':
                mayMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '06':
                junMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '07':
                julMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '08':
                augMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '09':
                sepMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '10':
                octMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '11':
                novMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            case '12':
                decMile += parseInt(uJsonObj.data.rows[i].Miles);
                break;
            default:
                console.log('error');
                break;
        }
    } // for in 結束
    //$(document).ready(function() {

    let allMonthMile = [
        janMile,
        febMile,
        marMile,
        aprMile,
        mayMile,
        junMile,
        julMile,
        augMile,
        sepMile,
        octMile,
        novMile,
        decMile
    ];
    console.log(allMonthMile);
    let chartdata = {
        labels: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
        ],
        datasets: [
            {
                label: 'Mile',
                backgroundColor: 'rgba(200,200,200,0.75)',
                borderColor: 'rgba(200,200,200,0.75)',
                hoverBackgroundColor: 'rgba(200,200,200,1)',
                hoverBorderColor: 'rgba(200,200,200,1)',
                animationEasing: "easeOutQuart",
                data: allMonthMile
            }
        ]
    }; //chartdata 結束

    let canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext("2d");
    let myNewChart = new Chart(ctx, {
        type: 'bar',
        data: chartdata
    });

    //點擊監聽事件，
    canvas.onclick = function (evt) {
        let activePoints = myNewChart.getElementsAtEvent(evt);
        let chartData = activePoints[0]['_chart'].config.data;
        let idx = activePoints[0]['_index'];
        let label = chartData.labels[idx];
        let value = chartData.datasets[0].data[idx];

        let dayMiel_1 = 0;
        let dayMiel_2 = 0;
        let dayMiel_3 = 0;
        let dayMiel_4 = 0;
        let dayMiel_5 = 0;
        let dayMiel_6 = 0;
        let dayMiel_7 = 0;
        let dayMiel_8 = 0;
        let dayMiel_9 = 0;
        let dayMiel_10 = 0;
        let dayMiel_11 = 0;
        let dayMiel_12 = 0;
        let dayMiel_13 = 0;
        let dayMiel_14 = 0;
        let dayMiel_15 = 0;
        let dayMiel_16 = 0;
        let dayMiel_17 = 0;
        let dayMiel_18 = 0;
        let dayMiel_19 = 0;
        let dayMiel_20 = 0;
        let dayMiel_21 = 0;
        let dayMiel_22 = 0;
        let dayMiel_23 = 0;
        let dayMiel_24 = 0;
        let dayMiel_25 = 0;
        let dayMiel_26 = 0;
        let dayMiel_27 = 0;
        let dayMiel_28 = 0;
        let dayMiel_29 = 0;
        let dayMiel_30 = 0;
        let dayMiel_31 = 0;

        let getDayMile_1 = function () {
            return dayMiel_1;
        };
        let getDayMile_2 = function () {
            return dayMiel_2;
        };
        let getDayMile_3 = function () {
            return dayMiel_3;
        };
        let getDayMile_4 = function () {
            return dayMiel_4;
        };
        let getDayMile_5 = function () {
            return dayMiel_5;
        };
        let getDayMile_6 = function () {
            return dayMiel_6;
        };
        let getDayMile_7 = function () {
            return dayMiel_7;
        };
        let getDayMile_8 = function () {
            return dayMiel_8;
        };
        let getDayMile_9 = function () {
            return dayMiel_9;
        };
        let getDayMile_10 = function () {
            return dayMiel_10;
        };
        let getDayMile_11 = function () {
            return dayMiel_11;
        };
        let getDayMile_12 = function () {
            return dayMiel_12;
        };
        let getDayMile_13 = function () {
            return dayMiel_13;
        };
        let getDayMile_14 = function () {
            return dayMiel_14;
        };
        let getDayMile_15 = function () {
            return dayMiel_15;
        };
        let getDayMile_16 = function () {
            return dayMiel_16;
        };
        let getDayMile_17 = function () {
            return dayMiel_17;
        };
        let getDayMile_18 = function () {
            return dayMiel_18;
        };
        let getDayMile_19 = function () {
            return dayMiel_19;
        };
        let getDayMile_20 = function () {
            return dayMiel_20;
        };
        let getDayMile_21 = function () {
            return dayMiel_21;
        };
        let getDayMile_22 = function () {
            return dayMiel_22;
        };
        let getDayMile_23 = function () {
            return dayMiel_23;
        };
        let getDayMile_24 = function () {
            return dayMiel_24;
        };
        let getDayMile_25 = function () {
            return dayMiel_25;
        };
        let getDayMile_26 = function () {
            return dayMiel_26;
        };
        let getDayMile_27 = function () {
            return dayMiel_27;
        };
        let getDayMile_28 = function () {
            return dayMiel_28;
        };
        let getDayMile_29 = function () {
            return dayMiel_29;
        };
        let getDayMile_30 = function () {
            return dayMiel_30;
        };
        let getDayMile_31 = function () {
            return dayMiel_31;
        };
        switch (label) {
            case '一月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-01-01/2017-01-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);
                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                let getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }

                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('一月份錯誤');
                    });
                break;
            case '二月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-02-01/2017-02-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                let getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }
                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('二月份錯誤');
                    });
                break;
            case '三月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-03-01/2017-03-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.result) {
                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                let getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .mouseover(function (event) {
                                        $(this).removeClass('active');
                                    });
                                $('.searchDay' + i).mouseleave(function () {
                                    $(this).addClass('active');
                                });
                                $('.searchDay' + i).on('click', function () {
                                    $('#mycanvasDay').hide();
                                    $('.monthMune ul').hide();
                                    $('.showDayMessage').hide();
                                    $('.showTextMune').hide();
                                    $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                    $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                            'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                            'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                    $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                            '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                });
                            }

                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('三月份錯誤');
                    });
                break;
            case '四月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-04-01/2017-04-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);
                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                getAllMonthStr = getAllMonth.slice(8, 10);
                                console.log(getAllMonthStr);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }

                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('四月份錯誤');
                    });
                break;
            case '五月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-05-01/2017-05-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);
                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                getAllMonthStr = getAllMonth.slice(8, 10);
                                console.log(getAllMonthStr);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }

                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('五月份錯誤');
                    });
                break;
            case '六月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-06-01/2017-06-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);

                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }
                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('六月份錯誤');
                    });
                break;
            case '七月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-07-01/2017-07-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);

                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }

                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('七月份錯誤');
                    });
                break;
            case '八月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-08-01/2017-08-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);

                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }

                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('八月份錯誤');
                    });
                break;
            case '九月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-09-01/2017-09-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);

                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }

                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('九月份錯誤');
                    });
                break;
            case '十月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-10-01/2017-10-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);

                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束
                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }
                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('十月份錯誤');
                    });
                break;
            case '十一月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-11-01/2017-11-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);

                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }

                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('十一月份錯誤');
                    });
                break;
            case '十二月':
                $.ajax({
                    type: 'POST',
                    url: 'http://35.167.221.25:8080/RtInfoSum/DateuClientID/GET/2017-12-01/2017-12-31/' + uClientID,
                    dataType: 'json',
                    data: {
                        username: jsonObj.data.UserName,
                        password: jsonObj.data.UserPassword,
                        dEncoding: jsonObj.data.dEncoding
                    },
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    xhrFields: {
                        withCredentials: true
                    },
                        crossDomain: true
                    })
                    .done(function (data) {
                        console.log(data);
                        $('#mycanvas').hide();
                        if (!data.data.event) {
                            console.log(data);

                            let getdEncodingArr = [];
                            for (let i in data.data.rows) {
                                let getAllMonth = data.data.rows[i].StartTime;
                                getAllMonthStr = getAllMonth.slice(8, 10);
                                switch (getAllMonthStr) {
                                    case '01':
                                        dayMiel_1 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '02':
                                        dayMiel_2 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '03':
                                        dayMiel_3 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '04':
                                        dayMiel_4 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '05':
                                        dayMiel_5 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '06':
                                        dayMiel_6 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '07':
                                        dayMiel_7 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '08':
                                        dayMiel_8 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '09':
                                        dayMiel_9 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '10':
                                        dayMiel_10 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '11':
                                        dayMiel_11 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '12':
                                        dayMiel_12 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '13':
                                        dayMiel_13 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '14':
                                        dayMiel_14 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '15':
                                        dayMiel_15 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '16':
                                        dayMiel_16 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '17':
                                        dayMiel_17 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '18':
                                        dayMiel_18 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '19':
                                        dayMiel_19 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '20':
                                        dayMiel_20 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '21':
                                        dayMiel_21 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '22':
                                        dayMiel_22 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '23':
                                        dayMiel_23 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '24':
                                        dayMiel_24 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '25':
                                        dayMiel_25 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '26':
                                        dayMiel_26 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '27':
                                        dayMiel_27 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '28':
                                        dayMiel_28 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '29':
                                        dayMiel_29 += parseInt(adata.data.rows[i].Miles);
                                        break;
                                    case '30':
                                        dayMiel_30 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    case '31':
                                        dayMiel_31 += parseInt(data.data.rows[i].Miles);
                                        break;
                                    default:
                                        console.log('error');
                                        break;
                                } //switch 結束
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getYear = getDateForMune.slice(0, 4);
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);
                                $('.showTextMune').html('<p>' + getMonth + '月份共有 ' + data.data.rows.length + ' 筆運動資料。</p>');
                                $('.showDate').html('<h1>' + getMonth + ' 月份的紀錄</h1>');
                                //在圖表下面秀出當月有幾筆的資料
                                $('.showDayMessage').append('<tr class="active searchDay"><th>' + getYear + '/' + getMonth + '/' + getDate + '</th><th>' + data.data.rows[i].Miles + ' <span class="font">mile</span> </th><th>' + data.data.rows[i].Cal + ' <span class="font">kcal</span> </th><th>' + data.data.rows[i].Watt + ' <span class="font">w</span> </th></tr>');
                                //把當月的總資料丟到一個array裡
                                let getdEncoding = data.data.rows[i];
                                getdEncodingArr[i] = getdEncoding;
                                $('.searchDay')
                                    .removeClass('searchDay')
                                    .addClass('searchDay' + i);

                            } // for in 結束

                            //抓出使用者點哪一筆的日紀錄
                            for (let i in getdEncodingArr) {
                                let getDateForMune = data.data.rows[i].StartTime;
                                let getMonth = getDateForMune.slice(5, 7);
                                let getDate = getDateForMune.slice(8, 10);

                                function formatSeconds(value) {
                                    var theSecond = parseInt((getdEncodingArr[i].SportsTime) / 2 % 60);
                                    var theMinute = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 % 60);
                                    var theHour = parseInt((getdEncodingArr[i].SportsTime) / 2 / 60 / 60);
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
                                    .on('click', function () {
                                        $('#mycanvasDay').hide();
                                        $('.monthMune ul').hide();
                                        $('.showDayMessage').hide();
                                        $('.showTextMune').hide();
                                        $('.showDate').html('<h1></h1><span>' + getMonth + '月' + getDate + '號</span><span>詳細的運動資料。</span>');
                                        $('.showDayMessage2').append('<tr><th class="active"></th><th class="active"><span class="font">TOTAL</span></' +
                                                'th></tr><tr><td><span class="font">DISTANCE</span></td><td>' + getdEncodingArr[i].Miles + ' <span class="font">km</span></td></tr><tr><td><span class="font">TIME</span></t' +
                                                'd><td>' + formatSeconds(getdEncodingArr[i].SportsTime) + '</td></tr><tr><td><span class="font">CALORIES</span></td><td>' + getdEncodingArr[i].Cal + ' <span class="font">kcal</span></td></tr>');
                                        $('.showDayMessage3').append('<tr><th class="active"><span class="font">AVG</span></th><th class="active"></th' +
                                                '><th class="active"><span class="font">MAX</span></th></tr><tr><td>' + getdEncodingArr[i].AW + '</td><th><span class="font">WATT</span></th><td>' + getdEncodingArr[i].MaxWatt + '</td></tr><tr><td>' + getdEncodingArr[i].AR + '</td><th><span class="font">RPM</span></th><td>' + getdEncodingArr[i].MaxR + '</td></tr><tr><td>' + getdEncodingArr[i].ASS + '</td><th><span class="font">SPEED</span></th><td>' + getdEncodingArr[i].MaxS + '</td></tr><tr><td>' + getdEncodingArr[i].AH + '</td><th><span class="font">HR</span></th><td>' + getdEncodingArr[i].MaxH + '</td></tr>');
                                    });
                            }

                            let chartdata = {
                                labels: [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31"
                                ],
                                datasets: [
                                    {
                                        label: 'Mile',
                                        backgroundColor: 'rgba(200,200,200,0.75)',
                                        borderColor: 'rgba(200,200,200,0.75)',
                                        hoverBackgroundColor: 'rgba(200,200,200,1)',
                                        hoverBorderColor: 'rgba(200,200,200,1)',
                                        animationEasing: "easeOutQuart",
                                        data: [
                                            getDayMile_1(),
                                            getDayMile_2(),
                                            getDayMile_3(),
                                            getDayMile_4(),
                                            getDayMile_5(),
                                            getDayMile_6(),
                                            getDayMile_7(),
                                            getDayMile_8(),
                                            getDayMile_9(),
                                            getDayMile_10(),
                                            getDayMile_11(),
                                            getDayMile_12(),
                                            getDayMile_13(),
                                            getDayMile_14(),
                                            getDayMile_15(),
                                            getDayMile_16(),
                                            getDayMile_17(),
                                            getDayMile_18(),
                                            getDayMile_19(),
                                            getDayMile_20(),
                                            getDayMile_21(),
                                            getDayMile_22(),
                                            getDayMile_23(),
                                            getDayMile_24(),
                                            getDayMile_25(),
                                            getDayMile_26(),
                                            getDayMile_27(),
                                            getDayMile_28(),
                                            getDayMile_29(),
                                            getDayMile_30(),
                                            getDayMile_31()
                                        ]
                                    }
                                ]
                            };
                            let canvas = document.getElementById("mycanvasDay");
                            let ctx = canvas.getContext("2d");
                            let myNewChart = new Chart(ctx, {
                                type: 'bar',
                                data: chartdata
                            });

                        } else if (data.data.event == 'empty') {
                            $('#myList').html('目前無任何一筆運動資訊');
                        }
                    })
                    .fail(function (xhr) {
                        console.log('十二月份錯誤');
                    });
                break;

            default:
                console.log('error');
                break;
        } //switch 結束
    }; //內圈的 if 結束 //點擊監聽事件結束

    // }); //document.ready 結束
} else if (uJsonObj.data.event == 'empty') {
    $('#myList').html('目前無任何一筆運動資訊');
} // else if 結束
}) //.done 結束
.fail(function (xhr) {
console.log(xhr.status);
}); //fail 結束
return //外圈的if 結束
false;
} else {
window.location.href = '../index.html';
} //else 結束
});

/*
=======================================================
跳轉個人基本資料就秀出資料
=======================================================
*/
let showProfile = function () {
//先檢查是否有 cookie ，如果沒有就跳回登入頁面
if ($.cookie('logCookie')) {
let jsonObj = JSON.parse($.cookie('logCookie'));
console.log(jsonObj);
if (jsonObj.result === 'true') {
$('.showProfile').append('<p>姓名： ' + jsonObj.data.UserName + '</p><p>性別： ' + jsonObj.data.uSex + '</p><p>年齡： ' + jsonObj.data.uAge + '</p><p>身高： ' + jsonObj.data.uHeight + '</p><p>體重： ' + jsonObj.data.uWeight + '</p>');
}
} else {
window.location.href = '../index.html';
}
};

/*
=======================================================
登出
=======================================================
*/
$(function () {
$('.logOut')
.on('click', function () {
$.removeCookie('logCookie', {
    expires: -1,
    path: '/'
});
console.log($.cookie('logCookie'));
console.log($.removeCookie('logCookie'));
});
});
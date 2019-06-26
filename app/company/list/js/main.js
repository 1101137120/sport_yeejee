var url = 'http://35.167.221.25:8080';

// 廠商登出 function
function userLogOut() {
    $('.logOut').on('click', function () {
            $.removeCookie('cpDataCookie', {
                expires: -1,
                path: '/'
        });
            console.log($.cookie('cpDataCookie'));
            console.log($.removeCookie('cpDataCookie'));
    });
}

// 上線時要刪掉這個 function ,這只是看有沒有抓到 cookie
function getcpDataCookie() {
    var cpDataCookie = JSON.parse($.cookie('cpDataCookie'));
    console.log(cpDataCookie);
}

// 取得公司所有裝置的 function
// 因為要把型號、廠商a、廠商b做分類，所以抓到資料後用 searchArr function 帶 data 參數出去
function getAllCpDeviceData(){
    getCpProfile(function(err, data){
        if(err){
            console.log(err)
        }
        console.log(data)
        var shortData = data.data.detail[0];
        var cpDataCookie = JSON.parse($.cookie('cpDataCookie'));
        console.log(cpDataCookie);
        $.ajax({
            type: 'POST',
            url: url + '/api/cpDeviceDataGet',
            data: {
                username: shortData.cpAcc,
                cpAee: shortData.cpAcc,
                cpName: shortData.cpName,
                token: cpDataCookie.token
            }
        }).done(function(data){
            console.log(data);
            searchArr(data);
        })
    })
}
// 這個 function 要把所有的裝置分類相同的廠商、型號出來
function searchArr(data){
    console.log(data.data.detail);
        var msg = '';
        msg += '<h1>所有裝置</h1>';
        msg += '<table class="table">';
        msg += '<tr>';
        msg += '<th>品牌</th>';
        msg += '<th>序號</th>';
        msg += '<th>型號</th>';
        msg += '<th>裝置序號</th>';
        msg += '<th></th>'
        msg += '</tr>';
    data.data.detail.forEach(function(data, index){
        msg += '<tr>';
        msg += '<td>' + data.sBrands + '</td>';
        msg += '<td>' + data.sSEID + '</td>';
        msg += '<td>' + data.sModels + '</td>';
        msg += '<td>' + data.sDeviceID + '</td>';
        msg += '<td id="'+ data.sDeviceID +'" class="dataList'+ index +'"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#' + data.sDeviceID + '">詳細</button></td>'
        msg += '</tr>';
    });
    msg += '</table>';
    $('#showTableData').append(msg);
    for(let i in data.data.detail){
    $('.dataList' + i).on('click', function(){
        var modal = '';
        var $thisId = this.id;
        console.log($thisId);
        $('.modal').attr('id', $thisId);
            modal += '<table class="table">';
            modal += '<tr>';
            modal += '<th>品牌</th>';
            modal += '<th>型號</th>';
            modal += '<th>製造商</th>';
            modal += '<th>製造商</th>';
            modal += '<th>編號</th>';
            modal += '<th>啟用日期</th>';
            modal += '<th>器材種類</th>';
            modal += '</tr>';
            modal += '<tr>';
            modal += '<td>' + data.data.detail[i].sBrands + '</td>';
            modal += '<td>' + data.data.detail[i].sModels + '</td>';
            modal += '<td>' + data.data.detail[i].sManufacterA + '</td>';
            modal += '<td>' + data.data.detail[i].sManufacterB + '</td>';
            modal += '<td>' + data.data.detail[i].sSEID + '</td>';
            modal += '<td></td>';
            modal += '<td>' + data.data.detail[i].sActivity + '</td>';
            modal += '</tr>'
            modal += '</table>';
        $('.modal-body').html(modal);
    });
}
}



//==============================================觀看公司資訊的相關 function=====================================

// 抓取公司資訊的 api ，抓到後用 callback function 把資料帶出來處理
function getCpProfile(cb) {
    var cpDataCookie = JSON.parse($.cookie('cpDataCookie'));
    console.log(cpDataCookie);
    $.ajax({
            type: 'POST',
            url: url + '/api/cpDataGet',
            data: {
                username: cpDataCookie.userName,
                cpAcc: cpDataCookie.userName,
                cpPassword: cpDataCookie.cpPassword,
                token: cpDataCookie.token
            }
        })
        .done(function (data) {
            cb(null, data)
        })
}

// 當 user 看公司資訊時，去抓 getCpProfile 帶 callback function 的 data 進去印出相關資料
function showCpProfile() {
    if ($.cookie('cpDataCookie')) {
        getCpProfile(function (err, data) {
            if (err) {
                console.log(err)
            }
            console.log(data);
            var shortData = data.data.detail[0];
            if (shortData.others === null) {
                shortData.others = '無';
                $('.showProfile').append('<p>公司名稱： ' + shortData.cpName + '</p><p>公司類別： ' + shortData.cpType + '</p><p>統一編號： ' + shortData.taxID + '</p><p>備註： ' + shortData.others + '</p>');

            } else {
                $('.showProfile').append('<p>公司名稱： ' + shortData.cpName + '</p><p>公司類別： ' + shortData.cpType + '</p><p>統一編號： ' + shortData.taxID + '</p><p>備註： ' + shortData.others + '</p>');

            }
        })
    } else {
        window.location.href = '../index.html';
    }
}
//==============================================觀看公司資訊的相關 function=====================================
$(function () {
    userLogOut();
    getAllCpDeviceData()
    // getcpDataCookie(); // 上線時要刪掉這個 function
})

/*
function searchArr(data){
    console.log(data.data.detail);
        var msg = '';
        msg += '<h1>所有裝置</h1>';
        msg += '<table class="table">';
        msg += '<tr>';
        msg += '<th>品牌</th>';
        msg += '<th>序號</th>';
        msg += '<th>型號</th>';
        msg += '<th>裝置序號</th>';
        msg += '<th></th>'
        msg += '</tr>';
    for(let j in data.data.detail){
        msg += '<tr>';
        msg += '<td>' + data.data.detail[j].sBrands + '</td>';
        msg += '<td>' + data.data.detail[j].sSEID + '</td>';
        msg += '<td>' + data.data.detail[j].sModels + '</td>';
        msg += '<td>' + data.data.detail[j].sDeviceID + '</td>';
        msg += '<td id="'+ data.data.detail[j].sDeviceID +'" class="dataList' + j + '"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#' + data.sDeviceID + '">詳細</button></td>'
        msg += '</tr>';
    };
    msg += '</table>';
    $('#showTableData').append(msg);
    for(let i in data.data.detail){
    $('.dataList' + i).on('click', function(){
        var modal = '';
        var $thisId = this.id;
        console.log($thisId);
        $('.modal').attr('id', $thisId);
            modal += '<table class="table">';
            modal += '<tr>';
            modal += '<th>品牌</th>';
            modal += '<th>序號</th>';
            modal += '<th>型號</th>';
            modal += '<th>裝置序號</th>';
            modal += '</tr>';
            modal += '<tr>';
            modal += '<td>' + data.data.detail[i].sBrands + '</td>';
            modal += '<td>' + data.data.detail[i].sSEID + '</td>';
            modal += '<td>' + data.data.detail[i].sModels + '</td>';
            modal += '<td>' + data.data.detail[i].sDeviceID + '</td>';
            modal += '</tr>'
            modal += '</table>';
        $('.modal-body').html(modal);
    });
}
}
*/
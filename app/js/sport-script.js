function getMessage() {
    var search = document.location.search;
    if (search === '?event=tokenFail') {
        var msg = '';
        msg += '<h1>帳號驗證失敗</h1>';
        msg += '<h2>原因：不明，請通知管理員</h2>';
        msg += '<p><span id="count">5</span> 秒後將自動關閉</p>';
        $('#app').html(msg);
    } else if (search === '?event=vertificationError') {
        var msg = '';
        msg += '<h1>帳號驗證失敗</h1>';
        msg += '<h2>原因：資料庫查詢錯誤，請通知管理員</h2>';
        msg += '<p><span id="count">5</span> 秒後將自動關閉</p>';
        $('#app').html(msg);
    } else if (search === '?event=usernameDup') {
        var msg = '';
        msg += '<h1>帳號驗證失敗</h1>';
        msg += '<h2>原因：此帳號已開通，請勿重複驗證</h2>';
        msg += '<p><span id="count">5</span> 秒後將自動關閉</p>';
        $('#app').html(msg);
    } else if (search === '?event=insertError') {
        var msg = '';
        msg += '<h1>帳號驗證失敗</h1>';
        msg += '<h2>原因：新增帳號錯誤，請通知管理員</h2>';
        msg += '<p><span id="count">5</span> 秒後將自動關閉</p>';
        $('#app').html(msg);
    }
}
getMessage();
function closeWindow() {
    var count = document.getElementById('count');
    var tick = parseInt(count.innerHTML);
    var timer = setInterval(function () {
        if (tick) {
            count.innerHTML = --tick
        } else {
            clearInterval(timer);
            window.close();
        }
    }, 1000)
}
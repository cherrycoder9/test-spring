console.log("header.js");

doLoginCheck();
function doLoginCheck() {
    console.log("doLoginCheck()");
    $.ajax({
        method: "get",
        url: "/member/login/check",
        success: function (result) {
            console.log(result);
        }
    });

}

// 로그아웃 
function doLogout() {
    console.log("doLogout()");
    $.ajax({
        method: "get",
        url: "/member/logout",
        success: (result) => {
            console.log(result);
            location.href = "/";
        }
    });

}
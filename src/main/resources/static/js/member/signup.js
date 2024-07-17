console.log('signup.js');

// 회원가입
function doSignup() {
    console.log("doSignup()");
    let mId = document.querySelector('#id').value;
    let mPw = document.querySelector('#pw').value;
    let mName = document.querySelector('#name').value;
    let mEmail = document.querySelector('#email').value;
    let mPhone = document.querySelector('#phone').value;

    $.ajax({
        async: false,
        method: "post",
        url: "/member/signup",
        data: {
            id: mId,
            pw: mPw,
            name: mName,
            email: mEmail,
            phone: mPhone
        },
        success: function (resp) {
            if (resp) {
                alert("회원가입 성공");
                location.href = "/member/login";
            } else {
                alert("회원가입 실패");
            }
        }
    });
}
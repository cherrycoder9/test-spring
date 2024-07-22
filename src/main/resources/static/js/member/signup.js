console.log('signup.js');

// 2. 아이디 유효성 검사
function idCheck() {
    console.log("idCheck()");
    // 1. 입력된 값 가져오기 
    let id = document.querySelector('#id').value;
    let idCheckBox = document.querySelector('#idCheckBox');
    console.log(id);
    // 2. 정규표현식 생성
    // 특정한 규칙을 가진 문자열의 집합을 표현할 때 사용하는 형식 언어 
    // 주로 문자열 데이터 검사할 때 사용된다. - 유효성 검사
    // JS의 검사 메소드 
    // 정규표현식.text(검사할대상)
    // 형식 규칙
    // /^ : 지ㅓㅇ규표현식 시작 알림
    // $/ : 정규표현식 끝 알림 
    // a : 문자 a 1개
    // [a-z] : 소문자 a~z 사이의 문자 1개
    // [a-zA-Z] : 소문자 a~z, 대문자 A~Z 사이의 문자 1개
    // [a-zA-Z0-9] : 소문자 a~z, 대문자 A~Z, 숫자 0~9 사이의 문자 1개
    // [가-힣] : 한글 1개
    // + : 1개 이상
    // [ac] : a 또는 c 중 하나
    // [^ac] : a 또는 c가 아닌 문자 1개
    // {n} : n개
    // {n,m} : n개 이상 m개 이하
    // {n,} : n개 이상
    // {,m} : m개 이하
    let idReg = /^[a-zA-Z0-9]{5,30}$/;
    // 3. 정규표현식 검사
    console.log(`글자제한: ${idReg.test(id)}`); // true/false
    let duplicate = false;
    if (reg.test(id)) {
        // 아이디 중복 검사 RestAPI
        $.ajax({
            async: false,
            method: "get",
            url: "/member/idcheck",
            data: {
                "id": id
            },
            success: function (result) {
                console.log(`아이디 중복: ${result}`);
                if (result) {
                    duplicate = false;
                } else {
                    duplicate = true;
                }
            }
        });

        if (duplicate) {
            console.log("아이디 중복");
            idCheckBox.innerHTML = "중복된 아이디입니다.";
            return;
        } else {
            console.log("아이디 적합");
            idCheckBox.innerHTML = "사용 가능한 아이디입니다.";
        }

    } else {
        console.log("아이디 부적합");
        idCheckBox.innerHTML = "알파벳 대소문자와 숫자 조합의 5~30글자로 입력해주세요.";
    }
}

// 3. 비밀번호 유효성 검사
function pwCheck() {
    // 1.
    console.log("pwCheck()");
    let pw = document.querySelector('#pw').value;
    let pwConfirm = document.querySelector('#pwConfirm').value;
    let pwCheckBox = document.querySelector('#pwCheckBox');
    console.log(pw);
    // 2. 정규표현식 생성
    let pwReg = /^[a-zA-Z0-9]{5,30}$/;
    // 3. 정규표현식 검사
    if (pwReg.test(pw)) {
        if (pw === pwConfirm) {
            console.log("비밀번호 적합");
            pwCheckBox.innerHTML = "비밀번호가 일치합니다.";
            return;
        } else {
            console.log("비밀번호 부적합");
            pwCheckBox.innerHTML = "비밀번호가 일치하지 않습니다.";
            return;
        }
    }
}

// 전화번호 유효성 검사
function phoneCheck() {
    let phone = document.querySelector('#phone').value;
    let phoneCheckBox = document.querySelector('#phoneCheckBox');
    let phoneReg = /^([0-9]{2,3})+[-]([0-9]{3,4})+[-]([0-9]{4})$/;
    if (phoneReg.test(phone)) {
        console.log("전화번호 적합");
        phoneCheckBox.innerHTML = "전화번호가 적합합니다.";
    } else {
        console.log("전화번호 부적합");
        phoneCheckBox.innerHTML = "전화번호가 적합하지 않습니다.";
    }
}

// 이메일 유효성 검사 
function emailCheck() {
    let email = document.querySelector('#email').value;
    let emailCheckBox = document.querySelector('#emailCheckBox');
    let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailReg.test(email)) {
        console.log("이메일 적합");
        emailCheckBox.innerHTML = "이메일이 적합합니다.";
        return;
    } else {
        console.log("이메일 부적합");
        emailCheckBox.innerHTML = "이메일이 적합하지 않습니다.";
        return;
    }
}

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
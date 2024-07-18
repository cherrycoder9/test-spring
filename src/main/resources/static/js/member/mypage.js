console.log("mypage.js");

mypage();

function mypage() {
    console.log("mypage()");
    let no = document.querySelector('#no');
    let id = document.querySelector('#id');
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    $.ajax({
        // sync: false,
        method: "get",
        url: "/member/myinfo",
        success: function (data) {
            console.log(data);
            no.innerHTML = data.no;
            id.innerHTML = data.id;
            name.innerHTML = data.name;
            email.innerHTML = data.email;
            phone.innerHTML = data.phone;
        }
    });
}

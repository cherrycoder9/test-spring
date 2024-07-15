/*
    1. 요구사항 확인
    [비회원 게시판]
1. 글 등록 하는데 비회원제 이면서 제목과 내용과 비밀번호 입력받는다.
        2. 모든 글 출력하는데 날짜, 제목, 조회수 순으로 출력;
3. 모든 글에서 제목을 클릭하면 상세글이 출력되고 모든 정보 출력 될 수 있도록 해주세요.
            < 날짜, 제목, 조회수, 내용 >
    4. 상세 글에서 수정시 비밀번호를 입력받아 일치하면 새로운 내용을 입력받고 수정해주세요.아니면 불가능;
5. 상세 글에서 삭제시 비밀번호를 입력받아 일치할 경우에만 삭제;

2. 요구사항 분석 -> 설계
[백엔드];
1. 메모리 구성;
1. 등록용: 제목, 내용, 비밀번호;
2. 출력용: 날짜, 조회수
    - 1안(배열) : 배열 5개;
1. title = [t1, t2, t3, ...], content = [], password = [], date = [], view = [];
2. board = [
    [title1, content1, password1, date1],
    [title2, content2, password2, date2],
    [title3, content3, password3, date3],
    ...
                    ]
    - 2안(문자열);
boardList = ["title1,content1,password1,date1", "title2,content2,password2,date2"]
    - " " 하나의 문자열이 하나의 게시물이 되고, 쉼표 기준으로 게시물의 정보 구분한다.
        boardList = ["title1,content1,password1,date1\ntitle2,content2,password2,date2\ntitle3,content3,password3,date3"]
        - 전체 게시물을 " "하고 각 게시물은 \n 구분하고, 쉼표는 각 게시물 정보를 분류한다

            - 3안(객체);
2. 기능 구성;
1. 등록 create();
2. 모든글 출력 allread();
3. 상세글출력 read();
4. 수정 update();
5. 삭제 delete ();
3. 기능 마다의 로직 순서도;
1. create():
1. HTML에서 입력받은 값 가져오기;
2. 유효성검사;
3.배열 저장;
4. 안내;
2. allRead():
1.(어디에) 출력할 html 요소 호출;
2.(무엇을) 반복문 이용한 배열내 데이터를 HTML 형식 구성;
3.(출력 / 대입) 구성한 html을 요소에 대입;
3. read():
1. 상세정보의 인덱스를 받고;
2. 해당 인덱스의 정보를 출력(어디에 무엇을 출력);
4. update():
1. 업데이트할 인덱스를 받고;
2. 비밀번호를 새롭게 입력받아;
3. 입력받은 비밀번호와 해당 인덱스가 일치하면;
4. 해당 인덱스 수정;
5. delete ():
1. 삭제할 인덱스를 받고;
2. 비밀번호를 새롭게 입력받아;
3. 입력받은 비밀번호와 해당 인덱스의 비밀번호와 일치하면;
4. 해당 인덱스 삭제

[프론트엔드];
1. HTML 구성;


3. 개발 / 구현
[각 파트별 구현]
[연동];

4. 테스트;

5. 유지보수;

*/

let boardList = ["제목입니다,내용입니다,1234,2024-05-24,3", "두번째제목이야,또내용입니다,4567,2024-05-24,0"];

function _create() {
    // 1-1
    let title = document.querySelector('#titleInput').value;
    let content = document.querySelector('#contentInput').value;
    let password = document.querySelector('#passwordInput').value;
    // 2-1 입력받지 않은 데이터를 초기화
    let date = new Date(); // 현재 날짜를 반환해주는 클래스
    // console.log(date.getFullYear());
    // console.log(date.getMonth() + 1);
    // console.log(date.getDate());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let currentDay = date.getDate();
    date = `${currentYear}-${currentMonth}-${currentDay}`;
    let view = 0; // 처음 등록시 조회수 0부터 시작
    // 3. 쉼표로 구분해서 하나의 문자열로 만들자.
    let board = `${title},${content},${password},${date},${view}`;
    // 4. 배열 등록
    boardList.push(board);
    console.log(boardList);
    // 5. 등록 성공
    alert('등록성공');
    _allRead(); // 등록성공시 전체출력 함수 호출
}

// 2. 전체출력 실행조건: 1. 페이지가 열렸을때(HTML실행->JS실행), 2. 데이터가 변화(수정/삭제/등록)가 있을때
_allRead();

function _allRead() {
    // 1. 어디에
    let tableBody = document.querySelector('#tableBody');
    // 2. 무엇을
    let html = '';
    for (let i = 0; i < boardList.length; i++) {
        // i 번째 게시물 반환
        let board = boardList[i];
        console.log(board);
        // 게시물의 정보 분류: 특정 문자 기준으로 분류 .split
        let boardArray = board.split(',');
        console.log(boardArray);
        // 쉼표 기준으로 분류된 각 배열의 정보
        console.log(boardArray[0], boardArray[3], boardArray[4]);
        html += `
            <tr>
                <td>${i}</td>
                <td onclick="_read(${i})">${boardArray[0]}</td>
                <td>${boardArray[3]}</td>
                <td>${boardArray[4]}</td>
            </tr>
        `;
    }
    // 3. 출력/대입
    tableBody.innerHTML = html;
}

// 3. 개별출력 실행조건: (누구를=인덱스)1. 제목 클릭했을 때
function _read(index) {
    let boardArray = boardList[index].split(',');
    ++boardArray[4];
    boardList[index] = boardArray.join();
    _allRead();
    // 1. 어디에
    let viewPage = document.querySelector('#viewPage');
    // 2. 무엇을
    let html = `
        <h3>상세 페이지</h3>
        <div>${boardArray[0]}</div>
        <div>
            <span>조회수: ${boardArray[4]}</span>
            <span>작성일: ${boardArray[3]}</span>
        </div>
        <div>${boardArray[1]}</div>
        <button onclick="_update(${index})">수정</button>
        <button onclick="_delete(${index})">삭제</button>
    `;
    // 3. 출력/대입
    viewPage.innerHTML = html;
}

// 4. 수정함수 실행조건: (누구를=인덱스)1. 수정버튼 클릭할때
function _update(index) {
    if (_pwConfirm(index) == false) {
        return;
    }
    // 배열 내 특정 데이터 수정
    // 1. 해당 게시물 분류
    let board = boardList[index].split(',');
    // 새로운 제목과 내용을 입력받는다
    let utitle = prompt('수정할 제목');
    let ucontent = prompt('수정할 내용');
    // 수정된 정보로 구성: 새로운 제목과 내용만 수정 변수로 구성, 나머진 기존 데이터 사용
    let uboard = `${utitle},${ucontent},${board[2]},${board[3]},${board[4]}`;
    boardList[index] = uboard;
    // 화면 새로고침 (재출력: 데이터 변화가 있기 때문에)
    _allRead();
    _read(index);
}

// 5. 삭제함수 실행조건: (누구를=인덱스)2. 삭제버튼 클릭할때
function _delete(index) {
    if (_pwConfirm(index) == false) {
        return;
    }
    // 배열 내 특정 인덱스 삭제
    boardList.splice(index, 1);
    _allRead();
    document.querySelector('#viewPage').innerHTML = '';
}

// 6. 비밀번호 검증 함수
function _pwConfirm(index) {
    // 패스워드 검증
    // 1. 검증받을 패스워드를 입력바든ㄴ다
    let confirmPw = prompt('비밀번호:');
    // 2. 해당 인덱스의 비밀번호와 입력받은 비밀번호가 일치한지 체크
    if (confirmPw != boardList[index].split(',')[2]) {
        alert('패스워드가 다릅니다.');
        return false; // 패스워드 불일치
    }
    return true; // 패스워드 일치
}
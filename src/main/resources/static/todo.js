let todoList = [];

function add() {
    let todoInput = document.querySelector('#todoList');

    let todo = todoInput.value;
    todoList.push(todo);
    todoSwitch.push(0);

    alert('등록완료 ');

    todoInput.value = null;

    print();
    console.log(todoSwitch); // 콘솔 로그 테스트 // 콘솔 로그 테스트

}

function print() {
    console.log("print()");
    $.ajax({
        method: "get",
        url: "/todos",  // 백엔드 서버 주소를 정확히 지정
        success: function (data) {
            console.log(data);
            todoList = data;  // 받아온 데이터를 todoList에 저장
            renderTodoList();  // 데이터를 화면에 표시
        }
    });
}

function renderTodoList() {
    let html = ``;
    for (let i = 0; i < todoList.length; i++) {
        let currentTodo = todoList[i];
        html += `
            <div class="${currentTodo.completed ? 'doneTodo' : 'willTodo'}">
                <div>${currentTodo.todo}</div>
                <div>
                    <button onclick="update(${currentTodo.id})">변경</button>
                    <button onclick="remove(${currentTodo.id})">삭제</button>
                </div>   
            </div>
        `;
    }
    document.getElementById('tableBox').innerHTML = html;
}

// 페이지 로드 시 데이터 가져오기
print();

function remove(index) {
    todoList.splice(index, 1);
    todoSwitch.splice(index, 1);
    console.log(todoSwitch); // 콘솔 로그 테스트 // 콘솔 로그 테스트
    print();
    alert('삭제완료');

}

function update(index) {
    console.log("update()");
    $.ajax({
        method: "put",
        url: "/todos/update",
        data: {
            id: index
        },
        success: function (resp) {
            if (resp) {
                console.log("성공적으로 삭제됨");
                print();
            } else {
                console.log("삭제 안됨");
            }
        }
    });
}
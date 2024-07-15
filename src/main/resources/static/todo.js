let todoList = [];

function add() {
    let todoInput = document.querySelector('#todoList');
    let todo = todoInput.value;

    $.ajax({
        method: "post",
        url: "/todos/create",
        data: {
            todo: todo
        },
        success: function (resp) {
            if (resp) {
                alert('등록 완료');
                print();
            } else {
                alert('등록 안됨');
            }
        }
    });
    todoInput.value = null;
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
    console.log("remove()");
    $.ajax({
        method: "delete",
        url: "/todos/delete",
        data: {
            id: index
        },
        success: function (resp) {
            if (resp) {
                alert("삭제 완료");
                print();
            } else {
                alert("삭제 실패");
            }
        }
    });
}

function update(index) {
    console.log("update()");
    console.log(typeof index);
    $.ajax({
        method: "put",
        url: "/todos/update",
        data: {
            id: index
        },
        success: function (resp) {
            if (resp) {
                console.log("성공적으로 변경됨");
                print();
            } else {
                console.log("변경 안됨");
            }
        }
    });
}
const toDoForm = document.getElementById("todo-form");
// id가 todo-form인 form 안에서 input을 찾음
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// newTodo값 생성
function paintToDo(newTodo) {
    // li값 생성
    const li = document.createElement("li");
    // span값 생성
    const span = document.createElement("span");
    // li에 span을 넣음
    li.appendChild(span);
    // span에 텍스트를 넣음
    span.innerText = newTodo;
    // list에 li를 넣음
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // todo저장
    const newTodo = toDoInput.value;
    // 엔터 후 input값 삭제
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
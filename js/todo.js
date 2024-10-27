const toDoForm = document.getElementById("todo-form");
// id가 todo-form인 form 안에서 input을 찾음
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

// ToDo저장
function saveToDos() {
    // toDos 배열을 localStorage에 집어넣는다
    localStorage.setItem("todos", JSON.stringify(toDos));
};

// ToDo삭제
function deleteToDo(event) {
    // 어떤 버튼을 눌렀는지 판별
    const li = event.target.parentElement;
    li.remove();
};

// newTodo값 생성
function paintToDo(newTodo) {
    // li값 생성
    const li = document.createElement("li");
    // span값 생성
    const span = document.createElement("span");
    // span에 텍스트를 넣음
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "✖️";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // todo저장
    const newTodo = toDoInput.value;
    // 엔터 후 input값 삭제
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
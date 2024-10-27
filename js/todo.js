const toDoForm = document.getElementById("todo-form");
// id가 todo-form인 form 안에서 input을 찾음
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// ToDo저장
function saveToDos() {
    // toDos 배열을 localStorage에 집어넣는다
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

// ToDo삭제
function deleteToDo(event) {
    // 어떤 버튼을 눌렀는지 판별
    const li = event.target.parentElement;
    li.remove();
    // 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
};

// newTodo값 생성
function paintToDo(newTodo) {
    // li값 생성
    const li = document.createElement("li");
    // li에 id넣음
    li.id = newTodo.id;
    // span값 생성
    const span = document.createElement("span");
    // span에 텍스트를 넣음
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// Todo엔터
function handleToDoSubmit(event) {
    event.preventDefault();
    // todo저장
    const newTodo = toDoInput.value;
    // 엔터 후 input값 삭제
    toDoInput.value = "";
    // todo값에 id값 부여
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    // 새로고침 후에도 toDos배열을 불러옴
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // forEach함수는 paintToDo를 parsedToDos배열의 요소마다 실행한다
    parsedToDos.forEach(paintToDo);
}

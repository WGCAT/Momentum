const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const btnLogout = document.querySelector("#btnLogout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 유저에게 인사
function onLoginSubmit(event) {
    // 브라우저가 기본 동작(새로고침)을 실행하지 못하게 방지
    event.preventDefault();
    // 이벤트 발생 시 히든 추가
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // h1에 텍스트 추가
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// 유저정보를 받아서 인자로 넣고 히든 삭제하는 함수
function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    btnLogout.classList.remove(HIDDEN_CLASSNAME);
    btnLogout.addEventListener("click", onLogOut);
}

function paintForm() {
    loginInput.value = "";
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function onLogOut() {
    greeting.classList.add(HIDDEN_CLASSNAME);
    btnLogout.classList.add(HIDDEN_CLASSNAME);
    paintForm();
    localStorage.removeItem(USERNAME_KEY);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage에 유저정보가 없다면
if(savedUsername === null) {
    // form의 submit를 기다린다
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
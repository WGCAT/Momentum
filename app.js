const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// 유저에게 인사
function onLoginSubmit(event) {
    // 브라우저가 기본 동작(새로고침)을 실행하지 못하게 방지
    event.preventDefault();
    // 이벤트 발생 시 히든 추가
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // h1에 텍스트 추가
    const username = loginInput.value;
    // "Hello " + username와 같음
    greeting.innerText = `Hello ${username}`;
    // 히든 삭제
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const clock = document.querySelector("#clock");
const date = document.querySelector("#date");
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];



function getClock() {
    // Date가 가진 함수 활용
    const currentDate = new Date();
    // padStart = String의 길이가 2가 아니라면 앞쪽에 0을 추가
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    const dateToday = fullDate.getDate();
    const dayIndex = fullDate.getDay();
    date.innerText = `${year}/${month}/${dateToday} ${day[dayIndex]}`;
}

// 웹사이트가 로드되자마자 getClock()을 실행 후 매초마다 setInterval
getDate();
getClock();
setInterval(getClock, 1000);
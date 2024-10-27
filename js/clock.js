const clock = document.querySelector("h2#clock");

function getClock() {
    // Date가 가진 함수 활용
    const date = new Date();
    // padStart = String의 길이가 2가 아니라면 앞쪽에 0을 추가
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 웹사이트가 로드되자마자 getClock()을 실행 후 매초마다 setInterval
getClock();
setInterval(getClock, 1000);
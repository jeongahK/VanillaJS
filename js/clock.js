const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
//매 초마다 date라는 new object 생성
}

getClock(); //웹사이트 로드하자마자 clock 호출
setInterval(getClock, 1000); // ms단위, 1초마다 clock 호출, 실시간으로 보이게 하는 부분
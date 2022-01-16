const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//매 초마다 date라는 new object 생성
}

getClock(); //웹사이트 로드하자마자 clock 호출
setInterval(getClock, 1000); // 1초마다 clock 호출
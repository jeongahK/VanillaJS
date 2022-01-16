const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello"); // 이 함수를 매 2초마다 실행 
}

setInterval(sayHello, 5000); // 실행하고자 하는 함수, 단위(ms)
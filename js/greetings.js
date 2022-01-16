const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기함
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault(); // 브라우저의 기본 동작을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;    
   // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, username);  //"key", value
    paintGreetings(username);
}

function paintGreetings(username){
  //  const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; //변수와 string 결합/변수를 string안에 => ${변수명} / ``로 시작해야 함
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //submit: 엔터, 버튼 누를때

}else{
    // show the greeting
    paintGreetings(savedUsername);
}
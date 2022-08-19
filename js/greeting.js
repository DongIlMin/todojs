const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
loginForm.classList.remove("hidden");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden"); 
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreetings();
};
function paintingGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    loginForm.classList.add("hidden");
};
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintingGreetings();
}
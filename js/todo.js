


const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list"); 
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteToDo(event) {
    const targetList = event.target.parentElement;
    targetList.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(targetList.id));
    saveToDos();
}
function paintToDo(newTodo){
    const newList = document.createElement("li");
    newList.id = newTodo.id;
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodo.Text;
    const newButton = document.createElement("button");
    newButton.innerText = "Delete";
    newButton.addEventListener("click", deleteToDo);
    newList.appendChild(newSpan);
    newList.appendChild(newButton);
    toDoList.appendChild(newList);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        Text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
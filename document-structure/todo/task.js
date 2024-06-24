let todo = document.getElementsByClassName("card")[0];
let input = document.getElementsByClassName("tasks__input")[0];
let tasksList = document.getElementById("tasks__list");
let returnTasksList = JSON.parse(localStorage.getItem("myList"));
console.log(returnTasksList);
tasksList.innerHTML = returnTasksList;

function todoLocalizator() {
    let serialTasksList = JSON.stringify(tasksList.innerHTML);
    localStorage.setItem("myList", serialTasksList);

};
function createTask() {
    let isToDo = document.createElement("div");
    let isToDoText = document.createElement("div");
    let isToDoRemove = document.createElement("a");
    
    isToDo.classList.add("task");
    isToDoText.textContent = input.value;
    isToDoText.classList.add("task__title");
    isToDoRemove.classList.add("task__remove");
    isToDoRemove.innerHTML = "&times;";
    isToDoRemove.href = "#";

    isToDo.appendChild(isToDoText);
    isToDo.appendChild(isToDoRemove);
  
    return isToDo;
}

function todoMaker(e) {
    e.preventDefault();
    let isToDo = createTask();
    tasksList.appendChild(isToDo);
    e.target.reset();
    todoLocalizator();
  };
todo.addEventListener("submit", todoMaker);


function todoRemover(e) {
    if (e.target.classList.contains("task__remove")){
        e.preventDefault();
        e.target.parentElement.remove();
        todoLocalizator();
    };
};
tasksList.addEventListener("click", todoRemover);







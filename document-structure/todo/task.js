let todo = document.getElementsByClassName("card")[0];
let input = document.getElementsByClassName("tasks__input")[0];
let tasksList = document.getElementById("tasks__list");
let returnTasksList = JSON.parse(localStorage.getItem("notesList"));
console.log(returnTasksList);
todoRestorer();

function todoRestorer() {
    let cachedTasks = [];
    for (const elem of returnTasksList) {
        tasksList.insertAdjacentHTML('beforeend', `
<div class="task">
  <div class="task__title">
    ${elem}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
`);
    }
};

function todoLocalizator() {
    let cachedTasks = [];
    for (const elem of tasksList.children) {
        cachedTasks.push(elem.getElementsByClassName("task__title")[0].textContent);
    }
    console.log(cachedTasks);
    let serialTasksList = JSON.stringify(cachedTasks);
    localStorage.setItem("notesList", serialTasksList);

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







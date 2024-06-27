let todo = document.getElementsByClassName("card")[0];
let input = document.getElementsByClassName("tasks__input")[0];
let tasksList = document.getElementById("tasks__list");
let returnTasksList = JSON.parse(localStorage.getItem("notesList"));
if (returnTasksList){
    todoRestorer();
};

function todoRestorer() {
    let cachedTasks = [];
    for (const elem of returnTasksList) {
        createTask(elem);
    }
};

function todoLocalizator() {
    let cachedTasks = [];
    for (const elem of tasksList.children) {
        cachedTasks.push(elem.getElementsByClassName("task__title")[0].textContent);
    }
    let serialTasksList = JSON.stringify(cachedTasks);
    localStorage.setItem("notesList", serialTasksList);

};

function createTask(value) {
    tasksList.insertAdjacentHTML('beforeend', `
<div class="task">
  <div class="task__title">
    ${value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
`);
}

function todoMaker(e) {
    e.preventDefault();
    createTask(input.value);
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







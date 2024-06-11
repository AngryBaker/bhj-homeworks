let dropBtn = document.getElementsByClassName("dropdown__value")[0];
let dropList = document.getElementsByClassName("dropdown__list")[0];

dropBtn.addEventListener("click", dropClick);

function dropClick() {
  dropList.classList.add("dropdown__list_active");
};

let dropdown = document.getElementsByClassName("dropdown")[0];

dropdown.addEventListener("click", dropdownNaming);

function dropdownNaming(event) {
    if (event.target.classList.contains("dropdown__link")) {
        event.preventDefault();
        let currentText = event.target.textContent;
        dropBtn.textContent = currentText;
        dropList.classList.remove("dropdown__list_active"); 
    };
    
  };
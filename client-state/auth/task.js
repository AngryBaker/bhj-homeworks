const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
let result;
function welcomer(id) {
    welcome.classList.add("welcome_active")
    welcome.innerHTML = `Добро пожаловать, пользователь #<span id="user_id">${id}</span>`;
};

if(localStorage.user){
    welcomer(localStorage.user);
}

function formSender(e) {
    const authFormData = new FormData(form);
    const authXhr = new XMLHttpRequest();
    authXhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    authXhr.responseType = "json";
    authXhr.onload = function() {
      result = authXhr.response;
      if (!result.success){
      alert("Неверный логин/пароль")
      } else {
      welcomer(result.user_id);
      localStorage.user = result.user_id;
      }  
    };
    authXhr.send(authFormData);
    e.preventDefault();
    form.reset();
};

form.addEventListener("submit", formSender);
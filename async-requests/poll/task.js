let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();

pollAnswers.addEventListener("click", e => {
    if (e.target.classList.contains("poll__answer")){
        alert("Спасибо, ваш голос засчитан!");
    };
});

function parser(info) {
    pollTitle.textContent = info.data.title;

    for (let answer of info.data.answers) {
        pollAnswers.insertAdjacentHTML('beforeend', 
              `<button class="poll__answer">
              ${answer}
            </button>`
        );
    };
  };

xhr.onload = function() {
    if (xhr.status != 200) { 
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
    } else {    
      info = xhr.response;
      parser(info);
    }
};

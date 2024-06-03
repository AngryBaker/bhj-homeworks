let timer = document.getElementById("timer");
let time = +timer.textContent;

const intervalId = setInterval(function() {
    if (time === 0) {
        clearInterval(intervalId);
        alert("iВы победили в конкурсе!")
    }
    time -= 1;
    timer.textContent = time;
},1000);




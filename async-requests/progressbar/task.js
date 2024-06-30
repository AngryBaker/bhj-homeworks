let form = document.getElementById("form");
let progress = document.getElementById("progress");
form.addEventListener("submit", formSender);


function formSender(e) {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(formData);
    xhr.upload.addEventListener("progress", e => {
        let loadProgress = e.total / e.loaded;
        progress.value = loadProgress;
    })
    e.preventDefault();
};
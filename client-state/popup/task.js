const modal = document.getElementById("subscribe-modal");
const modalClose = document.getElementsByClassName("modal__close")[0];

if (!(document.cookie === "modal=close")) {
    modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    document.cookie = "modal=close; path=/; secure; SameSite=None";
});

// нормальное решение через localStorage
// if (!(localStorage.modalClose)) {
//     modal.classList.add("modal_active");
// }

// modalClose.addEventListener("click", () => {
//     modal.classList.remove("modal_active");
//    localStorage.modalClose = true;

// });

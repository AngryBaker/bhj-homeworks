let revealElements = document.getElementsByClassName("reveal"); 
let isInView = function(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false;
};

let scrollCheker = function() {
    for (revEl of revealElements) {
        if (isInView(revEl)) {
            revEl.classList.add("reveal_active")
        }
    }
 };

document.addEventListener("scroll", scrollCheker);




let sizeController = document.getElementsByClassName("book__control_font-size")[0];
let colorController = document.getElementsByClassName("book__control_color")[0];
let bgColorController = document.getElementsByClassName("book__control_background")[0];
let book = document.getElementById("book");

let activeChanger = function() {
    let activeColor = document.getElementsByClassName("color_active")[0];
        activeColor.classList.remove("color_active");
        event.target.classList.add("color_active");
};

let sizeChanger = function(event) {
    if (event.target.classList.contains("font-size")) {
        let activeFont = document.getElementsByClassName("font-size_active")[0];
        activeFont.classList.remove("font-size_active");
        event.target.classList.add("font-size_active");

        let newClass = `font-size_${event.target.dataset.size}`;
        book.classList.remove("font-size_big", "font-size_small");
        if (event.target.dataset.size) {
            book.classList.add(newClass);
        }
        event.preventDefault();
    };
    
};

let colorChanger = function(event) {
    if (event.target.dataset.textColor) {
        activeChanger();

        let newClass = `book_color-${event.target.dataset.textColor}`;
        book.classList.remove("book_color-whitesmoke", "book_color-black", "book_color-gray");  
        book.classList.add(newClass);
        event.preventDefault();
    }
    
};

let bgColorChanger = function(event) {
    if (event.target.dataset.bgColor) {
        activeChanger();

        let newClass = `book_bg-${event.target.dataset.bgColor}`;
        book.classList.remove("book_bg-white", "book_bg-black", "book_bg-gray");  
        book.classList.add(newClass);
        event.preventDefault();
    }
    
};

colorController.addEventListener("click", colorChanger);
sizeController.addEventListener("click", sizeChanger);
bgColorController.addEventListener("click", bgColorChanger);


let tabs = document.getElementsByClassName("tab");
let tabNav = document.getElementsByClassName("tab__navigation")[0];
let tabsContent = document.getElementsByClassName("tab__content");
let tab__contents = document.getElementsByClassName("tab__contents")[0];

let tabChanger = (event) => {
    if (event.target.classList.contains("tab")){
        let clickedTab = event.target;
        for (const elem of tabs) {
            elem.classList.remove("tab_active");
        }
        clickedTab.classList.add("tab_active");
        let tabsArr = Array.from(tabs);
        let index = tabsArr.indexOf(clickedTab);
        for (const contentElem of tabsContent) {
            contentElem.classList.remove("tab__content_active");
        }
        tabsContent[index].classList.add("tab__content_active");

    };
};

tabNav.addEventListener("click", tabChanger);



let hasTooltip = document.getElementsByClassName("tooltip_active");

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.scrollY,
      right: box.right + window.scrollX,
      bottom: box.bottom + window.scrollY,
      left: box.left + window.scrollX
    };
}

function createMessageUnder(elem, html) {
    let message = document.createElement('div');
    message.style.cssText = "position:absolute";
  
    let coords = getCoords(elem);
    console.log(elem.dataset.position);

    message.style.left = coords.left + "px";
    message.style.top = coords.top + (coords.top - coords.bottom - 5) + "px";

    if (elem.dataset.position === "top"){
        message.style.left = coords.left + "px";
        message.style.top = coords.top + (coords.top - coords.bottom - 5) + "px";
    };

    if (elem.dataset.position === "bottom"){
        message.style.left = coords.left + "px";
        message.style.top = coords.bottom + "px";
    };

    if (elem.dataset.position === "left"){
        message.style.left = coords.left - ((coords.right - coords.left) / 2) + "px";
        message.style.top = coords.top + "px";
    };

    if (elem.dataset.position === "right"){
        message.style.left = coords.right + "px";
        message.style.top = coords.top + "px";
    };
  
    
  
    message.innerHTML = html;
  
    return message;
}

function toolOpener(e) {
    if (e.target.classList.contains("has-tooltip")) {
        e.preventDefault();
        let link = e.target;

        let toolText = link.getAttribute("title");

        let message = createMessageUnder(link, toolText);
        document.body.append(message);
        toolChanger();
        message.classList.add("tooltip_active","tooltip");
        setTimeout(() => message.remove(), 5000);
        
    }
};

document.body.addEventListener("click", toolOpener);

function toolChanger() {
    for ( let elem of hasTooltip) {
        if (elem.classList.contains("tooltip_active")) {
            elem.classList.toggle("tooltip_active")
        }
    };
};




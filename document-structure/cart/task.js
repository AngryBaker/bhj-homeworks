let products = document.getElementsByClassName("products")[0];
let cart = document.getElementsByClassName("cart__products")[0];
let productCartProducts = cart.children;

function productCounter(e){
    if(e.target.classList.contains("product__quantity-control_dec")) {
        let number = +e.target.nextElementSibling.textContent;
        if (number >= 2) {
            --number;
           e.target.nextElementSibling.textContent = number;
        }
    }
    if(e.target.classList.contains("product__quantity-control_inc")) {
        let number = +e.target.previousElementSibling.textContent;
        ++number;
        e.target.previousElementSibling.textContent = number;
    }
};

function adderNewProduct(cardId, productValue, imgSrc){
   let productCard = document.createElement("div"); 
   cart.appendChild(productCard);
   productCard.outerHTML = `<div class="cart__product" data-id="${cardId}">
   <img class="cart__product-image" src="${imgSrc}">
   <div class="cart__product-count">${productValue}</div>
   <a href="#" class="task__remove">&times;</a>
   </div>`;
};

function productCheker(cardId){
    for (let elem of productCartProducts) {
       if (elem.dataset.id === cardId) {
        console.log("ura-pusto");
        return true;
        
       }
    }
};

function addToCart(e){
    if(e.target.classList.contains("product__add")) {
        let cardId = e.target.closest(".product").dataset.id;
        let productValue = e.target.closest(".product").getElementsByClassName("product__quantity-value")[0].textContent;
        let imgSrc = e.target.closest(".product").getElementsByClassName("product__image")[0].getAttribute("src");
        console.log(cardId, productValue, imgSrc);
        if (productCheker(cardId)){
            for (let elem of productCartProducts) {
                if (elem.dataset.id === cardId) {
                  let cartCounter = elem.getElementsByClassName("cart__product-count")[0];  
                  cartCounter.textContent = +cartCounter.textContent + (+productValue);
                }
            }
        } else {
            adderNewProduct(cardId, productValue, imgSrc);
        }
        
    };
}

function todoRemover(e) {
    if (e.target.classList.contains("task__remove")){
        e.preventDefault();
        e.target.parentElement.remove();
    };
};

cart.addEventListener("click", todoRemover);
products.addEventListener("click", productCounter);
products.addEventListener("click", addToCart);

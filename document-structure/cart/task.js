let products = document.getElementsByClassName("products")[0];
let cart = document.getElementsByClassName("cart__products")[0];
let productCartProducts = Array.from(cart.getElementsByClassName("cart__product"));


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


function addToCart(e){
    if(e.target.classList.contains("product__add")) {
        let cardId = e.target.closest(".product").dataset.id;
        let productValue = e.target.closest(".product").getElementsByClassName("product__quantity-value")[0].textContent;
        let imgSrc = e.target.closest(".product").getElementsByClassName("product__image")[0].getAttribute("src");
        productCartProducts = Array.from(cart.getElementsByClassName("cart__product"));
        const productInCart = productCartProducts.find((elem) => {
            if (elem.dataset.id === cardId) {
                return elem;
            }
        });
        
        if (productInCart){
            const prdctCount = productInCart.getElementsByClassName("cart__product-count")[0];
            prdctCount.textContent = +prdctCount.textContent +(+productValue);
        } else {
            adderNewProduct(cardId, productValue, imgSrc);
            productCartProducts = Array.from(cart.getElementsByClassName("cart__product"));
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

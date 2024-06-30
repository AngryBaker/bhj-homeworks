let gif = document.getElementById("loader");
let info;
let items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = "json";
xhr.send();

function parser(info) {
    for (let currency of info) {
        items.insertAdjacentHTML('beforeend', 
              `<div class="item">
                <div class="item__code">
                        ${currency.CharCode}
                    </div>
                    <div class="item__value">
                         ${currency.Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
              </div>`
        );
    };
  };

xhr.onload = function() {
    if (xhr.status != 200) { 
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
    } else { 
      gif.classList.remove("loader_active");    
      info = Object.values((xhr.response).response.Valute);
      parser(info);
    }
};



  
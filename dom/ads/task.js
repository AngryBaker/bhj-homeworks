let ads = Array.from(document.getElementsByClassName("rotator__case"));
let timer = 1000;
let adsChangerId = setInterval(adsChanger, timer);
function adsChanger() {
    let activeAd = document.getElementsByClassName("rotator__case_active")[0];
    let counter = ads.indexOf(activeAd) + 1;
    
    if (counter >= ads.length) {counter = 0};
    activeAd.classList.remove("rotator__case_active");
    ads[counter].classList.add("rotator__case_active");
    ads[counter].style.color = ads[counter].dataset.color;
    timer = ads[counter].dataset.speed;
    clearInterval(adsChangerId);
    adsChangerId = setInterval(adsChanger, timer);
};

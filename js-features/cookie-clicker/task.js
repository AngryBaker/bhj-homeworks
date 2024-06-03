const myCookie = document.getElementById("cookie");
const myCounter = document.getElementById("clicker__counter");
const myClickSpeedTime = document.getElementById("clicker__speed");
oldTime = 0;
myCookie.onclick = function(){
    const nowTime = new Date().getTime();
    let clickTime = nowTime - oldTime;
    let numberOfClicks = +myCounter.textContent;
    numberOfClicks += 1;
    myCounter.textContent = numberOfClicks;
    sizeChanger();
    myClickSpeedTime.textContent = (1 / clickTime * 1000).toFixed(2);
    oldTime = nowTime;
};

function sizeChanger() {
  if (+myCounter.textContent % 2){
    myCookie.width = 250;
  } else {
    myCookie.width = 200;
  }
}; 
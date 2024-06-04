const dead = document.getElementById("dead"),
  lost = document.getElementById("lost");
  let numberOfDeadMole = +dead.textContent;
  let numberOfEscapeMole = +lost.textContent;

function getHole(index){
   return document.getElementById(`hole${index}`);
};

for (let i = 1; i < 10; ++i) {
  let hole = getHole(i);
  hole.onclick = function(){
    if (hole.className === 'hole hole_has-mole') {
        ++numberOfDeadMole;
        dead.textContent = numberOfDeadMole;
      } else {
        ++numberOfEscapeMole;
        lost.textContent = numberOfEscapeMole;
      }
      if (numberOfDeadMole === 10) {
        alert("You win");
        counterCleaner();
      }

      if (numberOfEscapeMole === 5) {
        alert("You lost");
        counterCleaner();
      }
  };
};

function counterCleaner() {
    dead.textContent = 0;
    lost.textContent = 0;
    numberOfDeadMole = 0;
    numberOfEscapeMole = 0;
};




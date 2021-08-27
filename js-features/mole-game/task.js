const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


for (let index = 1; index < 9; index++){
   function getHole(index){
      let holeClick = document.getElementById(`hole${index}`);
      console.log(holeClick);
      return holeClick;
   }
   const hole = getHole(index);

   hole.onclick = function(){
      if(hole.className.includes("hole_has-mole") === true){
         Number(++dead.textContent);
      } else {
         Number(++lost.textContent);
      }

      function clear () {
         dead.textContent = 0;
         lost.textContent = 0;
      } 
      if(dead.textContent == 10){
         alert('Вы выиграли!');
        clear();
      } else if(lost.textContent == 5){
         alert('Вы проиграли!');
        clear();
      }
   }
};




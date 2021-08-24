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

      if(dead.textContent == 10){
         alert('Вы выиграли!');
         dead.textContent = 0;
         lost.textContent = 0;
      } else if(lost.textContent == 5){
         alert('Вы проиграли!');
         dead.textContent = 0;
         lost.textContent = 0;
      }
   }
};




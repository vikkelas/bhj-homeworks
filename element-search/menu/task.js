const menuLink = document.getElementsByClassName('menu__link');


for(let i = 0; i < 9; i++){
   function getClick(i){
      let btnElement = menuLink.item(i);
      console.log(btnElement.parentElement);
      return btnElement;
   };

   let btnClick = getClick(i);
   btnClick.onclick = function(){
      
   }

};


const menuLink = document.querySelectorAll('li. menu__link');
const menuSub = document.querySelectorAll('menu_sub');

for(let i = 0; i < 9; i++){
   let clickMenu = menuSub[i].parentElement;
   clickMenu.onclick = ()=>{
      menuSub.classList.toggle('menu_active')
      }
   };


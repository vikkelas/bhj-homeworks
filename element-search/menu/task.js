const menuLink = document.getElementsByClassName('menu__link');
const menuSub = document.getElementsByClassName('menu_sub');

for(let i = 0; i < menuLink.length; i++){
   let menuArr = Array.from(menuSub);
   let clickMenu = menuArr[i].closest('li');
   clickMenu.onclick = () => {
      menuSub[i].classList.toggle('menu_active');
      return false;
      }
   };
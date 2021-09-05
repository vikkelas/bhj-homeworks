const menuLink = document.querySelectorAll('.menu__link');
const currentActive = [...document.querySelectorAll('.menu_sub')]
let index = 0;

for(let i = 0; i < menuLink.length; i++){      
   menuLink[i].onclick = ()=>{
       let subMenu = menuLink[i].closest('li').querySelector('li > ul');
      if()
       return false
   }
};


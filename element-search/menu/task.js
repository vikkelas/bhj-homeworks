const menuLink = document.querySelectorAll('.menu__link');
const currentActive = [...document.querySelectorAll('.menu_sub')]


for(let i = 0; i < menuLink.length; i++){      
   menuLink[i].onclick = ()=>{
       let subMenu = menuLink[i].closest('li').querySelector('li > ul');
       subMenu.classList.toggle('menu_active')
       return false
   }
};


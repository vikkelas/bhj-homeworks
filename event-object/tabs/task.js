const btnMenu = [...document.querySelectorAll('.tab')];
const content = [...document.querySelectorAll('.tab__content')];
let index = null;

for(let i = 0; i <btnMenu.length; i++){
   btnMenu[i].addEventListener('click', active);
   function active(){
     index = btnMenu.findIndex(item=>item.classList.contains('tab_active'));
      clear();
      btnMenu[i].classList.add('tab_active');
      content[i].classList.add('tab__content_active');
   }
}

function clear(){
   btnMenu[index].classList.remove('tab_active');
   content[index].classList.remove('tab__content_active');
}
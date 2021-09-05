
const btn = document.querySelector('.dropdown');
const menuItem = [...document.querySelectorAll('.dropdown__link')];
let seeText = document.querySelector('.dropdown__value');

btn.addEventListener('click',function (){
   this.querySelector('ul').classList.toggle('dropdown__list_active')
});
menuItem.forEach(element => {
   element.onclick = function(){
      seeText.textContent = this.textContent;
      return false;
   };   
});



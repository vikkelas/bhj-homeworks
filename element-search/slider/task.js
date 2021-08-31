let active = document.querySelector('.slider__item_active');
let slids = [...document.querySelectorAll('.slider__item')];
const btn = document.querySelectorAll('div.slider__arrow');

for(let i = 0)
btn.onclick = function(){
   let index = slids.indexOf(active);
   slids[index].classList.remove('slider__item_active');
};


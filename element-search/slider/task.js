const btnNext = document.querySelector('.slider__arrow_next');
const btnBack = document.querySelector('.slider__arrow_prev');
const slids = [...document.querySelectorAll('.slider__item')];
let i = 0;

btnNext.addEventListener('click', nextSlide);
btnBack.addEventListener('click', backSlide);

function changSlid(active,i){
   slids[active].classList.remove('slider__item_active');
   slids[i].classList.add('slider__item_active')
}

function nextSlide (){
   let active = slids.findIndex(item=>item.classList.contains('slider__item_active'));
   if(active >= 0 && active < slids.length-1){
      i++;
   } else if(active==slids.length-1){
      i=0;      
   }
   changSlid(active,i);
};

function backSlide (){
   let active = slids.findIndex(item=>item.classList.contains('slider__item_active'));
   if(active<=slids.length-1 && active != 0){
      i--;
   } else if(active == 0){
      i=slids.length-1;
   }
   changSlid(active,i);
}


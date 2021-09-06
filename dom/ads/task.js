const activeClass = [...document.querySelectorAll('.rotator__case')];
let index = 0;

function changeClass(){
   activeClass[index].classList.remove('rotator__case_active');
   if(index >= 0 && index < activeClass.length-1){
      activeClass[index+1].classList.add('rotator__case_active');
      index++;
   } else if(index == activeClass.length-1){
      index = 0;
      activeClass[index].classList.add('rotator__case_active')
   }   
}

setInterval(changeClass, 1000);
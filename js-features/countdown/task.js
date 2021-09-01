// const time = document.getElementById("timer");
// function timer() {
//    Number(time.textContent);
//    if(time.textContent > 0){
//       --time.textContent;
//    } else {
//       clearInterval(timerId);
//       alert('Вы победили в конкурсе!')
//    }
// }
// let timerId = setInterval (timer, 1000);


const endTime = new Date('sep 1, 2021 11:34:00').getTime();
const timerHour = document.getElementById('hours');
const timerMinut = document.getElementById('minut');
const timerSec = document.getElementById('sec');


function timer(){
   let timeNow = new Date().getTime();
   let dif = endTime - timeNow;
   if (dif >= 0) {
      let hours = Math.floor((dif % (1000*60*60*24)) / (1000*60*60));
      let minuts = Math.floor((dif % (1000*60*60))/(1000*60));
      let seconds = Math.floor((dif%(1000*60))/1000);

      timerHour.textContent = ("0"+hours+" :").slice(-4);
      timerMinut.textContent = ("0"+minuts+" :").slice(-4);
      timerSec.textContent = ("0"+seconds).slice(-2);
   } else {
      alert('Вы победили в конкурсе!');
      clearInterval(timerId);
   }
}

let timerId = setInterval (timer, 1000);
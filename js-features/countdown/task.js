const time = document.getElementById("timer");
function timer() {
   Number(time.textContent);
   if(time.textContent > 0){
      --time.textContent;
   } else {
      clearInterval(timerId);
      alert('Вы победили в конкурсе!')
   }
}
let timerId = setInterval (timer, 1000);
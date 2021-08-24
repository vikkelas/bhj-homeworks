const clicker = document.getElementById("cookie");
const number = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let time = Date.now();

clicker.onclick = function(){
   Number(++number.textContent);
  clicker.width == 200 ? clicker.width = 400 : clicker.width = 200;
  const curentTime = Date.now();
  const ftime = curentTime - time;
  speed.textContent = (1/(ftime/1000)).toFixed(2);
  time = curentTime;
}; 


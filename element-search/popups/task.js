const modal = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');
let closeBtn = modalClose.item(0);
let closeBtn2 = modalClose.item(2);
let change = modalClose.item(1);

modal.className += " modal_active";

function closeWindow () {
   modal.className = "modal";
   modalSuccess.className = "modal";
}


closeBtn.onclick = closeWindow;
closeBtn2.onclick = closeWindow;

change.onclick = () => {
   closeWindow();
   modalSuccess.className += " modal_active";
};

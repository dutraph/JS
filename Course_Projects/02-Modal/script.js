'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // we have 3 buttons

// Using function expression (anonymous function) we can set as parameter for the addEventLIstener
const openModal = function () {
  modal.classList.remove('hidden'); // for this classes we dont use '.' before, only in selectors
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
// 3 keyboad events (keydown / keyup / Keypress)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') {
    closeModal();
  }
});

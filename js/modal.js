var link = document.querySelector('.feedback');
var popup = document.querySelector('.modal');
var popupClose = document.querySelector('.modal-close');
var modalOverlay = document.querySelector('.overlay');

link.addEventListener('click', function(event) {
  event.preventDefault(event);
  popup.classList.add('modal-on');
  modalOverlay.classList.add('overlay-on');
});

popupClose.addEventListener('click', function(event) {
  event.preventDefault(event);
  popup.classList.remove('modal-on');
  modalOverlay.classList.remove('overlay-on');
});

modalOverlay.addEventListener('click', function(event) {
  event.preventDefault(event);
  popup.classList.remove('modal-on');
  modalOverlay.classList.remove('overlay-on');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-on")) {
       popup.classList.remove('modal-on');
       modalOverlay.classList.remove('overlay-on');
    }
  }
})
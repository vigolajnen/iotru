
var popup = document.querySelector('.popup');
var popupOverlay = document.querySelector('.popup-overlay');
var popupBtnClose = document.querySelector('.popup-close');
var wrapper = document.querySelector('.wrapper');

// var popupForm = popup.querySelector('form');
var inputName = popup.querySelector('[id=name]');
// var inputPhone = popup.querySelector('[id=phone]');
// var inputEmail = popup.querySelector('[id=email]');

wrapper.addEventListener('click', function (evt) {
  var target = evt.target;
  if (target.className != 'button button-order popup-btn') return;
  popupOverlay.classList.add('popup-show');
  document.querySelector('body').classList.add('overlay');
  inputName.focus();
});

popupBtnClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupOverlay.classList.remove('popup-show');
  document.querySelector('body').classList.remove('overlay');
});

$('.popup-order__input--file').change(function () {
  if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
  else $(this).prev().text('Прикрепить файл (jpg, pdf, excel, word, zip, rar)');
});



$(function () {
  $('.popup-btn').on('click', function () {
    document.querySelector('body').style.overflow = 'hidden';
  })
  $('.popup-btn').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();

    // $('.popup__wrapper').toggle('fadeOutDown');
    $.magnificPopup.close();
    document.querySelector('body').style.overflow = 'visible';
  });
});

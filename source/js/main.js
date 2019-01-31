"use strict";

$('.scroll-feedback').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.feedback').offset().top + "px"
  }, {
    duration: 1E3
  });
});

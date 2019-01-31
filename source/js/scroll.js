var oldScrollY = 0;
var div = document.getElementById("header-fixed");

$(window).ready(function () {
  div.classList.add('fixed');
  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var dY = scrolled - oldScrollY;

    if (dY > 0) {
      div.className = "fixed fixed-bottom";
      //document.querySelector('.page-header__top').style.display = 'none';
    } else {
      div.className = "fixed fixed-top";
      // document.querySelector('.page-header__top').style.display = 'block';
    }
    oldScrollY = scrolled;
  }
});

$('.js-organizers').on('click', function () {
  $('html,body').animate({
    scrollTop: $('#organizers').offset().top + "px"
  }, {
    duration: 1E3
  });
});

$('.js-advantages').on('click', function () {
  $('html,body').animate({
    scrollTop: $('#advantages').offset().top + "px"
  }, {
    duration: 1E3
  });
});

$('.js-conditions').on('click', function () {
  $('html,body').animate({
    scrollTop: $('#conditions').offset().top + "px"
  }, {
    duration: 1E3
  });
});

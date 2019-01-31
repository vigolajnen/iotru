(function () {


  var navMain = document.querySelector(".navigation");
  var navMainList = document.querySelector(".navigation__list");
  var navToggle = document.querySelector(".navigation__toggle");
  // var logo = document.querySelector(".js-logo");

  navMain.classList.remove("navigation--nojs");

  navToggle.addEventListener("click", function () {
    navMain.classList.toggle('mobile-menu--active');

    if (navMain.classList.contains("navigation--closed")) {
      navMain.classList.remove("navigation--closed");
      navMain.classList.add("navigation--opened");
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      navMain.classList.add("navigation--closed");
      navMain.classList.remove("navigation--opened");
      document.querySelector('body').style.overflow = 'visible';
    }
  });

  navMainList.addEventListener("click", function () {
    navMain.classList.add("navigation--closed");
    navMain.classList.remove("navigation--opened");
    document.querySelector('body').style.overflow = 'visible';
  })
})();

//Owl-Carousel
$(".site-main .project-area .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    544: {
      items: 2,
    },
  },
});

//Sticky Nav
let nav_offset_top = $(".header").height() + 50;

function navbarFixed() {
  if ($(".header").length) {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll >= nav_offset_top) {
        $(".header .main-menu").addClass("navbar_fixed");
      } else {
        $(".header .main-menu").removeClass("navbar_fixed");
      }
    });
  }
}

//Close Nav
$(function () {
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });
});


navbarFixed();

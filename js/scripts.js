$(".burger").on("click", function () {
  console.log(1);
  $(this).toggleClass("active");
  $(".header__top__nav__links").toggleClass("active");
});

$(function () {
  //start
  $(".burger").on("click", burgerClick);
  $(".desc a").on("click", viewProduct);
  $("aside a").on("click", tabClick);

  function burgerClick() {
    $(this).toggleClass("active");
    $("nav").toggleClass("active");

    if ($("nav").hasClass("active")) {
      $("nav").show(300);
    } else {
      $("nav").hide(300);
    }
  }

  function viewProduct() {
    $(".popup").addClass("active");
    $(".popup_bg").addClass("active");
    $(".popup").show(500);

    $(".popup .close").on("click", function () {
      $(".popup").removeClass("active");
      $(".popup").hide(500);
      $(".popup_bg").removeClass("active");
    });
  }

  function tabClick() {
    $("aside a").removeClass("active");
    $(this).addClass("active");
  }
  //end
});

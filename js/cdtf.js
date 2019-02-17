(function ($) {

    //loader
  $(window).on('load', function() {
    // Animate loader off screen
    $("#se-pre-con").fadeOut(800);
    $("img").removeClass("hide").addClass("loaded");
  });


  $(document).ready(function(){

    $(".lampe").on("click",function(){
      $(".lampe").toggleClass("lampeHide");
      // $("#penombre").fadeToggle(200, "linear");
      $("#penombre").toggleClass("lampeHide");
    });

  });
}(jQuery));

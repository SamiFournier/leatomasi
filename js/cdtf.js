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

    // MODAL
    $('.trigger1').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper1').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger5').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper5').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger7').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper7').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger12').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper12').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger15').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper15').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger18').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper18').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger19').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper19').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger21').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper21').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger24').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper24').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger26').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper26').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger36').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper36').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger40').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper40').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger47').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper47').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });
    $('.trigger49').on('click', function(e) {
      console.log(e.target);
      console.log(this);
      if (e.target === this) {
        $('.modal-wrapper49').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $("body").toggleClass('noScroll');
        return false;
      }
    });





  });
}(jQuery));

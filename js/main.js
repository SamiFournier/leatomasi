(function ($) {

    //loader
  $(window).on('load', function() {
    // Animate loader off screen
    $("#se-pre-con").fadeOut(800);
    $("img").removeClass("hide").addClass("loaded");

    var nbLigne = 0;
    var nbColonne = 0;

    if ($("#contact").width()<600) {
      nbColonne = 10
    } else if ($("#contact").width()<900) {
      nbColonne = 16
    } else {
      nbColonne = 20
    }

    nbLigne = Math.floor($("#contact").height()/($("#contact").width()/nbColonne*1))+1

    for (var i = 0; i < (nbColonne*nbLigne); i++) {
        $("#hideK").append('<img class="coverK" src="./images/homepage/kseul.png" alt="">');
    }



  });


  $(document).ready(function(){
    // HOME
    $(function () {
        // img fade out and in
        $("#home").on("click", "img.loaded", function(e){
          $(this).fadeOut(300).delay(1500).fadeIn(300);
          console.log(e);
        });
        // position logo
        $.fn.followTo = function (pos) {
            var $this = this,
                $window = $(window);

            $window.scroll(function (e) {
                if ($window.scrollTop() > pos) {
                    $this.css({
                        position: 'absolute',
                        top: pos
                    });
                } else {
                    $this.css({
                        position: 'fixed',
                        top: 0
                    });
                }
            });
        };

        $("#logo").followTo($("#home").height()/2);

        // position subversive
        // fade subversice
        // $(window).on("scroll", function() {
        // 	var scrollHeight = Math.floor($(window).height()*2);
        // 	var scrollPosition = Math.floor($(window).height() + $(window).scrollTop());
        // 	if (scrollPosition > scrollHeight*0.9) {
        // 	    // when scroll to bottom of the page
        //       var posTop = $("#bandeau").position().top + ($("#bandeau").height() * 0.33)
        //       var posleft = $("#bandeau").position().left + ($("#bandeau").width() * 0.86)
        //       $("#subpapier").css({top: posTop, left: posleft, position:'absolute'});
        //       $("#subpapier").fadeIn(2000);
        //   }
        // });

        $( "#cataLink" ).on( "click", function() {
          window.location.replace("http://kunste.eu");
          console.log("link clicked");
        });
    });

    //cameleon


    //eye
    document.querySelector('body').addEventListener('mousemove', (e) => {
      let eyes = document.querySelector('#CAMpupille');
      let mouseX = e.pageX - $('#CAMpupille').width() * 0.2109;
      let mouseY = e.pageY - document.querySelector('#home').offsetHeight - $('#CAMpupille').height() * 0.2392;
      // console.log("X: " + mouseX);
      // console.log("Y: " + mouseY);
      let rotationDegrees = Math.atan2(-mouseY, -mouseX) * 180 / Math.PI + 180;
      let eyeSpace = $('#CAMpupille').width() * 0.005;
      eyes.style.transform = `rotate(${rotationDegrees}deg) translateX(${eyeSpace}px) rotate(-${rotationDegrees}deg)`
      // console.log(e);
    });

    //mouth

    let langueWidth;



    document.querySelector('body').addEventListener('mousemove', (ev) => {
      let langue = document.querySelector('#langueBox');
      let mouseXL = ev.pageX - $('#CAMpupille').width() * 0.18;
      let mouseYL = ev.pageY - document.querySelector('#home').offsetHeight - $('#CAMpupille').height() * 0.23;
      // console.log("X: " + mouseXL);
      // console.log("Y: " + mouseYL + "     " + ev.pageY);
      let rotationDegreesL = Math.atan2(-mouseYL, -mouseXL) * 180 / Math.PI + 180;
      langue.style.transform = `rotate(${rotationDegreesL}deg)`;

        langueWidth = Math.sqrt((mouseXL * mouseXL) + (mouseYL * mouseYL))

    });



    $('#cameleon').click(function(){
      $("#CAMmachoire").addClass("eatMouth").delay(500).queue(function(next){
          $(this).removeClass("eatMouth");
          next();
      });

      let langueTop = $('#CAMpupille').height() * 0.21;
      let langueLeft = $('#CAMpupille').width() * 0.19;

      $("#langueBox").css({"top":langueTop, "left":langueLeft}).animate({
        width:langueWidth,
      }, 200, function(){}).animate({
        width:"0px",
      }, 200, function(){})
    })

    //langue collision

    $(document).on('click', '.mouche', function(){
      $(this).delay(200).queue(function(next){
          $(this).addClass("hideMouche");
          $("#CAMcoeur").slideDown(200, function() {}).delay(300).queue(function(next) {
            $("#CAMcoeur").hide();
            next();
          });
          next();
      })
    });

    //generation mouches





    setInterval(function () {
      if (document.hasFocus()) {
        let moucheIsLibellule;

        if (Math.floor(Math.random()*2) == 0) {
          moucheIsLibellule="mouche";
        } else {
          moucheIsLibellule = "libellule";
        }

        let moucheDepCote = Math.floor(Math.random()*2)+1;
        let moucheType = "mouche"+moucheDepCote;
        let moucheTypeBox = moucheType+"B";
        let moucheImage = moucheIsLibellule+moucheDepCote;
        let moucheHeight = Math.floor(Math.random()*80);

        let htmlInsert;

        htmlInsert = "<div style='top:"+moucheHeight+"vh;' class='"+moucheTypeBox+" moucheB'><img class='mouche "+moucheType+"' src='./images/homepage/"+moucheImage+".svg' alt='mouche'></div>";
          $("#CAM").append(htmlInsert);
        }

    }, Math.floor(Math.random() * 1000 * 5));


    // kMoove
    var playOneTime = false;
    $(document).on("mouseenter",".coverK", function(){
      // var direction = Math.floor(Math.random()*8);
      // var base = "kMoove"
      // var res = base.concat(direction);


      // audioElement.addEventListener('ended', function() {
      //   this.play();
      // }, false);

      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
          || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
          $(".coverK").addClass("kMoove");
      } else {
          $(this).addClass("kMoove");
      }


      if (document.querySelectorAll(".kMoove").length == document.querySelectorAll(".coverK").length && !playOneTime) {
          $('body').addClass("shake-hard").delay(500).queue(function(next){
               $(this).removeClass("shake-hard");
               next();
          });
          // $("#bravo").show().delay(3000).fadeOut(2000);
          playOneTime = true;
      }
    })

    // $('.coverK').bind('touchstart', function() {
    //   $(".coverK").addClass("kMoove");
    // });








    // Menu
    // hide .navbar first
    // $("nav").hide();
    //
    // $(function () {
    //     // Burger Menu
    //     $(".hamburger").click(function(){
    //         $('nav').fadeToggle();
    //     });
    //
    //     // fade in .navbar
    //     var lastScrollTop = 0;
    //     $(window).scroll(function(event){
    //        var st = $(this).scrollTop();
    //        if ($(window).width()>600) {
    //          if ((st > lastScrollTop) || (st==0)){
    //            $('nav').fadeOut()
    //          } else {
    //            $('nav').fadeIn();
    //          }
    //          lastScrollTop = st;
    //        }
    //     });
    // });
});
}(jQuery));

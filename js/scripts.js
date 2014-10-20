$(document).ready(function(){
  $('#loading').show();
  $('#miniBar').hide();
  $('#MainLogo, #facebook').hide();
  $('.layout').css("margin-top","1000px");
  $('.layout').hide();
  $('#facebookTab').css('background','rgba(255, 255, 255, .5)');


//after content loads
  $(window).load(function(){
    $('#loading').fadeOut( function(){
        $("#keebzIcon").hide();
        $('#MainLogo').css({"margin-left":"-200px","width":"200px"}).show();
        $('.glyphicon').css({"left":"-300px"});
        $('#miniBar').css({"width":"0em", "left":"-50px"});

        $('#miniBar').show( function(){
          $(this).animate({"width": "16em", "left":"0px"}, 500);
          $('.glyphicon').animate({"left":"0px"},500);
          $('#MainLogo').animate({'margin-left':"0px"},500);
          $('.barText').animate({"left":"100px"},500);
        });
    });

  $('#MainLogo').click(function() {
    $('#facebook').hide();
    $('#musicLayout, #mediaLayout, #liveLayout').fadeOut(function(){
      $(this).css("margin-top","1000px");
      $('#facebookTab').css('background','rgba(255, 255, 255, .5)');
    });
  });
//sidebar Function
    $("#miniBar")
      .mouseenter(function() {
        $('.layout').css("width","80%");
        $(this).animate({"width": "16em"}, 100, function(){
            $('#keebzIcon').hide();
            $('#MainLogo').show();
          });
        })
      .mouseleave(function() {
        $('.layout').css("width","89%");
        $(this).animate({"width": "5em"}, 100, function(){
        $('#MainLogo').hide();
        $('#keebzIcon').show();
          });
        });

  //music Icon Function
    $('.music').mouseenter(function() {
      $('#musicIcon').css({"color":"rgba(100,	100,	100, 1)","font-size":"60px"});
      $('#musicBar').css("font-size","40px").animate({"opacity": "1" }, 100);});
    $('.bar').mouseleave(function() {
      $('#musicIcon').css({"color":"black","font-size":"30px"});
      $("#musicBar").animate({"opacity": "0"}, 100).css("font-size","1px");});

    $('#musicIcon, #musicBar').click(function(){
      $('#liveLayout, #mediaLayout').animate({ "margin-top": "-1000px" }, 200, function(){
        $('#musicLayout').show().animate({ "margin-top": "0" });
        $('#liveLayout, #mediaLayout').hide();
        $('#liveLayout, #mediaLayout').css({"margin-top": "1000px"});
      });
    });

  //media Icon Function
    $('.media').mouseenter(function() {
      $('#mediaIcon').css({"color":"rgba(100, 100, 100, 1)","font-size":"60px"});
      $('#mediaBar').css("font-size","40px").animate({"opacity": "1" }, 100);});
    $('.bar').mouseleave(function() {
      $('#mediaIcon').css({"color":"black","font-size":"30px"});
      $("#mediaBar").animate({"opacity": "0"}, 100).css("font-size","1px");});

    $('#mediaIcon, #mediaBar').click(function(){
      $('#liveLayout, #musicLayout').animate({ "margin-top": "-1000px" }, 200, function(){
        $('#mediaLayout').show().animate({ "margin-top": "0" });
        $('#liveLayout, #musicLayout').hide();
        $('#liveLayout, #musicLayout').css({"margin-top": "1000px"});
      });
    });

  //live Icon Function
    $('.live').mouseenter(function() {
      $('#liveIcon').css({"color":"rgba(100, 100, 100, 1)","font-size":"60px"});
      $('#liveBar').css("font-size","40px").animate({"opacity": "1" }, 100);});
    $('.bar').mouseleave(function() {
      $('#liveIcon').css({"color":"black","font-size":"30px"});
      $("#liveBar").animate({"opacity": "0"}, 100).css("font-size","1px");});

    $('#liveIcon, #liveBar').click(function(){
      $('#mediaLayout, #musicLayout').animate({ "margin-top": "-1000px" }, 200, function(){
        $('#liveLayout').show().animate({ "margin-top": "0" });
        $('#mediaLayout, #musicLayout').hide();
        $('#mediaLayout, #musicLayout').css({"margin-top": "1000px"});
      });
    });

  //Social Tab Function
    $('#facebookTab').click(function(){
      $('#twitterTab').css('background','rgba(255, 255, 255, .5)');
      $(this).css('background','rgba(255, 255, 255, .8)');
      $('#twitter').hide();
      $('#facebook').show();
    });

    $('#twitterTab').click(function(){
      $('#facebookTab').css('background','rgba(255, 255, 255, .5)');
      $(this).css('background','rgba(255, 255, 255, .8)');
      $('#facebook').hide();
      $('#twitter').show();
    });
  });
});

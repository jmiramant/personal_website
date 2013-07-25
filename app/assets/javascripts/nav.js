$(document).ready(function() {
  $(".logo").mouseover(function() {
    $("#take").animate({
      opacity: 1
    }, 50);
    $("#an_a").css('color', '#acacac');
  });
  $(".logo").mouseleave(function() {
    $("#take").animate({
      opacity: 0
    }, 50);
    $("#stance").animate({
      opacity: 0
    }, 50);
    $("#an_a").css('color', '#FF3765');
    $('#sign_up').scrollTop('0');
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('header').addClass('small_header');
      $('hgroup').addClass('nameup');
      $('.navigation').addClass('navup');
    } else {
      $('header').removeClass('small_header');
      $('hgroup').removeClass('nameup');
      $('.navigation').removeClass('navup');
    }
  });
});
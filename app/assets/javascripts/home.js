jQuery(document).ready(function($) {
    $('.content_one').fadeIn(1500);

    $(window).stellar();
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    slide.waypoint(function(event, direction) {
      dataslide = $(this).attr('data-slide');
      if (direction === 'down') {
        $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
      } else {
        $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
      }
    });
    mywindow.scroll(function() {
      if (mywindow.scrollTop() == 0){
        $('.navigation li[data-slide="1"]').addClass('active');
        $('.navigation li[data-slide="2"]').removeClass('active');
      }
    });
    function goToByScroll(dataslide) {
      htmlbody.animate({
        scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
      }, 2000, 'easeInOutQuint');
    }
    links.click(function(e) {
      e.preventDefault();
      dataslide = $(this).attr('data-slide');
      goToByScroll(dataslide);
    });
    button.click(function(e) {
      e.preventDefault();
      dataslide = $(this).attr('data-slide');
      goToByScroll(dataslide);
    });
    $('.intro_message span').click(function(e) {
      e.preventDefault();
      dataslide = $(this).attr('data-slide');
      goToByScroll(dataslide);
    });

    $(window).scroll(function() {
      var pgLoc = $(this).scrollTop();
      if (pgLoc > 720) {
        $('.project_nav').fadeIn();
      } else if (pgLoc < 720) {
        $('.project_nav').fadeOut(10);
      }
    });

      // var lineDraw = $(window).scrollTop();
      // var canvas = document.getElementById('myCanvas');
      // var context = canvas.getContext('2d');
      // context.beginPath();
      // context.moveTo(100, 150);
      // context.lineTo(lineDraw, 150);
      // context.stroke();
    });
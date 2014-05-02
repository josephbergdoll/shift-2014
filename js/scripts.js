
$(document).ready(function(){

  $('.project-hero h1').waypoint(function(direction) {
    $('.top-nav').toggleClass('pre-fixed');
  });

  $('.buttons').waypoint(function(direction) {
    $('.top-nav').toggleClass('addtransitions');
  });

  $('#about').waypoint(function(direction) {
    $('.top-nav').toggleClass('fixed');
  }, { offset: 116 });

  $('.js-info-button').click(function(event){
    event.preventDefault();
    $(this).closest('.posters li').toggleClass('show');
  });

  $(window).scroll(function(){
      if ($(window).scrollTop() > 1600) {
          $('.js-to-top').addClass('show-to-top');
      }
      else {
        $('.js-to-top').removeClass('show-to-top');
      }
  });

  $('a.js-to-top').click(function(event){
    event.preventDefault();
    $(document.body).animate( {scrollTop : 0 }, 600);
  });

});

$(window).load(function() {

  $('.js-video-bg').delay(2500).queue(function(){
    $(this).addClass('show-video');
    $('#video-background')[0].play();
  });

});
$(document).ready(function(){

  $('.buttons').waypoint(function(direction) {
    $('.top-nav').toggleClass('fade');
  });

  $('#about').waypoint(function(direction) {
    $('.top-nav').toggleClass('fixed');
  }, { offset: 58 });

});
$(document).ready(function () {
  // Toggle mobile menu and header class
  $('#menu').click(function() {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  // Remove mobile menu and header class on scroll or load
  $(window).on('scroll load', function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    // Show or hide the element with class 'top' based on the scroll position
    if($(window).scrollTop() > 0){
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });

  // Smooth scrolling for anchor links
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
});

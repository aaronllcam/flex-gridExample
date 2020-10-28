/* custom */

  /* Preload */
window.onload = function(){
    $('#preload').fadeOut();
}
  /* End preload */
$(document).ready(function(){
    $('.slider-plug').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    });
});
$(function(){
    $.scrollUp();
  });



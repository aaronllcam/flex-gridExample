/* custom */

  /* Preload */
window.onload = function(){
    $('#preload').fadeOut();
}
  /* End preload */
  /* slider slick */
$(document).ready(function(){
    $('.slider-plug').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    });
});
/* end slider slick */
$(function(){
    $.scrollUp({
      scrollText:"",
      scrollSpeed: 1000,
      easingtype: "easeOutQuint"
    });
  });



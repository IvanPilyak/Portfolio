
  $(document).ready(function() {

    $('.carousel').slick({
      autoplay: true,
      dots: true,
      slidesToShow: 4,
      speed: 500,
      autoplaySpeed: 2000
    });
  });


  $('.progress-bar').each(function() {

    var valueNow = $(this).attr('aria-valuenow');
    $(this).animate({
      
      width: valueNow + '%',
    }, 2500);
  });



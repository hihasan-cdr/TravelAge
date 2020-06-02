$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    items:5,
    margin:12,
    center:true,
    autoplayHoverPause:true
});



  new WOW().init();

  $('.totop').click(function(){
    $('html,body').animate({'scrollTop':'0'},1000);
  });


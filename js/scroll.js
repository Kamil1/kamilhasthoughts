$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
    $('header img#kamil').addClass("minimize-left");
    $('header img#menu').addClass("minimize-right");
  }
  else{
    $('header').removeClass("sticky");
    $('header img#kamil').removeClass("minimize-left");
    $('header img#menu').removeClass("minimize-right");
  }
});
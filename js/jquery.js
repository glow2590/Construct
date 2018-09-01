//warpper
$(document).ready(function(){
  $(".menu-icon").on("click",function(){
    $("nav ul").toggleClass("showing")
  })
});

//scrollin animation
$(window).on("scroll",function(){
  if($(window).scrollTop()){
    $("nav").addClass('gray')
    $("nav").css({'position': 'fixed', 'top': '0px'});
  }
  else {
    $("nav").removeClass('gray');
    $("nav").css({'position': 'static', 'top': '0px'});
  }
})

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
  }
  else {
    $("nav").removeClass('gray');

  }
})

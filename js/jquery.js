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
    $(".scroll-top").show();
  }
  else {
    $("nav").removeClass('gray');
    $(".scroll-top").hide();
  }
})

$("#imgModal1").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open")
});

$(document).ready(function(){
  $('.carousel').slick({
    "autoplay": true,
    "arrows": true,
    "centerMode": true
  });
});

$("#square").click(function () {
  $("audio")[0].play();
});

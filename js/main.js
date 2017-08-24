$("#square").click(function () {
  $("audio")[0].play();
  $("audio")[0].addEventListener('ended', function() {
    $("#jam h3").toggleClass("visuallyhidden");
  }, false);
});

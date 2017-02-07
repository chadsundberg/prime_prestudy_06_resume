$(document).ready(function() {
  $('main').hide();
  $('button').click(function() {
      $('button').hide();
      $('main').fadeIn(3000);
    });
});

$(document).ready(function(){
  $('.input').focus(function(){
    $(this).parent('.form-field').addClass('focused');
  });
  $('.input').blur(function(){
    $(this).parent('.form-field').removeClass('focused');
  });
});
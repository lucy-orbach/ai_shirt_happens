$(document).ready(function($) {
  $('.full-container').height($(window).height());
  $('main').height($(window).height()); 
});

$(function () {
  $("#showMe").click(function (event) {
     // $("main").slideDown(1000);
      $('.gallery-container').removeClass('slide-out');
      $('main').removeClass('fcontainer');
      $('main').height('auto');
  });
});
 
$(function initialAnimation () {
  $('.banner.skewed').delay(1200).queue(function(next) {
    $(this).removeClass('skewed');
    $('.fade-out').toggleClass('fade-out fade-in');
    next();
  });
}); 


$(function(){
  $("#addCollection").click(function(){  
    debugger;
   $.ajax({
      url: $(this).attr('href'),
      method: $(this).attr('data-method'),
      dataType: 'script',
      context: this
    }).done(function(){
        debugger;
        $('#recommendations').removeClass('fade-out');
        $('main').removeClass('fcontainer');
      });done
    return false;
  });
});//function



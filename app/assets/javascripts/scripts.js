$(document).ready(function($) {
  
  $('.full-container').height($(window).height());
  $('main').height($(window).height()); 
});


var ready;
ready = function() {
   $('main').hide(0).fadeIn(1200);
};

$(document).ready(ready);
$(document).on('page:load', ready);
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


$(function () {
  $("#addCollection").click( function (event) {
    event.preventDefault();
    event.stopPropagation();

    var action = $(this).attr('href');
    var method = $(this).attr('data-method');
    $.ajax({
      method: method,
      url: action,
      dataType: 'script',
      context: this
    }).done( function() {
      debugger;
        console.log('done');
    });
    
    
    
    });
});




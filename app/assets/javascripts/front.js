$(document).ready(function($) {
  $('.full-container').height($(window).height());
  $('main').height($(window).height());
  $('.banner.skewed').delay(1200).queue(function(next) {
  	$(this).removeClass('skewed');
  	next();
	});
  
});

$(function () {
    $("#showMe").click(function (event) {
       // $("main").slideDown(1000);
        $('.gallery-container').removeClass('slide-out');
    });
});
 
   
// $(function () {
//   $("#showMe").click(function() {
//     //$('main').slideDown();
//     $('main').removeClass('hidden');
//   });

// });
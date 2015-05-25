$(document).ready(function($) {  
  var myHeight = $(window).height();
  $('.full-container').height($(window).height());
  $('.intro').height(myHeight);
  $('main').height(myHeight);
  $('.intro').click( function() {
    $('.intro').fadeOut("slow", function() {
        $('.all-content').fadeIn(); 
        })//hide
})//click
});
//========================
//smooth transition
//========================
var ready;
ready = function() {
   $('main').hide(0).fadeIn(1200);
};

$(document).ready(ready);
$(document).on('page:load', ready);

//==================================
//ajax call to Ownership Controller
//==================================
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
    });//ajax
    
    });//click
});//function

//==================================
//parallax
//==================================
$(document).ready(function () {
    $('.element').each(function(i) {
      var myElement =$(this);
      switch (i)
      { case 0 :  myElement.data('params', {
            top0 : -1000, x0 : -2600, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 1 : myElement.data('params', {
            top0 : -500, x0 : -1000, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 2 : myElement.data('params', {
            top0 : 0, x0 : -750, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;  
        case 3 : myElement.data('params', {
            top0 : -1500, x0 : 0, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 4 : myElement.data('params', {
            top0 : 0, x0 : -2600, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 5 : myElement.data('params', {
            top0 : 0, x0 : -1000, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 6 : myElement.data('params', {
            top0 : 0, x0 : -750, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 7 : myElement.data('params', {
            top0 : 0, x0 : -750, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 8 : myElement.data('params', {
            top0 : -1000, x0 : -6000, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 9 : myElement.data('params', {
            top0 : 0, x0 : -5250, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 10 : myElement.data('params', {
            top0 : 0, x0 : -4500, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 11 : myElement.data('params', {
            top0 : 0, x0 : -3750, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 12 : myElement.data('params', {
            top0 : 0, x0 : -7000, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 13 : myElement.data('params', {
            top0 : 0, x0 : -6250, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 14 : myElement.data('params', {
            top0 : 0, x0 : -5500, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 15 : myElement.data('params', {
            top0 : 0, x0 : -4750, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 16 : myElement.data('params', {
            top0 : 0, x0 : -6000, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 17 : myElement.data('params', {
            top0 : 0, x0 : -5250, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 18 : myElement.data('params', {
            top0 : 0, x0 : -4500, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 19 : myElement.data('params', {
            top0 : 0, x0 : -3750, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 20 : myElement.data('params', {
            top0 : 0, x0 : -7000, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 21 : myElement.data('params', {
            top0 : 0, x0 : -6250, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 22 : myElement.data('params', {
            top0 : 0, x0 : -5500, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 23 : myElement.data('params', {
            top0 : 0, x0 : -4750, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 24 : myElement.data('params', {
            top0 : 0, x0 : -6000, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 25 : myElement.data('params', {
            top0 : 0, x0 : -5250, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 26 : myElement.data('params', {
            top0 : 0, x0 : -4500, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 27 : myElement.data('params', {
            top0 : 0, x0 : -3750, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 28 : myElement.data('params', {
            top0 : 0, x0 : -7000, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 29 : myElement.data('params', {
            top0 : 0, x0 : -6250, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break; 
        case 30 : myElement.data('params', {
            top0 : 0, x0 : -5500, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 31 : myElement.data('params', {
            top0 : 0, x0 : -4750, 
            top1: $(this).css('top'), x1: $(this).css('left')});
        break;
        case 32 : myElement.data('params', {
            top0 : 0, x0 : -7000, 
            top1: $(this).css('top'), x1: $(this).css('left')}); 
        break;

      }//case
    });//each function

    function init() {
        myHeight = $(window).height();
        //$('main').css('height', myHeight - 300);
        $('.gallery-list').css('min-height', Math.max(myHeight , 750));
    }


    $(window).scroll(function () {
        var s_max = myHeight;

        function move(p0, p1, s) {
            return Math.min((-p0 + p1) / s_max * s + p0, p1);
        }
        var scrollTop = parseInt($(window).scrollTop());

        $('.element').each(function (i) {

            var myX = move($(this).data('params').x0, parseInt($(this).data('params').x1), scrollTop),
                myY = move($(this).data('params').top0, parseInt($(this).data('params').top1), scrollTop);
            if (i === 3) {
                $(this).stop().css({
                    right: myX + 'px',
                    top: myY + 'px'
                })
            } else {
                $(this).stop().css({
                    left: myX + 'px',
                    top: myY + 'px'
                })
            }
        })
    })

    init();

    $(window).resize(function () {
        init();
    });
})
//==================================
//intro
//==================================




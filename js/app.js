$(document).ready(function() {
	
	
	
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-throwing').show();
    $('.ryu-ready').hide();
   
    $('.hadouken').finish().show()
      .animate(
        {'left': '300px'},
        500,
        function() {
          $(this).stop();
          $(this).hide();
          $(this).css('left', '-212px');
        }
      );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  })
   
 $('body').keydown(function(){			
		if (event.keyCode == 88){
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').show();
		}
	})
$('body').keyup(function () {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	
	})	
	

  $('body').keydown(function(){			
		if (event.keyCode == 32){
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-kick').show();
		}
	})
$('body').keyup(function () {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-kick').hide();
	
	})	













	$('.instructions').mouseenter(function() {
    $('.instructions').hide();
    $('.score').show();
    
  })
  
  
   
	

});
  
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
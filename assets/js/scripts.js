$(document).ready(function(){
	
$('.caption__joined .join').click(function(e){
	e.preventDefault();
	$(this).toggleClass('joined');
	setTimeout(function(){ $('.caption__joined .join').find($('.tooltip')).addClass('hid'); }, 900);
//     $(this).dealy(1000).find($('.tooltip')).delay(2000).addClass('hid');
// 	$('.caption__joined .join .tooltip').removeClass('hid');
});

$('.join_wrapper .join').click(function(e){
	e.preventDefault();
	$(this).toggleClass('joined');
	setTimeout(function(){ $('.join_wrapper .join').find($('.tooltip')).addClass('hid'); }, 900);
//     $(this).dealy(1000).find($('.tooltip')).delay(2000).addClass('hid');
// 	$('.caption__joined .join .tooltip').removeClass('hid');
});

var count = 0;
var like = $('.like svg');
	like.click(function(){
		count++;
		$('.like span').text(count);
		$(this).css('fill', '#28ccd2');
	});

});


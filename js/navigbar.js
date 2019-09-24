$(function(){
	/*移入  显示*/
	$(function(){
		$('.top_bar_more').mouseenter(function(event) {
			$(this).children('.top_bar_more_xl').css('display','block');
		});
		$('.top_bar_more').mouseleave(function(event) {
			$(this).children('.top_bar_more_xl').css('display','none');
		});

		$('#bar-text-lis').mouseenter(function(event) {
			$('.bar-box').children('ul').css('display','block');
		});
		$('#bar-text-lis').mouseleave(function(event) {
			$('.bar-box').children('ul').css('display','none');
		});

		$('#bar-text-lifb').mouseenter(function(event) {
			$('.bar-boxfb').children('ul').css('display','block');
		});
		$('#bar-text-lifb').mouseleave(function(event) {
			$('.bar-boxfb').children('ul').css('display','none');
		});
	})
});
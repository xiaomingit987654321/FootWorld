$(function(){

	$('.loginbox_h_left').click(function(event) {
		console.log('1');
		$(this).css('background','rgba(0,0,0,0.6)');
		$(this).next().css('background','');
	});

	$('.loginbox_h_right').click(function(event) {
		console.log('2');
		$(this).css('background','rgba(0,0,0,0.6)');
		$(this).prev().css('background','');
	});

	var currentIndex = 0;
	setInterval(function(){
		var bgImg=['lm1.jpg','lm2.jpg','lm3.jpg','lm4.jpg'];
		if(currentIndex >= bgImg.length){
			currentIndex = 0;
		}else{
			var obj = $('body');
			obj.fadeIn(2000, function() {
				 obj.css('background-Image','url(../img/'+bgImg[currentIndex]+')');
			});
			currentIndex+=1;
		}
	},3000);


});
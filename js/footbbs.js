$(function(){

	$(window).scroll(function(event){
		if($(this).scrollTop()>100){
			$('.gotop').fadeIn();
		}else{
			$('.gotop').fadeOut();
		}
	});

	$('.gotop').click(function(event){
		$('html,body').animate({
			'scrollTop':'0px'
		},200)
	});

	$(function(){
		var num=0;
		var timer;
		function go(){
			timer=setInterval(function(){
				num++;
				if(num>3){
					num=0;
					$('.slider ul').css('margin-left',-640*num+'px');
					num=1;
				}
				$('.slider ul').animate({
					'margin-left':-640*num+'px'
				},500)
			},3000)
		}
		go();

		$('.slider').mouseenter(function(event){
			clearInterval(timer);
		})
		$('.slider').mouseleave(function(event){
			go();
		});

		$('#up').click(function(){
			num--;
			if(num<0){
				num=3;
				$('.slider ul').css('margin-left',-640*num+'px');
				num=2;
			}
			$('.slider ul').animate({
				'margin-left':-640*num+'px'
			},500)
		});

		$('#dowm').click(function(){
			num++;
			if(num>3){
				num=0;
				$('.slider ul').css('margin-left',-640*num+'px');
				num=1;
			}
			$('.slider ul').animate({
				'margin-left':-640*num+'px'
			},500)
		});
	})


	$('.ui-loading a').click(function(){
		var flag = $(this).attr("flag");
		switch(flag){
			case "1" : $('.pin_list ul').eq(1).addClass('of');flag="2";
				break;
			case "2" : $('.pin_list ul').eq(2).addClass('of');
				break;
		}
		$(this).attr("flag",flag);//给标记属性重新赋值
	})

})
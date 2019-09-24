$(function(){

	$(function(){
		$('.navlist').mouseenter(function(event) {
			$('#navlist_sub').slideDown(300);
		});
		$('.navlist').mouseleave(function(event) {
			$('#navlist_sub').slideUp(100);
		});
	})

	$(function(){
		var num=0;
		var timer;
		function go(){
			timer=setInterval(function(){
				num++;
				if(num>6){
					num=0;
					$('.slider ul').css('margin-left',-345*num+'px');
					num=1;
				}
				$('.slider ul').animate({
					'margin-left':-345*num+'px'
				},500)
			},2000)
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
				num=6;
				$('.slider ul').css('margin-left',-345*num+'px');
				num=5;
			}
			$('.slider ul').animate({
				'margin-left':-345*num+'px'
			},500)
		});

		$('#dowm').click(function(){
			num++;
			if(num>6){
				num=0;
				$('.slider ul').css('margin-left',-345*num+'px');
				num=1;
			}
			$('.slider ul').animate({
				'margin-left':-345*num+'px'
			},500)
		});
	})

	var a=$('#recipeindex_info').offset().top-$(window).height();
	// console.log(a);
	$(window).scroll(function(event){
		// console.log($(this).scrollTop());
		if($(this).scrollTop()>480){
			$('#recipeindex_info').css('position','fixed');
		}else{
			$('#recipeindex_info').css('position','static');
		}
	})

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

	$('.ui_title h3').click(function(){
		$(this).addClass('pick');
		$(this).siblings().removeClass('pick');

		$('.big4_list').eq($(this).index()).addClass('big4_liston');
		$('.big4_list').eq($(this).index()).siblings().removeClass('big4_liston');
	})

	$('.ui-loading a').click(function(){
		var flag = $(this).attr("flag");
		switch(flag){
			case "1" : $('.big4_liston ul').eq(1).addClass('picked');flag="2";
				break;
			case "2" : $('.big4_liston ul').eq(2).addClass('picked');
				break;
		}
		$(this).attr("flag",flag);//给标记属性重新赋值
	})

})
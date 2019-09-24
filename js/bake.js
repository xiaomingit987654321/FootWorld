$(function(){

	$(function(){
		var num=0;
		var timer;
		function go(){
			timer=setInterval(function(){
				num++;
				if(num>4){
					num=0;
					$('.wleft ul').css('margin-left',-500*num+'px');
					num=0;
					$('.wleft ol li').eq(num).addClass('dot');
					$('.wleft ol li').eq(num).siblings().removeClass('dot');
				}
				$('.wleft ul').animate({
					'margin-left':-500*num+'px'
				},500)
				$('.wleft ol li').eq(num).addClass('dot');
				$('.wleft ol li').eq(num).siblings().removeClass('dot');
			},1000)
		}

		go();

		$('.wleft').mouseenter(function(event){
			clearInterval(timer);
		})
		$('.wleft').mouseleave(function(event){
			go();
		});

		$('.wleft ol li').click(function(){
			num=$(this).index();
		    $(this).addClass('dot');
		    $('.wleft ul').animate({
		        'margin-left':-500*num+'px'
		    }, 500)                 
		    $('.wleft ol li').eq(num).siblings().removeClass('dot');
		});
	})

	$(window).scroll(function(event){
		// console.log($(this).scrollTop());
		if($(this).scrollTop()>780){
			$('.wt_list').css('position','fixed');
		}else{
			$('.wt_list').css('position','static');
		}
	});

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
	

})
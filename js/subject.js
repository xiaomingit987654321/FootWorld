$(function(){

	//tab栏效果
    $('.nav_wrap2_ulss li ').click(function(event) {
    	$(this).children('a').addClass('on');
    	$(this).siblings('li').children('a').removeClass('on');

    	var a = $(this).index();
    	$('.wrap>div').eq(a).addClass('wrap_dis');
    	$('.wrap>div').eq(a).siblings('div').removeClass('wrap_dis');
    });
    //回到顶部
    $(window).scroll(function(event) {
    	if($(window).scrollTop()>200){
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
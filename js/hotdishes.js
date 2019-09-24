$(function(){
	$(function(){
		$('.navlist').mouseenter(function(event) {
			$('#navlist_sub').slideDown(300);
		});
		$('.navlist').mouseleave(function(event) {
			$('#navlist_sub').slideUp(100);
		});
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

	

	//切换最新
	$('.ui_title_left a').click(function(){
		$(this).addClass('ab');
		$(this).siblings().removeClass('ab');

		$('.left_list ul').eq($(this).index()-1).addClass('picked');
		$('.left_list ul').eq($(this).index()-1).siblings().removeClass('picked');
	})

	//显示收藏
	// var i=$('.subs span').length;
	// console.log(i);
	// var i=$('.left_list ul li');
	// var j=$('.left_list ul li').eq(1).children('span');
	// console.log(j);


	// $('.left_list ul li').mouseenter(function(event){
	// 	console.log(1);
	// 	var a=$('.left_list ul li').index();
	// 	console.log(a);
	// 	// $('.subs span').addClass('nums');
	// })
	// $('.left_list ul li').mouseleave(function(event){
	// 	console.log(2);
	// 	// $('.subs span').removeClass('nums');
	// })
	

	// for(var i=0;i<$('.left_list ul').length;i++){
	// 	for(var j=0;j<2)
	// }

})
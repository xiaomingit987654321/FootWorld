$(function () {
    showScroll();
    function showScroll() {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            scrollValue > 100 ? $('.fixed-footer-go').fadeIn() : $('.fixed-footer-go').fadeOut();
        });
        $('.fixed-footer-go').click(function(event) {
			$('html,body').animate({
				'scrollTop':'0px'
			},200)
		});
    }
})


$(function(){
	$('#ui_title_wrapp>h2').click(function(event) {
			console.log(1);
			//toggleClass() 对设置或移除被选元素的一个或多个类进行切换。
			$(this).toggleClass('on');
			//siblings() 方法返回被选元素的所有同级元素。
			$(this).siblings('h2').removeClass('on');
			console.log($(this).index());

			var a=$(this).index();

			$('.sec>div').eq(a).addClass('dis');
			$('.sec>div').eq(a).siblings('div').removeClass('dis');
	});
})






	  
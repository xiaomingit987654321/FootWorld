$(function(){

	$('.Jphoto11>img').mouseenter(function(event) {
		$('.recipe_imgBox11 p').css('display','block');
	});
	$('.Jphoto11>img').mouseleave(function(event) {
		$('.recipe_imgBox11 p').css('display','none');
	});

});


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

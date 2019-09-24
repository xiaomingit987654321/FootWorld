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

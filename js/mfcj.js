$(function () {
    showScroll();
    $('#navlist').mouseenter(function(event) {
        $('#navlist_sub').slideDown(300);
    });
    $('#navlist').mouseleave(function(event) {
        $('#navlist_sub').slideUp(100);
    });

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

    /*轮播图*/
    var num = 0;
    var timer = 0;
    function go(){
        timer = setInterval(function(){
           num++;
          if(num>6){
              num=0;
              //回到第一张
              $('.ulsmfcjlan').css('margin-left', -280*num+'px');
              num =0;
              $('.controls>li').eq(num).addClass('current');
              $('.controls>li').eq(num).siblings().removeClass('current');
          }


           $('.ulsmfcjlan').animate({
             'margin-left':-280*num+'px'
           }, 500)

           $('.controls>li').eq(num).addClass('current');
           $('.controls>li').eq(num).siblings().removeClass('current');

        },1000);
    };
    go();

    //向左
    $('.nextBtn').click(function(event) {
        console.log(1);
        num++;
        if(num>6){
            num = 0;
            //回到第一张
            $('.ulsmfcjlan').css('margin-left', -280*num+'px');
            num =0;

            $('.controls>li').eq(num).addClass('current');
            $('.controls>li').eq(num).siblings().removeClass('current');
        }


        $('.ulsmfcjlan').animate({
         'margin-left':-280*num+'px'
       }, 500)

       $('.controls>li').eq(num).addClass('current');
       $('.controls>li').eq(num).siblings().removeClass('current');
    });

    //向右
    $('.prevBtn').click(function(event) {
        console.log(1);
        num--;
        if(num<0){
            num = 6;
            //回到第一张
            $('.ulsmfcjlan').css('margin-left', -280*num+'px');
            num =6;

            $('.controls>li').eq(num).addClass('current');
            $('.controls>li').eq(num).siblings().removeClass('current');
        }
        $('.ulsmfcjlan').animate({
         'margin-left':-280*num+'px'
       }, 500)

       $('.controls>li').eq(num).addClass('current');
       $('.controls>li').eq(num).siblings().removeClass('current');
    });

    //点击原点
    $('.controls>li').click(function(event) {
        num=$(this).index();
        $(this).addClass('current');
        $('.ulsmfcjlan').animate({
            'margin-left':-280*num+'px'
        }, 500)                 
        $('.controls>li').eq(num).siblings().removeClass('current');
    });

    //鼠标移入停止图片的轮播
    $('.pic').mouseenter(function(event) {
        clearInterval(timer);
    });
    //鼠标移出
    $('.pic').mouseleave(function(event) {
        go();
    });







})
$(function(){
	var num =0 ;
	var timer;
	function go(){
	    timer = setInterval(function(){
	        num++;
	        if(num>6){
	            num=0;
	            // 回到第一张
	            $('#uls').css('margin-left',-990*num+'px'); 
	            //直播到第二张
	            mum=1;
	            $('#ols>li').eq(num).addClass('selected'); 
	            $('#ols>li').eq(num).siblings().removeClass('selected');
	          
	        }
	        $('#uls').animate({
	            'margin-left':-990*num+'px'
	        }, 500)


	        $('#ols>li').eq(num).addClass('selected');
	        $('#ols>li').eq(num).siblings().removeClass('selected');
	    },3000);
	}
	go();

	//鼠标移入停止图片的轮播
	$('.w1').mouseenter(function(event) {
		clearInterval(timer);
	});
	//鼠标移出
	$('.w1').mouseleave(function(event) {
		go();
	});


	//向右点击播放
	$('#right').click(function(event) {
	    num++;
	    if(num>6){
	        num=0;
	        //回到第一张
	        $('#uls').css('margin-left',-990*num+'px');
	        //直接播到第二张
	        num=1;
	        
	        $('#ols>li').eq(num).addClass('selected');
	        $('#ols>li').eq(num).siblings().removeClass('selected');
	    }
	     $('#uls').animate({
	        'margin-left':-990*num+'px'
	    }, 500)

	     $('#ols>li').eq(num).addClass('selected');
	     $('#ols>li').eq(num).siblings().removeClass('selected');
	});

	//向左点击播放
	$('#left').click(function(event) {
	    num--;
	    if(num<0){
	        num=6;
	        //回到第最后一张张
	        $('#uls').css('margin-left',-990*num+'px');
	        num=5;

	        $('#ols>li').eq(num).addClass('selected');
	        $('#ols>li').eq(num).siblings().removeClass('selected');
	    }
	    $('#uls').animate({
	        'margin-left':-990*num+'px'
	    }, 500)

	    $('#ols>li').eq(num).addClass('selected');
	    $('#ols>li').eq(num).siblings().removeClass('selected');

	});

	//点击原点
	$('#ols>li').click(function(event) {
	    num=$(this).index();
	    $(this).addClass('selected');
	    $('#uls').animate({
	        'margin-left':-990*num+'px'
	    }, 500)                 
	    $('#ols>li').eq(num).siblings().removeClass('selected');
	});


	var sum = 0;
	//向右点击播放
    $('.wzbox_right').click(function(event) {
        sum++;
        if(sum>3){
            sum=0;
            //回到第一张
            $('.wzbox_ul').css('margin-left',-990*num+'px');
            //直接播到第二张
        }
         $('.wzbox_ul').animate({
            'margin-left':-990*sum+'px'
        }, 500)
   
    });
    //向左点击播放
    $('.wzbox_left').click(function(event) {
        sum--;
        if(sum<0){
            sum=4;
            //回到第最后一张张
            $('.wzbox_ul').css('margin-left',-990*sum+'px');
            sum=3;
        }
        $('.wzbox_ul').animate({
            'margin-left':-990*sum+'px'
        }, 500)
    });

    //淡入淡出图片轮播
    /*var ouls = $('.uls').children('li');
    console.log(ouls);
    var num = 0;
    var timer;*/
   /* function run(num){
    	for(var i=0;i< ($('.uls').children('li')); i++ ){
    		$('.uls').children('li')[i].removeClass('ulslis');
    	}
    	$('.uls').children('li')[i].addClass('ulslis');
    }*/
    /*function go() {
    	timer = setInterval(function(){
    		num++;
    		if(num>5){
    			num=0;
    		}
    		console.log(ouls.length);
    		for(var i=0 ; i< ouls.length; i++){
    			ouls.addClass('ulslis');
    		}
    		// ouls.addClass('ulslis');
    		console.log(num);

    	},3000);
    }
    go();*/












    //鼠标移入显示向左，向右
    $('.wzbox').mouseover(function(event) {
    	$('.wzbox>span').css('display','block');
    });
    $('.wzbox').mouseleave(function(event) {
    	$('.wzbox>span').css('display','none');
    });

    //tab栏文字 样式
    $('.tab_uls>li').click(function(event) {
    	$(this).addClass('tab_news');
    	$(this).siblings('li').removeClass('tab_news');

    	var a = $(this).index();
    	$('.tab_footer>div').eq(a).addClass('tab_dis');
    	$('.tab_footer>div').eq(a).siblings('div').removeClass('tab_dis');
    });

    $('.tab_uls2>li').click(function(event) {
    	$(this).addClass('tab_news2');
    	$(this).siblings('li').removeClass('tab_news2');

    	var a = $(this).index();
    	$('.tab_footer2>div').eq(a).addClass('tab_dis2');
    	$('.tab_footer2>div').eq(a).siblings('div').removeClass('tab_dis2');
    });

    //tab栏 图片 效果
    $('.tab_uls5>li').click(function(event) {
    	$(this).addClass('tab_news5');
    	$(this).siblings('li').removeClass('tab_news5');

    	var a = $(this).index();
    	$('.tab_footer5>div').eq(a).addClass('tab_dis5');
    	$('.tab_footer5>div').eq(a).siblings('div').removeClass('tab_dis5');
    });
    //tab栏 热门话题 效果
    $('.tab_uls6>li').click(function(event) {
    	console.log(2);
    	$(this).addClass('tab_news6');
    	$(this).siblings('li').removeClass('tab_news6');

    	var a = $(this).index();
    	$('.tab_footer6>div').eq(a).addClass('tab_dis6');
    	$('.tab_footer6>div').eq(a).siblings('div').removeClass('tab_dis6');
    });

    //回到顶部(小萝卜)
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

});
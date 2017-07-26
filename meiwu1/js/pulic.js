	$(function() {
	$(window).bind('scroll', function() {
	   var w_scrollTop = $(window).scrollTop();
	   if(w_scrollTop > 150) {
		$(".untitled").fadeIn(300);
	   } else if(w_scrollTop < 200) {
		$(".untitled").fadeOut(300);
	   }
	});
	//点击小火箭效果
	$(".untitled").click(function() {
		$("html,body").animate({
			scrollTop: 0
		});
		return false;
	});
	//托盘效果
	$(".stock li").on("click", function() {
		var index = $(".stock li").index($(this));
		$(".stock_is").hide();
		$(".stock_is").eq(index).show();
	})
	//判断空p标签
	for(var i = 0; i < $('p').length; i ++) {
	if($('p').eq(i).html() == "" || $('p').eq(i).html() == null) {
		$('p').eq(i).hide();
	}
	}
	//判断空h4标签
	for(var i = 0; i < $('h5').length; i ++) {
	if($('h5').eq(i).html() == "" || $('h5').eq(i).html() == null) {
		$('h5').eq(i).hide();
	}
	}
 //判断空的img标签
	for(var i = 0; i < $('img').length; i ++) {
	if($('img').eq(i).attr("src") == "") {
		$('img').eq(i).hide();
	}
	}
	//点击下拉单
	$(".header_i2").stop().on("click", function() {
		$(".header_xl").show(600);
		$(".header_l1").show(600);
	});
	$(".header_l1").stop().on("click", function() {
		$(".header_xl").hide(600);
		$(".header_l1").hide(600);
	})
	$(".header_xl").stop().on("click", function() {
		$(".header_xl").hide(600);
		$(".header_l1").hide(600);
	})
	})
//热线咨询
function func1() {
	layer.open({
		type: 2,
		title: '在线咨询',
		closeBtn: 1,
		shade: 0.8,
		area: ['80%', '90%'],
		content: 'http://www.mhsjgc.com/lyxt/excl_message2/xqtkjcq-index.asp'
	});
}

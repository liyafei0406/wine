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
	if($('p').eq(i).html() == "") {
		$('p').eq(i).hide();
	}
	}
	 //判断空的img标签
	for(var i = 0; i < $('img').length; i ++) {
	if($('img').eq(i).attr("src") == "") {
		$('img').eq(i).hide();
	}
	}
	//栏目动画效果
	$(".header_i2").on("click", function() {
		$(".header_xl").slideToggle();
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
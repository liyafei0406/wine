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
//热线留言
function func1() {
	layer.open({
		type: 2,
		title: '在线留言',
		closeBtn: 1,
		shade: 0.8,
		area: ['94%', '70%'],
		content: 'http://www.mhsjgc.com/dsly/excl_message2/index.asp'
	});
}
//点击在线咨询
function func2() {
	layer.open({
		type: 2,
		title: '在线咨询',
		closeBtn: 1,
        shade: 0.8,
		area: ['94%', '75%'],
		content:'http://www7.53kf.com/m.php?cid=70792892&style=2&keyword=http%3A%2F%2Fwww.cgcy001.com%2Fplus%2Flist.php%3Ftid%3D17&referer=http%3A%2F%2Fwww.cgcy001.com%2Fwap%2Findex.html&guest_id=10107770143017&tpl=crystal_blue&uid=9d8d1dc40685c0270084e937594dbc32&u_stat_id=&talktitle=%E7%BE%8E%E5%B1%8B%E5%AE%9A%E5%88%B6%E4%B8%AA%E6%80%A7%E5%8C%96%E5%85%BB%E7%94%9F%E6%99%BA%E8%83%BD%E5%AE%B6%E8%A3%85%E4%B8%80%E7%AB%99%E5%BC%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88&tfrom=50&zdkf_type=1&kf=pengchaowz%40163.com%2C2915065108%40qq.com%2C3258853642%40qq.com%2Czknet'
	});
}

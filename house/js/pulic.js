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
		area: ['80%', '90%'],
		content: 'http://www.mhsjgc.com/lyxt/excl_message2/xqtkjcq-index.asp'
	});
}
//点击在线咨询
function func2() {
	layer.open({
		type: 2,
		title: '在线咨询',
		closeBtn: 1,
        shade: 0.8,
		area: ['94%', '77.5%'],
		content: 'http://proxy.shangjitong.3jia5.com/style6/chat.html?sk=-2192711994465143292&g=11285&fm=1041272929&tm=38493&un=%E5%AE%A2%E6%9C%8D%E5%90%B4%E9%9D%99&st=online&ip=124.193.87.34&local=%E5%8C%97%E4%BA%AC&ref=&url=http%3A%2F%2Fm.3158.cn%2Fnews%2Fshow_3548896.html%23m-msgv1-call&ks=0&so=0&nl=0##0&si=7&skin=blue&action=talk&customer={"itemid":"384663","userid":"420072","typeid":"133","domain":"m.3158.cn","return_url":"http%3A%2F%2Fm.3158.cn%2Fnews%2Fshow_3548896.html%23m-msgv1-call"}'
	});
}
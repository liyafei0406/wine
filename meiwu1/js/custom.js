$(function() {
	var index = 0;
	var imgs = $(".middle img");
	var pWidth = imgs.eq(0).width();
	$(".middle").width(pWidth * imgs.length);

	function move() {
		$(".middle").stop().animate({
			left: -index * pWidth
		});
		$(".wrap_d li").removeClass("active");
		$(".wrap_d li").eq(indexs).addClass("active");
	};
	$(".wrap_d li").on("click", function() {
		index = $(".wrap_d li").index($(this));
		move();
	});
	var timer = null;
	var indexs = 0;
	timer = setInterval(function() {
		index++;
		indexs++;
		if(index > imgs.length - 1) {
			index = 1;
			$(".middle").css("left", 0);
		};
		if(indexs > imgs.length - 2) {
			indexs = 0;
		}
		move();
	}, 3000);
})

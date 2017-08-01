//创建魔画科技里的内容标签
		$(function() {
		function Projects(pro) {
			var div = $("<div></div>");//内容最外面的div标签
			div.addClass("particulars_li project_xli");//给div添加clss类名
			var h0 = $("<h4>"+pro.h0+"</h4>");//内容的大标题
		    var p1 = $("<p>"+pro.p1+"</p>");//内容介绍
		    var img1 = $("<img src='"+pro.img1+"' />");//内容图片
		    var img2 = $("<img src='"+pro.img2+"' />");//内容图片
		    var img3 = $("<img src='"+pro.img3+"' />");//内容图片
		    var img4 = $("<img src='"+pro.img4+"' />");//内容图片
		    var img5 = $("<img src='"+pro.img5+"' />");//内容图片 
		    div.append(h0);
		    div.append(p1);
		    div.append(img1);
		    div.append(img2);
		    div.append(img3);
		    div.append(img4);
		    div.append(img5);
		    $(".project_x li").eq(pro.nums).append(div);
		    $(".project_xli").hide();  
		};
		//功夫神画坊
		var pro1 = new Projects({
			h0:"功夫神画坊——三重功力，是画，是音响，还是健康器",
			p1:"功夫神画坊，专业经营各类养生画系列，个性、新奇、时尚，可以满足现代人养生需求、送礼需求、装饰需求、音响需求、商务需求等各种需求，既有各种制作好的产品系列，也可以按照客户要求进行个性定制，是颠覆传统装饰画的高科技产品。",
			img1:"img/cp_jczx_gfsh01.jpg",
			img2:"img/cp_jczx_gfsh02.jpg",
			img3:"img/cp_jczx_gfsh03.jpg",
			img4:"img/cp_jczx_gfsh04.jpg",
			img5:"img/cp_jczx_gfsh05.jpg",
			nums:0
		});
		//4D魔画坊
		var pro2 = new Projects({
			h0:"4D魔画坊——裸眼3D再升级，引爆流行神画",
			p1:"4D魔画坊，其视觉立体、动感、炫变、缩放、全景、高清、梦幻般的效果，人物呼之欲出，景物生动逼真，美不胜收的奇特风景、以假乱真的3D特效和声控、音频等结合，让人犹如身临其境，那种强烈的视觉冲击力，给人一种全新的视觉享受！个性、时尚、新奇，让你的相册变得有声有色、炫彩斑斓，魔力十足。",
			img1:"img/cp_jczx_4dmh01.jpg",
			img2:"img/cp_jczx_4dmh02.jpg",
			img3:"img/cp_jczx_4dmh03.jpg",
			img4:"img/cp_jczx_4dmh04.jpg",
			img5:"img/cp_jczx_4dmh05.jpg",
			nums:1
		});
		//创意魔画坊
		var pro3 = new Projects({
			h0:"创意魔画坊——普通礼品华丽转身创意礼品",
			p1:"创意魔画坊，采用独有的异型印画机，是超新颖、超感性、超火热的时尚产物，以其新颖的外观、创意的设计,以及可以为每一位消费者量身打造独一无二个性礼品的个性化定制服务。",
			img1:"img/cp_jczx_cymh01.jpg",
			img2:"img/cp_jczx_cymh02.jpg",
			img3:"img/cp_jczx_cymh03.jpg",
			img4:"img/cp_jczx_cymh04.jpg",
			img5:"img/cp_jczx_cymh05.jpg",
			nums:2
		});
		});
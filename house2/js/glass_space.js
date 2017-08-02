	//创建玻璃空间里的内容标签
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
		//炫彩玻艺
		var pro1 = new Projects({
			h0:"炫彩玻艺： 炫彩的碰撞，生活的热情扑面而来！",
			p1:"既有绚丽的光线，又有精彩的色彩碰撞，亦幻亦真，独有的质感、微妙而丰富的变化，勾勒出现代时尚家居王子与公主身边一道绝妙美丽的风景线，生活的热情铺面而来。",
			img1:"img/cp_jczx_xcby01.jpg",
			img2:"img/cp_jczx_xcby02.jpg",
			img3:"img/cp_jczx_xcby03.jpg",
			img4:"img/cp_jczx_xcby04.jpg",
			img5:"img/cp_jczx_xcby05.jpg",
			nums:0
		});
		//百变玻艺
		var pro2 = new Projects({
			h0:"百变玻艺： 想变就变，想怎么变，就怎么变！",
			p1:"百变的风格，诉说着光与影的浪漫和传奇。让都市人把自然、和谐与美好带回家，在城市的混凝土围墙里，拥有一片属于自己的绚丽多彩的天空。",
			img1:"img/cp_jczx_bbby01.jpg",
			img2:"img/cp_jczx_bbby02.jpg",
			img3:"img/cp_jczx_bbby03.jpg",
			img4:"",
			img5:"",
			nums:1
		});
		//质感玻艺
		var pro3 = new Projects({
			h0:"质感玻艺：远看色彩无限，近看质感超全，魔法的效果，动人无比！",
			p1:"将无限创意融入有限空间，用一抹轻盈的亮色，为居室或商务空间带来最为特别的装饰时尚，艳而不俗，巧夺天工，让华美的心情，如钻石般晶莹绽放。",
			img1:"img/cp_jczx_zgby01.jpg",
			img2:"img/cp_jczx_zgby02.jpg",
			img3:"img/cp_jczx_zgby03.jpg",
			img4:"",
			img5:"",
			nums:2
		});
		//水晶玻艺
		var pro4 = new Projects({
			h0:"水晶玻艺：如水晶般晶莹，如水晶般剔透，水晶之爱，永动我心！",
			p1:"可广泛应用于别墅、公寓、宾馆、酒店、KTV等场所，晶莹剔透、时尚多彩。细心的呵护与恰如其分的渲染，如神来之笔让平凡变神奇。",
			img1:"img/cp_jczx_sj1by01.jpg",
			img2:"img/cp_jczx_sj1by02.jpg",
			img3:"img/cp_jczx_sj1by03.jpg",
			img4:"",
			img5:"",
			nums:3
		});
		//4D玻艺
		var pro5 = new Projects({
			h0:"4D玻艺： 超级立体效果，栩栩如生，让想象成为现实！",
			p1:"可广泛应用于家装装饰画、工装装饰画、家庭隔断、会所隔断等多种场所，风格可现实、 可魔幻，可艺术，可写真……超级立体效果，栩栩如生，让想象成为现实！",
			img1:"img/cp_jczx_4dby01.jpg",
			img2:"img/cp_jczx_4dby02.jpg",
			img3:"img/cp_jczx_4dby03.jpg",
			img4:"",
			img5:"",
			nums:4
		});
		//全景玻艺
		var pro6 = new Projects({
			h0:"全景玻艺： 360°生活精彩展现，开启美好生活无限视角！",
			p1:"无接缝、无明显过度，画面整体，可应用于商场、超市、专卖店、售楼处、汽车4S店、 别墅豪宅等场所，大场景显示，大画面体现，气势恢宏，360°生活精彩体现，开始美好生活无限视角",
			img1:"img/cp_jczx_qj3by01.jpg",
			img2:"img/cp_jczx_qj3by02.jpg",
			img3:"img/cp_jczx_qj3by03.jpg",
			img4:"",
			img5:"",
			nums:5
		});
		//冰晶玻艺
		var pro7 = new Projects({
			h0:"冰晶玻艺： 冰裂般的美丽，触动心灵的美好，诱惑你的视觉！",
			p1:"无接缝、无明显过度，画面整体，可应用于商场、超市、专卖店、售楼处、汽车4S店、 别墅豪宅等场所，大场景显示，大画面体现，气势恢宏，360°生活精彩体现，开始美好生活无限视角",
			img1:"img/cp_jczx_bjby01.jpg",
			img2:"img/cp_jczx_bjby02.jpg",
			img3:"img/cp_jczx_bjby03.jpg",
			img4:"",
			img5:"",
			nums:6
		});
		//纹理玻艺
		var pro8 = new Projects({
			h0:"纹理玻艺： 每一道纹理，都是时尚的触角，都是个性的彰显！",
			p1:"具有与生俱来的贵族气息，可以将饱含激情的设计和独特环境氛围的商务或家居空间完美结合起来，赋予装饰空间更多的灵性与智慧。",
			img1:"img/cp_jczx_wlby01.jpg",
			img2:"img/cp_jczx_wlby02.jpg",
			img3:"img/cp_jczx_wlby03.jpg",
			img4:"img/cp_jczx_wlby04.jpg",
			img5:"img/cp_jczx_wlby05.jpg",
			nums:7
		});
		//写真玻艺
		var pro9 = new Projects({
			h0:"写真玻艺： 完美展现美好系列，永久保护，历久弥新！",
			p1:"万能的写真魔法工艺，从客厅门，阳台门、卧室门、书房门到衣柜门、橱柜门，从背景墙到桌面，更强调和突出人性化、空间化的整体性设计风格，个性、精致、典雅、而又紧跟时尚潮流...",
			img1:"img/cp_jczx_xzby01.jpg",
			img2:"img/cp_jczx_xzby02.jpg",
			img3:"img/cp_jczx_xzby03.jpg",
			img4:"img/cp_jczx_xzby04.jpg",
			img5:"img/cp_jczx_xzby05.jpg",
			nums:8
		});
		//裂纹工艺
		var pro10 = new Projects({
			h0:"裂纹工艺： 看似破裂，却拥有独有的美丽，这份美丽，为你而来！",
			p1:"可与不同装饰风格的家居、环境氛围浑然一体、相得益彰，磅礴而大气的装饰语言与宁静致远的淡定心境完美融合，溢满恬然之美、和谐之美。",
			img1:"img/cp_jczx_lwby01.jpg",
			img2:"img/cp_jczx_lwby02.jpg",
			img3:"img/cp_jczx_lwby03.jpg",
			img4:"",
			img5:"",
			nums:9
		});
		});
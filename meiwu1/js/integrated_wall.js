//创建集成墙饰里的内容标签
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
		//音乐魔画墙
		var pro1 = new Projects({
			h0:"隐形音乐魔画墙：会唱歌会隐形的墙",
			p1:"梦幻隐形系列，是当今世界上一种新型高科技装饰材料，用隐形幻彩涂料，运用各种不同材质，在特置的灯光下，呈现出艳丽的色彩。",
			img1:"img/cp_jczx_yyyx01.jpg",
			img2:"img/cp_jczx_yyyx02.jpg",
			img3:"img/cp_jczx_yyyx03.jpg",
			img4:"img/cp_jczx_yyyx04.jpg",
			img5:"img/cp_jczx_yyyx05.jpg",
			nums:0
		});
		//有氧石材板
		var pro2 = new Projects({
			h0:"有氧石材板：会呼吸的石材",
			p1:"采用人造大理石、仿造大理石等材料，结合独特技术，拥有同原生态大理石一样的纹理、光滑度、紧密度、柔滑度……实现传统板材的装修效果。",
			img1:"img/cp_jczx_yysc01.jpg",
			img2:"img/cp_jczx_yysc02.jpg",
			img3:"img/cp_jczx_yysc03.jpg",
			img4:"img/cp_jczx_yysc04.jpg",
			img5:"img/cp_jczx_yysc05.jpg",
			nums:1
		});
		//魔法墙艺
		var pro3 = new Projects({
			h0:"魔法墙艺：有七十二般变化的神奇墙衣",
			p1:"以历经亿万年形成的稀土矿物质为原材料，可以根据装修要求，作出各种造型和图案，在保证健康的同时，满足现代人对个性装修的需求。",
			img1:"img/cp_jczx_mfqy01.jpg",
			img2:"img/cp_jczx_mfqy02.jpg",
			img3:"img/cp_jczx_mfqy03.jpg",
			img4:"img/cp_jczx_mfqy04.jpg",
			img5:"img/cp_jczx_mfqy05.jpg",
			nums:2
		});
		//养生集成板
		var pro4 = new Projects({
			h0:"养生集成板：大自然的墙板",
			p1:"全新的竹木纤维化概念产品为中国国民带来全新的高端环保、健康、安全、低碳、0甲醛、0辐射、3D立体解决方案。",
			img1:"img/cp_jczx_ysjc01.jpg",
			img2:"img/cp_jczx_ysjc02.jpg",
			img3:"img/cp_jczx_ysjc03.jpg",
			img4:"img/cp_jczx_ysjc04.jpg",
			img5:"img/cp_jczx_ysjc05.jpg",
			nums:3
		});
		//翡翠玉石墙
		var pro5= new Projects({
			h0:"翡翠玉石墙： 近乎真翠的玉石材料",
			p1:"采用现代科技，近乎100%翡翠效果，拥有同天然翡翠近乎完全相同的质感和触感及光学折射效果，装饰爱家，如同进入了神奇的水晶宫殿，加之翡翠拥有聚财旺家的寓意，更符合现代人的需求。",
			img1:"img/cp_jczx_fcys01.jpg",
			img2:"img/cp_jczx_fcys02.jpg",
			img3:"img/cp_jczx_fcys03.jpg",
			img4:"img/cp_jczx_fcys04.jpg",
			img5:"img/cp_jczx_fcys05.jpg",
			nums:4
		});
		//仿玉背景墙
		var pro6= new Projects({
			h0:"仿玉背景墙：仿真玉材料科技",
			p1:"仿玉背景墙具有净化空气、节能环保，其色泽柔和、纹理均匀、细致、有光泽，更兼具耐酸、耐碱、防紫外线、防老化、抗水防潮等功能。墙饰色彩丰富、图案细腻、逼真度高，产品经久耐用，不会产生后期龟裂现象。仿玉背景墙能够让装饰空间具有强烈的拉伸感，提升家居空间的观赏性和时尚感，让生活更环保、健康、有品位。",
			img1:"img/cp_jczx_fybj01.jpg",
			img2:"img/cp_jczx_fybj02.jpg",
			img3:"img/cp_jczx_fybj03.jpg",
			img4:"img/cp_jczx_fybj04.jpg",
			img5:"img/cp_jczx_fybj05.jpg",
			nums:5
		});
		//冰晶玻艺坊
		var pro7= new Projects({
			h0:"冰晶玻艺坊： 艺术玻艺新高度",
			p1:"依托独有技术，利用现代工艺，采用超前影像技术，高分辨率显示效果，近乎完美的细节复制，栩栩如生，开创中国艺术玻璃的新高度，完美的艺术体现，超全的艺术风格，让中国大众尽享定制级理想生活。",
			img1:"img/cp_jczx_bjby01.jpg",
			img2:"img/cp_jczx_bjby02.jpg",
			img3:"img/cp_jczx_bjby03.jpg",
			img4:"img/cp_jczx_bjby04.jpg",
			img5:"img/cp_jczx_bjby05.jpg",
			nums:6
		});
		//神奇冰晶画
		var pro8= new Projects({
			h0:"神奇冰晶画：完美冰晶玻璃画艺",
			p1:"神奇冰晶画以百变效果领先市场，将动感、变幻、缩放、全景、高清、梦幻等多种效果融入玻璃艺术，晶莹剔透、流光溢彩，画面炫丽不失清雅，精致不失灵动，是高科技应用于成像领域的完美结晶。",
			img1:"img/cp_jczx_sqbj01.jpg",
			img2:"img/cp_jczx_sqbj02.jpg",
			img3:"img/cp_jczx_sqbj03.jpg",
			img4:"img/cp_jczx_sqbj04.jpg",
			img5:"img/cp_jczx_sqbj05.jpg",
			nums:7
		});
		//炫彩魔幻墙
		var pro9= new Projects({
			h0:"炫彩魔幻墙： 炫彩光波随时改变",
			p1:"独有的魔幻技术，将一幅幅科技感强、形象逼真、生动活泼的图案，让普通的墙面，变得丰满、形象、生动、栩栩如生，不开灯时和普通的白墙无异，开灯时呈现出魔幻般的效果，身临其境，如太空漫步。",
			img1:"img/101.png",
			img2:"img/102.png",
			img3:"img/103.png",
			img4:"img/104.png",
			img5:"img/105.png",
			nums:8
		});
		//9D定制空间
		var pro10= new Projects({
			h0:"9D定制空间：如在墙里一般",
			p1:"独有的成像技术，将普通的墙面，打造成科技感强、形象逼真、生动活泼的墙面，打造成立体式、动感的、变化的、逼真的虚似与现实影像，让科技普及化，艺术生活化，品位高端化。",
			img1:"img/cp_jczx_9ddz01.jpg",
			img2:"img/cp_jczx_9ddz02.jpg",
			img3:"img/cp_jczx_9ddz03.jpg",
			img4:"img/cp_jczx_9ddz04.jpg",
			img5:"img/cp_jczx_9ddz05.jpg",
			nums:9
		});
		});
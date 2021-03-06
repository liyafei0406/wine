//创建诚约合作里的内容标签
		$(function() {
		function Projects(pro) {
			var div = $("<div></div>");//内容最外面div的标签
			div.addClass("particulars_li project_xli");//给div添加clss类名
			var h0 = $("<h4>"+pro.h0+"</h4>");//内容的大标题
			var h1 = $("<h5>"+pro.h1+"</h5>");//内容的小标题
		    var p1 = $("<p>"+pro.p1+"</p>");//内容介绍
		    var h2 = $("<h5>"+pro.h2+"</h5>");//内容的小标题
		    var p2 = $("<p>"+pro.p2+"</p>");//内容介绍
		    var img1 = $("<img src='"+pro.img1+"' />");//内容图片
		    var h3 = $("<h5>"+pro.h3+"</h5>");//内容的小标题
		    var p3 = $("<p>"+pro.p3+"</p>");//内容介绍
		    var h4 = $("<h5>"+pro.h4+"</h5>");//内容的小标题
		    var p4 = $("<p>"+pro.p4+"</p>");//内容介绍
		    var h5 = $("<h5>"+pro.h5+"</h5>");//内容的小标题
		    var p5 = $("<p>"+pro.p5+"</p>");//内容介绍
		    var img2 = $("<img src='"+pro.img2+"' />");//内容图片
		   	var h6 = $("<h5>"+pro.h6+"</h5>");//内容的小标题
		    var p6 = $("<p>"+pro.p6+"</p>");//内容介绍
		    var h7 = $("<h5>"+pro.h7+"</h5>");//内容的小标题
		    var p7 = $("<p>"+pro.p7+"</p>");//内容介绍
		    div.append(h0);
		    div.append(h1);
		    div.append(p1);
		    div.append(h2);
		    div.append(p2);
		    div.append(img1);
		    div.append(h3);
		    div.append(p3);
		    div.append(h4);
		    div.append(p4);
		    div.append(h5);
		    div.append(p5);
		    div.append(img2);
		    div.append(h6);
		    div.append(p6);
		    div.append(h7);
		    div.append(p7);
		    $(".project_x li").eq(pro.nums).append(div);
		    $(".project_xli").hide();  
		};
		//合作方式
		var pro1 = new Projects({
			h0:"美屋定制，中国装饰界的好项目",
			h1:"前店后厂模式",
			p1:"在家开个直营店，前店后厂，双重模式，即时获利步步为赢。直接面向消费者，既卖产品，又能接受定制。美屋定制独门生意，一个小店就可以垄断一大片区域，顾客排队上门，想不赚都不行！",
			h2:"个性定制模式",
			p2:"通过设立小站点、代理处、网络预定等形式，接收消费者装修房屋的个性定制，按需制作，瞄准高端市场。个人定制利润空间大，多渠道接收定制，收入相当可观。",
			img1:"img/1_150253_1.jpg",
			h3:"店面升级模式",
			p3:"本身自己已有装饰店面的，可引入美屋定制的任何一种产品或技术，增加一种全新的盈利点，让你与其它装饰店面迅速区别开来，以特色抢占市场，做到人无我有，人有我奇，不愁生意不火爆。",
			h4:"产品销售模式",
			p4:"既可做批发，又可做零售，双重优势，双重获利。通过独特工艺制作成各类美屋定制系列批发给装饰公司，各类大小工程商；也可以自己开个经销店，直接面向消费者，产品为王，制胜终端。美屋定制，独门生意，一个小店就可以垄断一大片区域，顾客排队上门，想不赚都不行！",
			h5:"联合经营模式",
			p5:"可与装饰公司、建材公司、房地产开发商、影楼、工艺礼品店等装饰行业的周边销售商或客户，强强联手，展开深度合作，向他们提供更大的实利空间，形成利益共享，风险共担，实现财富共赢之道。",
			img2:"img/1_150307_1.jpg",
			h6:"O2O两店模式",
			p6:"采用未来十年都流行o2o模式，线上线下同时运作，开一店送一店，共享海量产品套餐、拥有低价产品货源，做全国0库存生意。",
			h7:"小区开发模式",
			p7:"刚开盘或装修的小区，对美屋定制的需求量额外大，专门运作小区市场，盈利也非常快，公司制作了全套小区促销展示工具，业务经理协同支持，让小区开发一次性签单一百个！",
			nums:0
		});
//		合作申请
		var pro2 = new Projects({
			h0:"抓住致富机会   从留言咨询开始",
			h1:"",
			p1:"诚邀您与我们一起开拓庞大的装饰装修市场，缔造更多创富传奇！期待您的真诚合作，请认真填写下表，我们的创业顾问会在两个工作日内与您联系洽谈，谢谢！当然，不论我们能否携手合作，都得感谢您对我们美屋定制品牌的关注，期待您提出宝贵意见或建议！",
			h2:"欢迎各位有识志士到总部考察学习！",
			p2:"公司数千平米展示，万平米办公面积！2016年重点扶持100家代理商，打造样板市场，巨额广告扶持，高额现金补贴，你还等什么！商机稍纵即逝，财富就在自己手中！机会只有一次，不是你的就是别人的！",
			img1:"",
			h3:"好消息",
			p3:"在8月31日前，通过点击咨询提交免费获取资料即可获得签约特惠大礼包一份，亲临总部考察亦可获精美礼品一份！详情请致电：400-709-0668 咨询。",
			h4:"",
			p4:"",
			h5:"五步走，轻松加盟",
			p5:"",
			img2:"img/jiamen.png",
			h6:"",
			p6:"",
			h7:"",
			p7:"",
			nums:1
		});
		//联系我们
		var pro3 = new Projects({
			h0:"专注创业服务14年  专业值得信赖",
			h1:"",
			p1:"",
			h2:"",
			p2:"",
			img1:"img/hotimg.gif",
			h3:"",
			p3:"",
			h4:"",
			p4:"",
			h5:"",
			p5:"",
			img2:"img/address.gif",
			h6:"",
			p6:"",
			h7:"",
			p7:"",
			nums:2
		});
})
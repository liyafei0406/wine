//创建项目介绍里的内容标签
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
		    var h6 = $("<h5>"+pro.h6+"</h5>");//内容的小标题
		    var p6 = $("<p>"+pro.p6+"</p>");//内容介绍
		    var img2 = $("<img src='"+pro.img2+"' />");//内容图片
		    var img3 = $("<img src='"+pro.img3+"' />");//内容图片
		    var img4 = $("<img src='"+pro.img4+"' />");//内容图片
		    div.append(h0);
		    div.append(h1);
		    div.append(p1);
		    div.append(img1);
		    div.append(h2);
		    div.append(p2);
		    div.append(img2);
		    div.append(h3);
		    div.append(p3);
		    div.append(img3);
		    div.append(h4);
		    div.append(p4);
		    div.append(img4);
		    div.append(h5);
		    div.append(p5);
		    div.append(h6);
		    div.append(p6);
		    $(".project_x li").eq(pro.nums).append(div);
		    $(".project_xli").hide();  
		};
		//项目简介
		var pro1 = new Projects({
			h0:"走千家不如到一家   美屋定制装千家",
			h1:"从采购到定制，家居装修的又一次文化升华！",
			p1:"",
			h2:"看时尚 —— 个性定制掀起装修革命，先入为王！",
			p2:"随着“轻装修、重装饰”消费观念的流行，使得大部分消费者的家装理念发生了变化。费时费工、费用昂贵、设计单一、功能单一的传统装修，已经无法满足当下消费者追求个性化家装的需求，他们希望能够出现功能性、美观性兼备的个性化建材新产品。",
			img1:"img/003.jpg",
			h3:"",
			p3:"美屋定制品牌，以养生集成板、魔法墙艺、隐形墙艺、创意软包、仿真大理石等各种健康装修材料为基础，以个性定制和智能养生为特色，倡导个性品味，注重环保健康，协调家居风格，提供个性化装修需求，满足新时代下消费者多样化、多元化的消费需求。同时，美屋定制的产品以期防火、阻燃、防水、防油、隔音、保温、降噪、净化空气、防辐射等诸多鲜明特色，成为时下最受消费者欢迎的新潮建材产品。",
			h4:"看大势 —— 创业就业首选装修，黄金市场永不落幕！",
			p4:"不管经济形势怎么变，不管生活条件怎么提高改善，装修，永远是离不了的行业。据统计，在自主创业群体中，20%开餐饮，70%搞建筑装修，而在就业群体中，装修更是热门行业。传统外出打工，不是跑销售，就是进工厂，真正赚钱的，还是装饰行业。普通白领一月工资5000元，而装修工人月薪轻松过万。未来，不管是就业，还是创业，只有做个有思想的装修工，开个有特色的装饰店，才能真正的实现财富人生。",
			h5:"看需求 —— 美屋定制，颠覆性理念，引领行业当仁不让！",
			p5:"美屋定制系统，不是在卖设备，也不是在卖产品，更不是在卖软件，而是卖创意生活，以一种生活方式，用定制时尚来引领潮流。美屋定制系统，以创新打破常规，与众不同的采用新型艺术创作方式，个性创意，别出心裁，无限变化，精彩纷呈，让人心迷不限。 美屋定制系统，在业内率先推出了定制模式，客户可以定制自己钟爱的艺术图案和表现想过，符合这个时代的时尚主流，满足现代人消费追求的独特性，私属性。",
			img2:"img/004.jpg",
			img3:"",
			img4:"",
			h6:"",
			p6:"",
			nums:0
		});
		//项目优势
		var pro2 = new Projects({
			h0:"美屋定制与传统装修对比",
			h1:"八面来风效果出众 智能养生开天辟地",
			p1:"美屋定制，装饰行业的天堂，快装行业的领头羊！绿色环保 健康养生 防火阻燃 防水防油 抗压耐磨……优惠多多，装修首选。",
			h2:"",
			p2:"设计好：提供大量样板做参考，设计方案与装修梦想相融合；材料好：源自天然，养生健康材料；施工好：噪音低，无污染，无隐患;空间享受：各种木纹、石纹、壁纸、软包、滚涂等饰面效果，享受的是美好；生态享受：没有甲醛困扰，绿色安居，享受的是健康养生!",
			img1:"img/1_112615_1.jpg",
			h3:"",
			p3:"智能化生产技术：快速实现生产、配送，快捷服务；智能家居：智能安防，智能视听，智能厨卫，智能墙壁，智能装饰；全新的科技材料，用30年不老化，历久弥新，方便打理，永远保持干净整洁，美观高档!",
			h4:"",
			p4:"特在设计：装修艺术，软装美学有机结合；特在材质：源自天然，养生材质，保证空间的健康安全;快在空间模拟技术，新型装配技术；在施工过程中将十道工序整合成一道工序，魔法拼装，快速施工!",
			h5:"",
			p5:"多种产品：基础化装修，个性化装饰、墙壁；多种服务：一系列化服务，一条龙服务，满足客户需要;省钱：免费验房、量房、配送、施工等，材料一律低于市场价；省心：整装配置，拎包入住；省工：无需泥工瓦工，工时省一半、工钱省一半!",
			img2:"img/1_112717_2.jpg",
			img3:"img/1_112648_1.jpg",
			img4:"img/1_112717_1.jpg",
			h6:"",
			p6:"",
			nums:1
		});
		//经营模式
		var pro3 = new Projects({
			h0:"既可开店，又可办厂，也可无店铺经营！",
			h1:"前店后厂模式",
			p1:"在家开个直营店，前店后厂，双重模式，即时获利步步为赢。直接面向消费者，既卖产品，又能接受定制。美屋定制独门生意，一个小店就可以垄断一大片区域，顾客排队上门，想不赚都不行！",
			h2:"个性定制模式",
			p2:" 通过设立小站点、代理处、网络预定等形式，接收消费者装修房屋的个性定制，按需制作，瞄准高端市场。个人定制利润空间大，多渠道接收定制，收入相当可观。",
			img1:"img/005.jpg",
			h3:"店面升级模式及产品销售模式",
			p3:"本身自己已有装饰店面的，可引入美屋定制的任何一种产品或技术，增加一种全新的盈利点，让你与其它装饰店面迅速区别开来，以特色抢占市场，做到人无我有，人有我奇，不愁生意不火爆;既可做批发，又可做零售，双重优势，双重获利。通过独特工艺制作成各类美屋定制系列批发给装饰公司，各类大小工程商；也可以自己开个经销店，直接面向消费者，产品为王，制胜终端。美屋定制，独门生意，一个小店就可以垄断一大片区域，顾客排队上门，想不赚都不行！",
			h4:"联合经营模式",
			p4:" 可与装饰公司、建材公司、房地产开发商、影楼、工艺礼品店等装饰行业的周边销售商或客户，强强联手，展开深度合作，向他们提供更大的实利空间，形成利益共享，风险共担，实现财富共赢之道。",
			h5:"O2O两店模式",
			p5:"采用未来十年都流行o2o模式，线上线下同时运作，开一店送一店，共享海量产品套餐、拥有低价产品货源，做全国0库存生意!",
			img2:"",
			img3:"",
			img4:"",
			h6:"小区开发模式",
			p6:"刚开盘或装修的小区，对美屋定制的需求量额外大，专门运作小区市场，盈利也非常快，公司制作了全套小区促销展示工具，业务经理协同支持，让小区开发一次性签单一百个！",
			nums:2
		});
		//支持保障
		var pro3 = new Projects({
			h0:"全程创业支持，你不是一个人在战斗！",
			h1:"一对一创业顾问全程服务",
			p1:"从项目咨询、项目考察，到项目培训、项目运作，全程一对一创业顾问，为您提供7*24小时管家式贴身服务。让您了解产品知识、了解代理加盟操作流程、了解开拓市场营销方式，了解入股规避创业市场风险。为您答疑解惑，解除顾虑，增强信心，明确方向。",
			h2:"两种个性化合作方案供选择",
			p2:" 根据您的个人经济实力、经营水平、现有资源等自身条件，为您量身定制适合您发展的创业方案，减少投资风险;根据您目前的经营状况、自我意愿，公司进行评估考察，为您安排代理升级方案，开拓更大的市场，实现更大的创业梦想。",
			img1:"img/1_113821_1.jpg",
			h3:"三项创业服务保障模块",
			p3:"公司为您提供专业的市场调研模版，对您的调研结果进行商圈分析，对区域代理商选择经营提供合理化建立;根据您的实际情况与当地市场特点，提供合适的经营方案和具体营销方式，选择适合当地的营销手段;进行免费技术培训，通过会员下载等保持技术培训的连贯性，后续软件技术免费升级。",
			h4:"四大实操运营扶持系统",
			p4:" 新店开业给予经营合理化建立，并提供开店所需物料的电子设计版本;公司售后热线24小时开通，随时咨询，我们一一定给您一个满意的答案;公司斥资百万，展开网络、电视、纸媒、活动等的品牌传播矩阵，让您轻松经营;采用未来十年都流行的020模式，线上线下同时运作，开一店送一店。",
			h5:"五步经营督导预控机制",
			p5:"贴身顾问将不定期进行经营回访，及时解答经营中存在的问题;提供节假日、周年店庆等活动促销策划方案，以及活动设计文案;当合作商在经营中遇到大批量产品完不成时，可委托总部制作;对经营这状况进行不定时风险评估，并指出优劣之处，不断改进;及时告知公司的升级产品，进行新品技术培训，扩大销售渠道。",
			img2:"img/1_120037_1.jpg",
			img3:"",
			img4:"img/1_113449_1.jpg",
			h6:"六项创新服务升级体系",
			p6:"汇聚数百种国内最流行，最具个性，与互联网结合最紧密的文化创意产业，打造国内领先的创意文化产业集群，先声夺人，一枝独秀。 产品创新：产品集“创意、文化、个性、智能、实用“与一体，满足现代人追求”新奇特”的目标，个性卓越，应者云集;针对创业者提供专项服务，铸造“创业服务系统“，从市场调研到产品研发到营销推广，全程高智力集群制成，服务号，全程有保障。 功能创新：可以远程控制爱家，可以净化空气，可以保温制暖……创新使用功能，满足生活不同需求;根据消费者个人喜好、生活习惯、经济能力等，采用定制模式，打造消费者的专属天地，营造独特个性空间，既美观实用，又彰显品位;整合全球著名设计师和优质制造工厂，精心打造多种空间创意装饰品，实施连锁化标准经营，统一培训，实现快速装修装饰;从创意到产业，需要一个全产业链的运营！宋庄创意工场，从园区建设到配套服务，从创意设计到产品初步展现，从市场预判到产品入市争雄，全程一条龙服务;中国•宋庄创意工场，设立全新的创意工场APP/微创业平台，让不同实力的创业者，都能享受到最好的创业服务。在产业基金和创业服务上提供完善的服务，让创业者的创意，不在被淹没，让创意改变生活，闪耀中国。",
			nums:3
		});
		});
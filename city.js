    //使用bomb
    Bmob.initialize("476eb82108327cf8ed4301539351558f", "1d738f9417efabb2260b89e9568d2a4c");

    //定义数据
    let cityName = '宜宾'
    let school = [{img_src: 'http://www.yblg.gov.cn/xwzx/tpxw/201911/W020191126427049541672.png', des: '四川轻化工大学'}, {img_src: 'http://www.yblg.gov.cn/lgzsw/tzcj/zsdt/201908/W020190829390768828458.png', des: '四川轻化工大学一角'}, {img_src: 'https://static-data.eol.cn/upload/school/201906/1559836453_3621_thumb.JPG', des: '宜宾学院'}, {img_src: 'https://static-data.eol.cn/upload/school/201906/1559836453_5335_thumb.JPG', des: '宜宾学院一角'}, {img_src: 'http://5b0988e595225.cdn.sohucs.com/images/20180901/e14bd60630dc4280a77932668c146390.jpeg', des: '西华大学'}, {img_src: 'http://p6.itc.cn/q_70/images03/20201019/0de89a55a2ca44d0b5681952802c3b2b.jpeg', des: '西华大学一角'}, {img_src: 'http://www.yuloo.com/d/file/1804/79a044a02a0d76ec4752e9221fc710f9.jpg', des: '电子科技大学'}, {img_src: 'http://www.yblg.gov.cn/lgzsw/tzcj/zsdt/201908/W020190829390768321430.png', des: '电子科技大学一角'}]
    let view = [{img_src: 'https://tse2-mm.cn.bing.net/th/id/OIP.WKvlfBeiTMybydSNEl7izgHaFR?w=285&h=202&c=7&o=5&dpr=1.25&pid=1.7', des: '宜宾白塔'}, {img_src: 'https://tse3-mm.cn.bing.net/th/id/OIP.WqFIrAvjT-yhfn89OFc2-gHaCe?w=294&h=117&c=7&o=5&dpr=1.25&pid=1.7', des: '宜宾南门大桥'}, {img_src: 'https://tse2-mm.cn.bing.net/th/id/OIP.X0qSgGw8-RSgdAZJhX_4AwHaD4?w=304&h=180&c=7&o=5&dpr=1.25&pid=1.7', des: '宜宾金沙江大桥'}, {img_src: 'https://tse1-mm.cn.bing.net/th/id/OIP.OsV1aqftFJQnMJWml8v_TQHaE7?w=279&h=186&c=7&o=5&dpr=1.25&pid=1.7', des: '宜宾大观楼'}, {img_src: 'https://tse4-mm.cn.bing.net/th/id/OIP.5y53lFMmfAR1EGUVqaMJhQEsC7?w=307&h=192&c=7&o=5&dpr=1.25&pid=1.7', des: '宜宾真武山'}, {img_src: 'https://tse2-mm.cn.bing.net/th/id/OIP.gsafZY7O4L_Dqq_HPE1yeQAAAA?w=234&h=180&c=7&o=5&dpr=1.25&pid=1.7', des: '宜宾翠屏山'}, {img_src: 'https://tse1-mm.cn.bing.net/th/id/OIP.b-Niv6u-ZsCkGzPDZ7RmBAHaE9?w=287&h=192&c=7&o=5&dpr=1.25&pid=1.7', des: '宜宾石海'}, {img_src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1508/16/c8/11258093_11258093_1439707182531.jpg', des: '宜宾竹海'}];
    let food = [{des: '宜宾凉糕', img_src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=756134359,642782306&fm=26&gp=0.jpg'}, {des: '宜宾燃面', img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3993027778,4058088794&fm=26&gp=0.jpg'}, {des: '叶儿粑', img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3924397484,2919818332&fm=26&gp=0.jpg'}, {des: '李庄白肉', img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=62552343,4806317&fm=26&gp=0.jpg'}, {des: '宜宾烧烤', img_src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2047324000,1959973331&fm=26&gp=0.jpg'}, {des: '南溪豆腐干', img_src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1957219969,2647390947&fm=26&gp=0.jpg'}, {des: '宜宾糟蛋', img_src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4107256656,4104605968&fm=26&gp=0.jpg'}, {des: '宜宾芽菜', img_src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4192051991,2413075031&fm=26&gp=0.jpg'}];
    // let poem= [{des: '六朵瑶花巴蜀绽,五粮玉液杜康传.', img_src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1541032516,1901989215&fm=26&gp=0.jpg'}, {des: '山际见来烟,竹中窥落日.', img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4050944306,2309193106&fm=26&gp=0.jpg'}, {des: '长江万里东注,晓吹卷惊涛.', img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3835963673,3099366145&fm=26&gp=0.jpg'}, {des: '僰(bó)人文化', img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=861100097,177222165&fm=26&gp=0.jpg'}, {des: '悠悠三千载 茶香飘世界 ', img_src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1126734727,468409540&fm=26&gp=0.jpg'}，{img_src: 'https://inews.gtimg.com/newsapp_bt/0/12618806164/1000', des: '上行纤夫怨,下走船工惊.'}，{des: '江安竹簧', img_src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=369604382,1848611445&fm=26&gp=0.jpg'}, {des: '美哉宜宾,快哉燃面.', img_src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3613536731,2953912638&fm=26&gp=0.jpg'}]
    let culture = [{img_src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1541032516,1901989215&fm=26&gp=0.jpg', des: '六朵瑶花巴蜀绽,五粮玉液杜康传.'}, {img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4050944306,2309193106&fm=26&gp=0.jpg', des: '山际见来烟,竹中窥落日.'}, {img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3835963673,3099366145&fm=26&gp=0.jpg', des: '长江万里东注,晓吹卷惊涛.'}, {img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=861100097,177222165&fm=26&gp=0.jpg', des: '僰(bó)人文化'}, {img_src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1126734727,468409540&fm=26&gp=0.jpg', des: '悠悠三千载 茶香飘世界'}, {img_src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=369604382,1848611445&fm=26&gp=0.jpg', des: '江安竹簧'}, {img_src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3613536731,2953912638&fm=26&gp=0.jpg', des: '美哉宜宾,快哉燃面.'},{'img_src': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2756717615,3357959898&fm=26&gp=0.jpg', 'des': '宜宾老城'}]
    let history = [{img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1720338297,3689144619&fm=26&gp=0.jpg', des: '解放前的宜宾市合江门'}, {img_src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1842954708,2427040363&fm=26&gp=0.jpg', des: '宜宾地委成立'}, {img_src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=993985185,4107331835&fm=26&gp=0.jpg', des: '大观楼今昔对比'}, {img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603857581031&di=3226a1d5db33d1aa9716d9becbc1b187&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180806%2F84d93ac9566042c1a47f733e849e0393.jpeg', des: '宜宾车站'}, {img_src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2521407153,1168594423&fm=26&gp=0.jpg', des: '宜宾酒文化'}, {img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2117645075,608612349&fm=26&gp=0.jpg', des: '李庄记忆'}, {img_src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3030038450,3357520992&fm=26&gp=0.jpg', des: '古街古巷'}, {img_src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2231878531,240762237&fm=26&gp=0.jpg', des: '塔佑宜宾'}]
    let people = [{img_src: 'https://pic.baike.soso.com/ugc/baikepic2/19775/20180202103508-856911371_jpg_167_220_6680.jpg/300', des: '郑佑之（1891～1931）革命烈士，四川早期中共党员，优秀革命活动家。'}, {img_src: 'https://pic.baike.soso.com/ugc/baikepic2/2519/20160717113052-1488785925.jpg/300', des: '刘华 国家一级演员安徽省黄梅戏剧院副院长'}, {img_src: 'https://pic.baike.soso.com/ugc/baikepic2/9782/20200605050403-522286231_jpeg_187_249_10900.jpg/0', des: '阳翰笙（1902年－1993年），原名欧阳本义，字继修，笔名华汉，是左翼作家领袖之一。'}, {img_src: 'https://pic.baike.soso.com/ugc/baikepic2/22841/cut-20190724174815-1950080578_jpg_248_310_8536.jpg/300', des: '李硕勋（1903年2月23日-1931年9月5日），原名开灼，字叔薰，出生于四川省庆符县（今属四川省宜宾市高县），毕业于上海大学，无产阶级革命家，中共早期参与领导军事斗争的先驱之一。'}, {img_src: 'https://pic.baike.soso.com/ugc/baikepic2/2894/cut-20200901142929-9228876_jpg_388_484_16929.jpg/300', des: '卢德铭，1905年6月9日出生，四川自贡人，1924年加入中国共产党，无产阶级革命家。'}, {img_src: 'https://pic.baike.soso.com/ugc/baikepic2/32485/cut-20190530170024-1897323043_jpg_374_467_27203.jpg/300', des: '赵一曼（李坤泰，1905年10月-1936年8月2日），字淑宁，出生于四川宜宾，毕业于黄埔军校六期，中国共产党党员，抗日烈士。'}, {img_src: 'https://pic.baike.soso.com/ugc/baikepic2/1882/20200605045906-1845189253_jpeg_296_388_11946.jpg/300', des: '唐君毅（1909年1月17日－1978年2月2日），四川宜宾人。现代思想家、哲学家、教育家。师从熊十力、方东美、梁漱溟等，是新儒家学派代表人物。'}]
    // let school_linshi = $.merge(school,view);
    // 录播图定义相关
    let totalArr = [school,view,food,culture,history,people];
    let sz = [];
    let len;
    let imageArr = ["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3148286252,1459280991&fm=15&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2067157433,17111899&fm=15&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857365597,2516217507&fm=11&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=657143451,806653127&fm=26&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1514629818,989439105&fm=15&gp=0.jpg"]
    $(function(){
        // 函数调用区
        // getData();
        main();
        


        //定义自动渲染功能区
    });
    // 做一个主函数，每个函数都在这里做注册
    function main(){
        this.navBar();
        $.each(totalArr,(i,v)=>unloadData(v,i));
        hoverItem();
        addHot();
        console.log("开始加载轮播图")
        lunbotu(sz);
        console.log(sz)
        len = sz.length-1;
        sz[len].css('left',0);
        let timer = setInterval(get_next,1000);
        // 实现鼠标移入某张图片就会弹出介绍
    }
    //定义添加一个推荐图片
    function addHot(){
        hotNum = 3;
        for(let i = 0 ; i<totalArr.length;i++){//控制
            for(let j = 0 ;j< hotNum;j++){
                // console.log("i="+i+",j="+j);
                let $rec = $("<div class=hot><img src="+"./icon/hot.png"+"></div>")
                $('.main').children('div').eq(i).children('.item').eq(j).append($rec)

            }
        }
    }
    //实现鼠标移入转换
    function navBar(){
        $('#nav_bar').children('li').mouseenter(function(){
             console.log("移入");
            $(this).addClass('active').siblings('li').removeClass('active');
        })
    }

    
    //定义数据实现加载
    function unloadData(list,num){
        for(let i = 0 ; i<list.length;i++){
            //生成item式
            var $item = $("<div class=item><div class=image><img src="+list[i]['img_src']+"></div><div class=des>"+list[i]['des']+"</div></div>");
            // console.log($item)
            // $item.addClass('nitai')
            $item.css('margin-bottom',25)
            $('.main').children('div').eq(num).append($item)
            
        }
        //调用一下


    }

    //定义鼠标进入item时让图片放大
    function hoverItem(){
        $('.item').mouseenter(function(){
            $(this).css({
                transform:'scale(1.1)',
                color:'#2e85ff'

            })
        })
        $('.item').mouseleave(function(){
            $(this).css({
                transform:'scale(1)',
                color:'#000'
            })
        })
    }
    // 实现轮播图
    function lunbotu(sz){
        //i为图片个数582*300
        console.log("轮播图函数中");
        console.log(imageArr.length)
        for(let i = 0 ;i < imageArr.length ;i++){
            let $li = $("<li><img src="+imageArr[i]+"></li>")
            $li.css({
                width:580,
                height:300
            })
            $('.slideshow').append($li);
            sz.push($li);
        }
    }

    // 获得轮播图前一个
    function get_pre(){
        let give_up = sz.shift();
        sz.push(give_up);
        $.each(sz,function(i,v){
            v.css('z-index',i)
            v.css('transform','scale(1)')
        })
        sz[len].css('left',0)
    }

    // 获得轮播图的后一个
    function get_next(){
        let give_up = sz[len];
        sz.pop();
        sz.unshift(give_up);
        sz[len].css('left',0);

        //添加一个每次轮播图变化背景跟着变
        // 获取对应的图片
    }

    //该函数用于生成一个菜单栏
    function createMenu(pos,width,height,name){
        let $menu = $("<div class="+name+"_menu><div class=tri></div></div>");
        pos.append($menu)

    }


    //使用bmob获取数据
    function getData(){
        var cityInfo = Bmob.Object.extend("cityInfo");
        var query = new Bmob.Query(cityInfo);
        query.equalTo("cityName",cityName)
        // 查询所有数据
        query.find({
        success: function(results) {
            // console.log(results[0].attributes.hotLocImg)
            let resArr =  results[0].attributes.hotLocImg;
            Array.prototype.push.apply(imageArr,resArr);
            console.log(imageArr.length)
        },
        error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
        });
    }

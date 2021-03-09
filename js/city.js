//使用bomb
Bmob.initialize("7825e470ba6840e06eea41bd0cc046e4", "4e30b37255f606604737ccb905d03b4b");
//定义数据
let cityName = '宜宾市';
let len;
$(function () {
    // 先得到城市名
    onloadPos();
    setTimeout(() => {
        getDateFromCloud()
    }, 1000);
});



// 轮播图功能
function swiper(imageArr) {
    console.log("轮播图加载");
    let timer = null;
    let liW = $(".banner ul li:first").innerWidth();//求一个li的宽度
    // liw = 632    
    let n = 0;//用来管理给第几个span添加类.on、
    let len = imageArr.length - 1;//5
    timer = setInterval(function () {
        /*
            1.先将ul向左移动一个li的宽度，再将第一个li带出去
            2.在执行完1后(形成一个动画队列)，将ul的left回归到0，再将带出去的li追加回ul的最后
        */
        play();
    }, 3000)
    function play() {
        $(".banner ul").animate({ left: -liW }, function () {/*回调函数*/
            $(this).css("left", 0).find("li:first").appendTo(this);
        })
        n++;
        if (n > len) {
            n = 0;
        }
        $(".banner .num span").eq(n).addClass("on").siblings().removeClass("on");
    }
    /*当鼠标移动到轮播图区域，轮播暂停*/
    $(".banner").hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            play();
        }, 3000)
    })
    /*点击next向右箭头*/
    $(".next").click(function () {
        play();
    })
    /*点击prev向左箭头*/
    $(".prev").click(function () {
        /*
            看当前显示的图片前面的
            1.先把ul往左移出一个li的宽度，同时，将最后一个li追加到ul最前头
            2.执行动画：ul的left变为0，将最后一个li带回
        */
        /*$(".banner ul").css("left",-liW).find("li:last").prependTo(this);*//*此处不能用this,当前this指的是prev按钮*/
        $(".banner ul").css("left", -liW).find("li:last").prependTo(".banner ul");
        $(".banner ul").animate({ left: 0 })
        /*解决点击prev时，span跟着一起变化*/
        n--;
        if (n < 0) {
            n = len;/*n = $(".banner ul li").length)-1*/
        }
        $(".banner .num span").eq(n).addClass("on").siblings().removeClass("on");
    })
    /*点击span进行切换
       当前轮播到第几张，放在n中存储，当点击span时，会得到span的index值
       1.判断得到的index值是大于n还是小于n
       如果小于n：通过for循环执行n到index的次数(不包括index,++)的向左循环切换效果
       如果大于n：通过for循环执行n到index的次数(不包括index,--)的向右循环切换效果
       2.将index赋值给n，进行span的切换
    */
    $(".banner .num span").each(function (index) {/*用each遍历*/
        $(this).click(function () {
            if (n < index) {
                for (var i = n; i < index; i++) {
                    $(".banner ul").animate({ left: -liW }, 100, function () {/*回调函数*/
                        $(this).css("left", 0).find("li:first").appendTo(this);
                    })
                }
            } else if (n > index) {
                for (var i = n; i > index; i--) {
                    $(".banner ul").css("left", -liW).find("li:last").prependTo(".banner ul");
                    $(".banner ul").animate({ left: 0 }, 100);
                }
            }
            n = index;
            $(".banner .num span").eq(n).addClass("on").siblings().removeClass("on");
        })

    })

}
// 加载地方名称
function onloadPos() {
    console.log("加载地址...")
    var map = new BMap.Map("bdMapBox");
    var nowCity = new BMap.LocalCity();
    nowCity.get(bdGetPosition);
    function bdGetPosition(result) {
        cityName = result.name;
        $('.pos').text(cityName);
    }
}
//定义添加一个推荐图片
function addHot(totalArr) {
    hotNum = 3;
    for (let i = 0; i < totalArr.length; i++) {//控制
        for (let j = 0; j < hotNum; j++) {
            let $rec = $("<div class=hot><img src=" + "./icon/hot.png" + "></div>")
            $('.main').children('div').eq(i).children('.item').eq(j).append($rec)

        }
    }
}



//定义数据实现加载
function unloadData(list, num) {
    for (let i = 0; i < list.length; i++) {
        //生成item式
        var $item = $("<div class=item><div class=image><img src=" + list[i]['img_src'] + "></div><div class=des>" + list[i]['title'] + "</div></div>");
        $item.css('margin-bottom', 25)
        $('.main').children('div').eq(num).append($item)

    }
    //调用一下


}

//定义鼠标进入item时显示动画
// 我们需要知道现在是哪个div在被显示，我们需要传数组过来，而具体传哪一个数组，是
function hoverItem(totalArr) {
    //获得y_offset
    let y_offset = $('.image').position().top;
    let item_height = $('.item').height();
    let item_idx, parent_idx, arr = null;
    $('.item').mouseenter(function () {
        item_idx = $(this).index();
        parent_idx = $(this).parent().index();
        arr = totalArr[parent_idx];
    })
    $('.item').click(function () {
        $(this).children('.image').css({
            top: -100,
            transform: 'scale(0.5)'
        });
        $(this).children('.des').css({
            height: 0.6 * item_height,
            padding: 10,
            textAlign: 'justify',
            textIndent: '2em'
        }).text(arr[item_idx].des);//不是永远都是school，弄成对应list的

    })
    /*$('.item').mouseleave(function () {
        let index = $(this).index();
        $(this).children('.image').css({
            top: y_offset,
            transform: 'scale(1)'
        });
        $(this).children('.des').css({
            height: 25,
            padding: 10,
            textAlign: 'center',
            textIndent: 0
        }).text(arr[item_idx].title);
    })*/
}

// 实现滑块导航条
function slideMove() {
    // 移入哪一个就看哪一个距离左边多少然后让滑块动画移动到这里
    $("#nav_bar").children("li").mouseenter(function () {
        let x_offfset = $(this).position().left - $(".slideBlock").width() * 0.5 + $(this).width() * 0.5;
        // calc(85px - 100px*0.5 + 32px*0.5)
        let idx = $(this).index();
        // 控制滑块移动
        $(".slideBlock").animate({
            left: x_offfset,
        }, "slow");
        // 控制对应区域显示其他区域隐藏
        $('.main').children('div').eq(idx).css('display', 'flex').siblings('div').css('display', 'none');
    })

}

// 实现轮播图
/**每隔一段时间换一张图片就行不用那么麻烦 */
function unloadImgSrc(imageArr) {
    $.each(imageArr, (i, v) => {
        $(".ul_list").find('li').eq(i).children('img').attr('src', v);
    })

}


// 获取数据区域
function getDateFromCloud() {
    //调用查地址的函数
    console.log("查询完成。cityName=" + cityName)
    const query = Bmob.Query('index');
    console.log("已在开始查询....")
    query.equalTo("cityName", "==", cityName);
    query.find().then(res => {
        console.log("加载数据...");
        res = res[0];
        console.log(res);

        //对res进行一个解析操作
        // 数据定义
        let imgArr = res.imgArr;
        let culture = res.culture;
        let food = res.food;
        let history = res.history;
        let people = res.people;
        let school = res.school;
        let view = res.view;
        let totalArr = [school, history, food, view, people, culture];

        // 数据使用
        // 加载城市名
        // 加载轮播图图片
        unloadImgSrc(imgArr);
        // 加载城市介绍
        $('.content').text(res.intro);
        // 加载item式
        $.each(totalArr, (i, v) => unloadData(v, i));
        // 不需要数据的就用main
        addHot(totalArr);
        slideMove();
        swiper(imgArr);
        hoverItem(totalArr);
        
    }).catch(err => {
        console.log(err)
    })
}

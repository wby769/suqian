/**
 * Created by Administrator on 2017/3/22.
 */
$(function(){
    // 搜索栏菜单切换
    $(".search-menu-box").find("li").each(function(index){
        $(this).click(function(){
            $(this).find("i").css("color","#13c1d5");
            $(this).siblings().find("i").css("color","#fff");
        })
    })
    //畅玩宿迁菜单内容切换
    $(".nav-bar").find("li").each(function(index){
        $(this).hover(function(){
            $(this).addClass("nav-active").siblings().removeClass("nav-active");
            $(this).parent().parent().find(".nav-container").hide().eq(index).show();
        })
    })
    //度假酒店菜单内容切换
    $(".main-item4 .nav-bar").find("li").each(function(index){
        $(this).hover(function(){
            $(".main-item4").find(".nav-container").hide().eq(index).show();
        })
    })
    //跟团游菜单内容切换
    $(".main-item5 .nav-bar").find("li").each(function(index){
        $(this).hover(function(){
            $(".main-item5").find(".nav-container").hide().eq(0).show();
        })
    })
    //自由行菜单内容切换
    $(".main-item6 .nav-bar").find("li").each(function(index){
        $(this).hover(function(){
            $(".main-item6").find(".nav-container").hide().eq(0).show();
        })
    })
    //美食菜单内容切换
    $(".main-item7 .nav-bar").find("li").each(function(index){
        $(this).hover(function(){
            $(".main-item7").find(".nav-container").hide().eq(0).show();
        })
    })
    //滚动显示左右侧边栏
    $(window).scroll(function(){
        if($(window).scrollTop()>750){
            $("#menu").show();
            $("#fast-bar").show();
        }else{
            $("#menu").hide();
            $("#fast-bar").hide();
        }

        //内容滚动菜单高亮
        var item1=$("#item1").offset().top;
        var item2=$("#item2").offset().top;
        var item3=$("#item3").offset().top;
        var item4=$("#item4").offset().top;
        var item5=$("#item5").offset().top;
        var item6=$("#item6").offset().top;
        var item7=$("#item7").offset().top;
        var item8=$("#item8").offset().top;
        var item9=$(".main-item9").offset().top;
        var scroll = $(this).scrollTop();

        if(scroll>item1 && scroll<item2){
            $("#menu").find("li").eq(0).click();
        }else if(scroll>item2 && scroll<item3){
            $("#menu").find("li").eq(1).click();
        }else if(scroll>item3 && scroll<item4){
            $("#menu").find("li").eq(2).click();
        }else if(scroll>item4 && scroll<item5){
            $("#menu").find("li").eq(3).click();
        }else if(scroll>item5 && scroll<item6){
            $("#menu").find("li").eq(4).click();
        }else if(scroll>item6 && scroll<item7){
            $("#menu").find("li").eq(5).click();
        }else if(scroll>item7 && scroll<item8){
            $("#menu").find("li").eq(6).click();
        }else if(scroll>item8&& scroll<item9){
            $("#menu").find("li").eq(7).click();
        }else{
            return false;
        }
    })
    //返回顶部
    $("#toTop").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
    //左菜单效果
    $("#menu").find("li").click(function(){
        $(this).addClass("menu-active").siblings().removeClass("menu-active");
    });
    //右菜单效果
    $("#fast-bar").find("li").hover(function(){
        $(this).addClass("menu-active");
    },function(){
        $(this).removeClass("menu-active");
    });
    // 倒计时
    var endDate1=new Date(2017,4,15,17,18,10);
    var endDate2=new Date(2017,5,28,23,26,40);
    var endDate3=new Date(2017,5,18,24,00,21);
    var endDate4=new Date(2017,5,23,12,00,28);
    var endDate5=new Date(2017,5,25,06,26,00);
    var endDate6=new Date(2017,5,15,19,05,29);
    var endDate=[endDate1,endDate2,endDate3,endDate4,endDate5,endDate6];

    function timer(){
        var now=new Date();
        for(var i=0;i<6;i++) {
            var oft = Math.round((endDate[i] - now) / 1000);
            var ofd = parseInt(oft / 3600 / 24);
            var ofh = parseInt((oft % (3600 * 24)) / 3600);
            var ofm = parseInt((oft % 3600) / 60);
            var ofs = oft % 60;
            if (ofs < 0) {
                $(".time").eq(i).text('倒计时结束！').css("color", "red");
                continue;
            }
            (ofs<10) ? ofs="0"+ofs:ofs=ofs;
            $(".time").eq(i).text(ofd + '天 ' + ofh + '时 ' + ofm + '分 ' + ofs + '秒');
        }
    }
    setInterval(timer,1000);
})

$(function(){
    webview.getSettings().setAllowUniversalAccessFromFileURLs(true);

    navActive();
    function navActive(){
        let navIndex = sessionStorage.getItem('navIndex')?sessionStorage.getItem('navIndex') : 0;
        $(".header-nav li").eq(navIndex).addClass('nav-active').siblings().removeClass('nav-active');
    }
    $(".header-nav li").click(function(){
        $(this).addClass('nav-active').siblings().removeClass('nav-active')
        sessionStorage.setItem('navIndex',$(this).index())
        sessionStorage.removeItem('secmenuIndex');
        sessionStorage.removeItem('thirdmenuIndex');
    })

    secnavWidth();
    function secnavWidth(){   
        for(var n=0;n<$(".header-secnav").length;n++){
            var secnavWidth = 0,secnavPadding = '';
            for(var i=0;i<$(".header-secnav").eq(n).find("li").length;i++){
                secnavWidth += $(".header-secnav").eq(n).find("li").eq(i).width();
            }
            secnavPadding = ($(".header-secnav").width()-secnavWidth)/($(".header-secnav").eq(n).find("li").length)
            for(var j=0;j<$(".header-secnav").eq(n).find("li").length;j++){
                $(".header-secnav").eq(n).find("li").eq(j).width($(".header-secnav").eq(n).find("li").eq(j).width()+secnavPadding)
            }
            $(".header-secnav").eq(n).find("li").css('padding-left',secnavPadding/2)
            
        }
        // var secnavWidth = 0,secnavPadding = '';
        // for(var i=0;i<$(".header-secnav li").length;i++){
        //     secnavWidth += $(".header-secnav li").eq(i).width();
        // }
        // secnavPadding = ($(".header-secnav").width()-secnavWidth)/($(".header-secnav li").length)
        // for(var j=0;j<$(".header-secnav li").length;j++){
        //     $(".header-secnav li").eq(j).width($(".header-secnav li").eq(j).width()+secnavPadding)
        // }
        // $(".header-secnav li").css('padding-left',secnavPadding/2)
    }

    // 监听滚动条
    $(window).scroll(function() {
        if($(document).scrollTop()>=450){
            $('.go-top').css("display",'block')
        }else{
            $('.go-top').css("display",'none')
        }
    });
    $('.go-top').click(function(){
        $(document).scrollTop(0)
    })
})

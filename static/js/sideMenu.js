$(function(){ 
    let parentPath = window.location.hash.substring(1).split('/')[0]; 
    window.addEventListener("hashchange", function(){
        firstLoad();
    });
    firstLoad();
    function firstLoad(){
        let hashStr = window.location.hash.substring(1);   
        if(hashStr.indexOf('/')!=-1){
            $('.right-content').load("./static/page/"+hashStr+".html");
        }
    }
    for(var i=0;i<$('.side-navlist>li').length;i++){
        if(window.location.hash.substring(1).split('/').length>1&&$('.side-navlist>li').eq(i).attr('data-path')==window.location.hash.substring(1).split('/')[1]){
            $('.side-navlist>li').eq(i).addClass('selected');
        }
    }
    
    //刷新或首次进入
    // menuActive();
    function menuActive(){
        let secmenuIndex = sessionStorage.getItem('secmenuIndex')?sessionStorage.getItem('secmenuIndex') : 0,
            thirdmenuIndex = sessionStorage.getItem('thirdmenuIndex')?sessionStorage.getItem('thirdmenuIndex') : 0,
            htmlName = "";
        $(".side-navlist>li").eq(secmenuIndex).addClass('selected');
        if(sessionStorage.getItem('thirdmenuIndex')){
            htmlName = $(".side-navlist>li").eq(secmenuIndex).find('.sidesecnav-list>li').eq(thirdmenuIndex).attr('data-path');
            $(".side-navlist>li").eq(secmenuIndex).find('.sidesecnav-list>li').eq(thirdmenuIndex).addClass('selected').parent().slideDown(100);
        }else{
            htmlName = $(".side-navlist>li").eq(secmenuIndex).attr('data-path');
        }
        $('.right-content').load("./static/page/"+parentPath+"/"+htmlName+".html");
        console.log(htmlName)
        console.log(thirdmenuIndex)
    }

    $(".side-navlist>li>span").click(function(){   
        let htmlName = $(this).parent().attr('data-path');
        if(!$(this).parent().children().hasClass('sidesecnav-list')){
            $('.right-content').load("./static/page/"+parentPath+"/"+htmlName+".html");
            // $(document).scrollTop(818)
        }

        if(!$(this).parent().hasClass('selected')){
            $(".sidesecnav-list>li").removeClass('selected');
            sessionStorage.removeItem('thirdmenuIndex');
            $(this).parent().addClass('selected').siblings().removeClass('selected').find('.sidesecnav-list').slideUp(500);
            sessionStorage.setItem('secmenuIndex',$(this).parent().index())

            $(".sidethirdnav-list>li").removeClass('selected');
            $('.sidethirdnav-list').slideUp(500);
        }
        $(this).next().slideToggle(500);
    });
    // $(".sidesecnav-list>li").click(function(){ 
    //     let htmlName = $(this).attr('data-path');
    //     $('.right-content').load("./static/page/"+parentPath+"/"+htmlName+".html");
    //     // $(document).scrollTop(818)
        
    //     $(this).addClass('selected').siblings().removeClass('selected');
    //     sessionStorage.setItem('thirdmenuIndex',$(this).index());
    // });

    //点击侧边栏二级菜单
    $(".sidesecnav-list>li>span").click(function(){ 
        let htmlName = $(this).parent().attr('data-path');
        if(!$(this).parent().children().hasClass('sidethirdnav-list')){
            $('.right-content').load("./static/page/"+parentPath+"/"+htmlName+".html");
        }
        if(!$(this).parent().hasClass('selected')){
            $(".sidethirdnav-list>li").removeClass('selected');
            // sessionStorage.removeItem('thirdmenuIndex');
            $(this).parent().addClass('selected').siblings().removeClass('selected').find('.sidethirdnav-list').slideUp(500);
            // sessionStorage.setItem('secmenuIndex',$(this).parent().index())
        }
        // $(this).parent().addClass('selected').siblings().removeClass('selected');
        $(this).next().slideToggle(500);
        // event.stopPropagation(); 
    })

    //侧边栏三级菜单
    $(".sidethirdnav-list>li").click(function(){
        let htmlName = $(this).attr('data-path');
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.right-content').load("./static/page/"+parentPath+"/"+htmlName+".html");
        console.log(htmlName)
        console.log(parentPath)
    })

    
    // let dataPath = 'childassociation';
    // $('.right-content').load("./static/page/"+parentPath+"/"+dataPath+".html");

})
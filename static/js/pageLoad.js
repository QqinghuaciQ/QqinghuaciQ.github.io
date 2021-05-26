$(function(){   
    pageChange();
})
// 加载主体页面
function pageChange(){  
    let hashStr = window.location.hash.substring(1),
        pathArr = [];
    if(!hashStr){
        $("#homeContent").load("./static/page/home.html");
    }else{
        pathArr = hashStr.split('/');
        $("#homeContent").load("./static/page/"+pathArr[0]+".html");
    }
    // if(RegExp(/aboutus/).test(hashStr)){ 
    //     $("#homeContent").load("./static/page/aboutus.html");
    // }else if(RegExp(/ourswork/).test(hashStr)){
    //     $("#homeContent").load("./static/page/ourswork.html");
    // }else if(RegExp(/supportus/).test(hashStr)){
    //     $("#homeContent").load("./static/page/supportus.html");
    // }else if(RegExp(/infordisclosure/).test(hashStr)){
    //     $("#homeContent").load("./static/page/infordisclosure.html");
    // }else if(RegExp(/cooperateproject/).test(hashStr)){
    //     $("#homeContent").load("./static/page/cooperateproject.html");
    // }else{
    //     $("#homeContent").load("./static/page/home.html");
    // } 
}

// function emptySearch(){
//     $('.search-input').val('');
//     $(".search-wrap").css("display","none");
//     $(".mobile-search").val('');
// }


$(function(){
    // 首页轮播图
    jQuery(".banner-wrap").slide({
        mainCell: ".banner-box",
        autoPlay: true,
        trigger: "click",
        delayTime: 1000,
        interTime: 5000
    });
    //IE 11及以下
    if(!!window.ActiveXObject || "ActiveXObject" in window){
        $(".banner-more").css({'left': '359px','margin': 0})
    }

    // 最新资讯图片点击滑动/渐隐
    setTimeout(function(){
        var galleryTop = new Swiper('.gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            effect : 'fade',
            spaceBetween: 0,
            loop: true,
            loopedSlides: 7,
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 0,
            slidesPerView: 5,
            loop: true,
            loopedSlides: 7,
            centeredSlides: true,
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    },500)

    //播放video
    videoPlay();
    function videoPlay(){
        $("#videoPlaybtn").click(function(){
            $(".video-cover").css('display','none');
            $("#workVideo")[0].play();
        })
        $(".close-box").click(function(){
            $("#workVideo")[0].pause();
            $(".video-cover").css('display','block');
        })
    }
    
})



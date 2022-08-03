$(document).ready(function() {
    //메인 슬라이드
    new Pageable("#container", {
        animation: 500,
    });


    //로드
    $(".gnb").load("common/common.html #gnb");
    $(".footer").load("common/common.html #footer");
    $(".menu").load("common/common.html #menu");



    //메뉴 버튼
    $(".gnb").on("click", "button.menu", function(){
        $(this).toggleClass("showMenu");

        var line1 = $(this).find(".line1");
        var line2 = $(this).find(".line2");

        if($(this).hasClass("showMenu")){
            $("#menu").fadeIn();
            $("#menu .bg").css("transform","translateX(0)");
            $(".menu em").css("color","#fff");
            $(line1).css({
                "width":"38px",
                "top":"0",
                "left":"0",
                "transform":"rotate(45deg)",
                "background":"#fff",
            });
            $(line2).css({
                "width":"38px",
                "transform":"rotate(-45deg)",
                "top":"0",
                "background":"#fff",
            });
        }else{
            $("#menu").fadeOut();
            $("#menu .bg").css("transform","translateX(800px)");
            $(line1).css({
                "width":"26px",
                "top":"-6px",
                "left":"50%",
                "transform":"rotate(0deg) translateX(-50%)",
            });
            $(line2).css({
                "width":"40px",
                "transform":"rotate(0deg)",
                "top":"6px",
            });
            if(!$('#gnb').parent().hasClass("main")){
                $(".menu em").css("color","#131313");
                $(line1).css("background","#131313");
                $(line2).css("background","#131313");
            }
        }
    })

    //버튼 마우스오버 루프 함수
    function loop(){
        var show = 1,
            hide = 0;
        $(".btn-hover svg").each(function(){
            if($(this).css("opacity") == show){
                $(this).css("opacity", hide);
                //console.log(1)
            }else{
                $(this).css("opacity", show);
                //console.log(0)
            }
        })
    }

    //setInterval 설정
    var hoverTime;
    function startFun(){
        hoverTime = setInterval(() => {
            loop();
        }, 300);
    }
    function endFun(){
        clearInterval(hoverTime);
    }
    //more button
    $(".btn-more").mouseenter(function(){
        $(".btn-circle").css("opacity", 0);
        $(".btn-hover").css("opacity", 1);
        startFun();
    }).mouseleave(function(){
        endFun();
        $(".btn-circle").css("opacity", 1);
        $(".btn-hover").css("opacity", 0);
    })

});
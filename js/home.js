$(function(){
    $(".loading .sk-folding-cube").fadeOut(1000,function(){
        $(this).parent().fadeOut(1000,function(){
            $("body").css({"overflow":"auto"})
            $(this).remove()
        })
    var scrollButton = $(".scroll-up")
    $(window).scroll(function(){

        if($(this).scrollTop() >= 500){
            scrollButton.show(1000)
        }else{
            scrollButton.hide(1000)
        }
    })
    scrollButton.click(function(){
        $("html").animate({scrollTop:0},600)
    })


})})
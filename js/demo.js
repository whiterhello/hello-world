/**
 * Created by dell on 2017/4/14.
 */
$(function(){
    toolTop();
});
(function toolTop(){
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var iTop=true;
     $(window).scroll(function() {
             var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
             var scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
             var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
             if(!iTop){
                 clearInterval(timer);
             }
             iTop = false;
             $('#head').css({"width": "100%", "minWidth": "1200px", "top": "0", "left": "0", "zIndex": "800"});
             if (scrollTop < 120) {
                 $('#head').css({"position": "static"});
                 $('.web_logo img:first').attr("src", "img/logo_b.png");
                 $('.web_head_nav').css({"display": "none"});
             }
             else {
                 $('#head').css({"position": "fixed"});
                 $('.web_logo img:first').attr("src", "img/logo_a.png");
                 $('.web_head_nav').css({"display": "block"});
             }
             if (scrollWidth == $('#head').offsetWidth) {
                 $('#head').css({"left": -scrollLeft + 'px'});
             }

             if(scrollTop >= clientHeight/10){
                 $('.tool:first').css({"display":"block"});
             }else{
                 $('.tool:first').css({"display":"none"});
             }
             console.log(scrollTop)
         }
     );
    $('.tool i:first').click(function(){
        clearInterval(timer);
        timer = setInterval(function(){
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          var ispeed = Math.floor( -scrollTop/6 );
            document.documentElement.scrollTop = scrollTop + ispeed;
            document.body.scrollTop = scrollTop + ispeed;
            iTop = true;
            if (scrollTop == 0){
                clearInterval(timer);
            }
        },30);

    })
})()

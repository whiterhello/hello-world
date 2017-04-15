/**
 * Created by dell on 2017/2/24.
 */
//JQuery
$(function () {
    ImagePhoto();
    imgBig();
});
function ImagePhoto(){
    var i = 0;
    var size=$('#imcontent li').size();
    $('#imcontent').css('width','3800px');
    for (var a = 0; a < size; a++) {
        $('#banner #buttons').append('<span></span>');
    }
    $('#banner #buttons span').first().addClass('on');

    $('#banner #buttons span').hover(function(){
        var index = $(this).index();
        i = index;
        $('#imcontent').stop().animate({left:-index*760},500);
        $(this).addClass('on').siblings().removeClass('on');
      });

    //自动切换
    var t = setInterval(function(){
        i++;
        move();
    },3000);
    //定时器操作
    $('#banner').hover(function(){
      clearInterval(t);
    },function(){
        t = setInterval(function(){
            i++;
            move();
        },3000);
    });
    function move(){
        if (i == size) {
            i = 0;
        }
        if (i == -1) {
            i = size-1;
        }
        $('#imcontent').stop().animate({left:-i*760},500);
        $('#banner #buttons span').eq(i).addClass('on').siblings().removeClass('on');
    }
}

//顶部导航
function toolTop(){
     var iTool = document.getElementsByClassName('tool')[0];
     var firstTool = iTool.getElementsByTagName('i')[0];
     var clientHeight = document.documentElement.clientHeight;
     var timer = null;
     var iTop = true;
     window.onscroll = function () {
         var head = document.getElementById('head');
         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         var scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
         var oImg = head.getElementsByClassName('web_logo')[0].getElementsByTagName('img')[0];
         var oHeadNav = head.getElementsByClassName('web_head_nav')[0];
         if(!iTop){
         clearInterval(timer);
         }
         iTop = false;
         head.style.width = '100%';
         head.style.minWidth ='1200px';
         head.style.top = 0;
         head.style.left = 0;
         head.style.zIndex = 800;
         if(scrollTop<120){
             head.style.position = 'static';
             oImg.src = 'img/logo_b.png';
             oHeadNav.style.display='none';
         }else{
             head.style.position = 'fixed';
             oImg.src = 'img/logo_a.png';
             oHeadNav.style.display='block';
         }
         if(scrollWidth==head.offsetWidth){
             head.style.left = -scrollLeft +'px';
         }
         if(scrollTop >= clientHeight/10){
             iTool.style.display = 'block';
         }else{
             iTool.style.display = 'none';
         }

     };
     firstTool.onclick = function (){
       clearInterval(timer);
       timer = setInterval(function(){
           var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
           var ispeed = Math.floor( -scrollTop/6 );
           document.documentElement.scrollTop = scrollTop + ispeed;
           document.body.scrollTop = scrollTop + ispeed;
           iTop = true;
           if (scrollTop == 0){
                clearInterval(timer)
           }
       },30)
     }

}

//图片放大
function imgBig(){
     var imgNew = $('.news_img img');
     imgNew.hover(function(){
         var index = imgNew.index(this);
         imgNew.eq(index).css({"position":"relative"});
         imgNew.eq(index).stop().animate({
             width:"296px",
             height:"152px",
             top:"-9.5px",
             left:"-18px"
         },500)
     },function(){
         index = imgNew.index(this);
         imgNew.eq(index).css({"position":"relative"});
         imgNew.eq(index).stop().animate({
             width:"260px",
             height:"134px",
             top:"-.5px",
             left:"0"
         },500)
     })
}
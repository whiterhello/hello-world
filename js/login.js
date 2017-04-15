/**
 * Created by dell on 2017/4/10.
 */
$(function(){
    login_img();
});
function login_img(){
    var size = $('.bg1 img').size();
    var i =0;
    var timer;
    $('.bg1 img').first().css({"display":"block"});
    timer = setInterval(function(){
        i++;
        if(i == size){
            i = 0;
        }
        $('.bg1 img').eq(i).stop().fadeIn().siblings().fadeOut();
    },3000)
}

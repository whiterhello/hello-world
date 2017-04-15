/**
 * Created by dell on 2017/3/23.
 */
var index_sub_idx = $('.menuNav ul li >a.list-active');
var indexList;
indexList = $('#nav_ul .nav-list-a').index($('.nav-list-a.list-active'));
$(function(){
     nav();
});
var idx;
function nav(){
   if($('.menu-list').length>0){
      $('.nav-list-a').hover(function(){
         idx = $('.nav-list-a').index(this);
          if(idx>=1 && idx<=3 || idx==5 ||idx==7 ){
             $('.menu-list').show();
          }
          $('.nav-list-a').removeClass('list-active');
          $(this).addClass('list-active');
          $('.menu-ul div').hide();
          $('.menu-ul div').eq(idx).show();
      },function(){
          $('.menu-list').hide();
          $(this).removeClass('list-active');
          if(indexList = -1){
              $('#nav_ul li').find('.nav-list-a').eq(0).addClass('list-active');
          }
          //console.log(indexList);
      });
      $('.menu-ul div').hover(function(){
          $('.menu-list').show();
          $(this).show();
          $('#nav_ul .nav-list-a').removeClass('list-active');
          $('#nav_ul li').eq(idx).find('.nav-list-a').addClass('list-active');
          $('#nav_ul li').eq(idx).siblings().find('.nav-list-a').removeClass('list-active');
      },function(){
          $('.menu-list').hide();
          $('#nav_ul .nav-list-a').removeClass('list-active');
          if(indexList = -1){
              $('#nav_ul li').find('.nav-list-a').eq(0).addClass('list-active');
          }
      });
       $('.menuNav ul li >a').on('mouseover',function(){
           $('.menuNav ul li > a').removeClass('list-active');
           $(this).addClass('list-active');
       });
       $('.menuNav ul').on('mouseleave',function(){
           $('.menuNav ul li >a').removeClass('list-active');
           if(index_sub_idx.length > 0){
               index_sub_idx.addClass('list-active');
           }
       });
   }
}
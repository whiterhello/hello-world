/**
 * Created by dell on 2017/2/23.
 */
//window.onload=function(){
//    mouseHover('nav_ul','li','menuNav','menu-list')
//};
(function(){
    function mouseHover(parent,content,box,menulist){
        var oUl = document.getElementById(parent);
        var aLi = oUl.getElementsByTagName(content);
        var aMenuNav = document.getElementsByClassName(box);
        var aMenuList = document.getElementsByClassName(menulist)[0];
        var sList = 'list-active';
        for(var i = 0; i<aLi.length; i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function(){
                changeOptions(parent,content,this.index,sList);
                navUp(aMenuNav,this.index,aLi[this.index],aLi[0],sList,aMenuList);
            };
            aLi[i].onmouseout = function(){
                if(aLi[0].children[0].className == sList){
                    addClass(aLi[0].children[0],sList);
                }else{
                    removeClass(this.children[0],sList);
                }
                addClass(aLi[0].children[0],sList);
                navDown(aMenuNav,this.index,aMenuList);
            };
        }
    }
    window.mouseHover = mouseHover;
}());
function hasClass( elements,cName ){
    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
}
function addClass( elements,cName ){
    if( !hasClass( elements,cName ) ){
        elements.className += " " + cName;
    }
}
function removeClass( elements,cName ){
    if( hasClass( elements,cName ) ){
        elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换
    }
}
function changeOptions(parent,content,curIndex,sList){
    var oUl = document.getElementById(parent);
    var aLi = oUl.getElementsByTagName(content);
    for(var j = 0; j<aLi.length; j++){
        //aLi[j].children[0].className='';
        removeClass(aLi[j].children[0],sList)
    }
    addClass(aLi[curIndex].children[0],sList)
}
function navUp(aMenuNav,n_index,index,aLi,sList,aMenuList){

    for(var j =0; j<aMenuNav.length; j++){
        aMenuNav[j].style.display='none';
    }
    if(aMenuNav[n_index].children[0]){
        aMenuNav[n_index].style.display='block';
        aMenuList.style.display = 'block';
        addClass(index.children[0],sList)
    }else{
        aMenuNav[n_index].style.display='none';
    }
    aMenuNav[n_index].onmouseover=function(){
        aMenuNav[n_index].style.display='block';
        aMenuList.style.display = 'block';
        addClass(index.children[0],sList);
        removeClass(aLi.children[0],sList);
    };
    aMenuNav[n_index].onmouseout=function(){
        aMenuNav[n_index].style.display='none';
        aMenuList.style.display = 'none';
        addClass(aLi.children[0],sList);
        removeClass(index.children[0],sList)
    }
}
function navDown(aMenuNav,n_index,aMenuList){
        aMenuNav[n_index].style.display='none';
        aMenuList.style.display = 'none';
}
//


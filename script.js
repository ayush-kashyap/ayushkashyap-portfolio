document.getElementById("navi-bar").addEventListener("click", show);
var nav=document.getElementById("navigation");
function show(){
        nav.style.width="100%";
        document.getElementById("close-nav").style.display="block";
}
function hide(){
        nav.style.width="0%";
        document.getElementById("close-nav").style.display="none";
}
window.onscroll = function() {scrollChk()};
function scrollChk() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("scroll").style.display="block";
    }else{
        document.getElementById("scroll").style.display="none";
    }
}
function Top(){
    document.body.scrollTop = 0 ;
    document.documentElement.scrollTop = 0 ;
}
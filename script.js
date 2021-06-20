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
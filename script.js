document.getElementById("navi-bar").addEventListener("click", show);
function show(){
    var nav=document.getElementById("navigation");
    if(nav.style.display=="none"){
        nav.style.display="flex";
        document.getElementById("nav").style.borderRadius= "0px 30px 0px 0px";
        document.getElementById("navi-bar").innerHTML='<i class="fa fa-times"></i>';
    }else{
        nav.style.display="none";
        document.getElementById("navi-bar").innerHTML='<i class="fa fa-bars"></i>';
        document.getElementById("nav").style.borderRadius= "0px 30px 30px 0px";
    }
    
}
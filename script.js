document.getElementById("navi-bar").addEventListener("click", show);
function show(){
    var nav=document.getElementById("navigation");
    if(nav.style.display=="none"){
        nav.style.display="flex";
        
        document.getElementById("navi-bar").innerHTML='<i class="fa fa-times"></i>';
    }else{
        nav.style.display="none"
        document.getElementById("navi-bar").innerHTML='<i class="fa fa-bars"></i>';
        
    }
    
}
// function arr(){
//     document.getElementById("arr").classList.add("fa-angle-double-right");
// }
// function arrstp(){
//     document.getElementById("arr").classList.remove("fa-angle-double-right");
// }
var inv =  document.getElementById("inv");
var oto =  document.getElementById("oto");
var pri =  document.getElementById("pri");
var ver =  document.getElementById("ver");

var btnCerrar = document.getElementById("btn-cerrar");

inv.addEventListener("click",function(){
   inv.style.width="100vw";
   oto.style.width="0";
   pri.style.width="0";
   ver.style.width="0";
   btnCerrar.style.transform="scale(1,1)";
});

oto.addEventListener("click",function(){
   oto.style.width="100vw";
   inv.style.width="0";
   pri.style.width="0";
   ver.style.width="0";
   btnCerrar.style.transform="scale(1,1)";
});

pri.addEventListener("click",function(){
   pri.style.width="100vw";
   oto.style.width="0";
   inv.style.width="0";
   ver.style.width="0";
   btnCerrar.style.transform="scale(1,1)";
});

ver.addEventListener("click",function(){
   ver.style.width="100vw";
   oto.style.width="0";
   pri.style.width="0";
   inv.style.width="0";
   btnCerrar.style.transform="scale(1,1)";
});

btnCerrar.addEventListener("click",function(){
    console.log("btn cerrar inv");
    inv.style.width="25vw";
    oto.style.width="25vw";
    pri.style.width="25vw";
    ver.style.width="25vw";
    btnCerrar.style.transform="scale(0,0)";
});
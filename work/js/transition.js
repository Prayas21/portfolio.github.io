const canavs=document.getElementById("transition")
const ctx_trans=canavs.getContext("2d")
back=document.getElementById("back")
canavs.height=window.innerHeight-10
canavs.width=window.innerWidth-20

W_trans=new circle(0,0,2000,ctx_trans)
out=false
function mathi_tala(){
    ctx_trans.clearRect(0,0,canavs.width,canavs.height)
    eta_uta()
    hya()
    Paxadi()
    requestAnimationFrame(mathi_tala)
}
mathi_tala() 

function hya(){
    W_trans.golo()
    W_trans.in()
}
function Paxadi(){
    if(W_trans.r==0){
        back.style.zIndex = "3"
    }
    else{
        back.style.zIndex = "0"
    }
}
back.onclick=()=>{
    out=true
}
function eta_uta(){
     if(out){
        W_trans.out()
        W_trans.golo()
        setTimeout(a, 2000)
    }else{
        W_trans.in()
        W_trans.golo()
}
}


function a()
{
window.location.href = "index.html"
}


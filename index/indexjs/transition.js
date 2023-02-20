
const canvas_trans=document.getElementById("canvas_trans")
const ctx_trans=canvas_trans.getContext("2d")
cool=document.getElementById("cool")
canvas_trans.height=window.innerHeight-10
canvas_trans.width=window.innerWidth-10
out=false
trans=new circle(0,0,2500,ctx_trans)

function Transition(){
    ctx_trans.clearRect(0,0,canvas_trans.width,canvas_trans.height)
    Work()
    trans_circle()
    coolAF()
    requestAnimationFrame(Transition)
}
Transition()
function Work(){
if(work){
    if(enter){
        out=true
        setTimeout(a, 2000)
        }
    };
    
    if(life){
        if(enter){
            out=true
            setTimeout(b, 2000)
            }
        };

    if(more_life){
        // if(enter){
        out=true
        setTimeout(window.location.href = "final.html", 2000)}
     ;
    
}
function a()
{
    window.location.href = "work.html"
}
function b()
{
    window.location.href = "room.html"
}
function c()
{

    console.log("HEHEH")
}
function trans_circle(){
    if(out){
        trans.out()
        trans.golo()
    }else{
    trans.in()
    trans.golo()
}
    
}
function coolAF(){
    if(trans.r==0){
        cool.style.zIndex = "3"
    }
    else{
        cool.style.zIndex = "0"
    }
}
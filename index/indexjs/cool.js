const canvas3=document.getElementById("canvas3")
const ctx3=canvas3.getContext("2d")

canvas3.height=window.innerHeight-20
canvas3.width=window.innerWidth-20

cool=document.getElementById("cool")

cool.onmouseover=()=>{
    cool.innerText="NERD"
}

cool_Arry=[]
mouse={
    x:undefined,
    y:undefined
}
document.addEventListener("mousemove",function(e){
    mouse.x=e.x
    mouse.y=e.y
    for(i=0;i<5;i++){
    cool_Arry.push(new CoolClass(ctx3,1))
    }
    
})  

function Animate(){
    ctx3.clearRect(0,0,canvas3.width,canvas3.height)
    for(i=0;i<cool_Arry.length;i++){
        if(cool_Arry[i].r>0){
            cool_Arry[i].Circle()
            cool_Arry[i].Move()}
        }

    

requestAnimationFrame(Animate)
}
Animate()
class CoolClass{
    constructor(ctx,t){
        this.x=mouse.x
        this.y=mouse.y
        this.r=Math.random() *15;
        this.ctx=ctx
        this.t=t
        this.color="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +","+this.t+ ")"
        this.random=Math.random()*(1 +1) -1;
        this.velocity={
            x:Math.random()*4 *this.random,
            y:Math.random()*4 *this.random
        }
    }

    Circle(){
        this.ctx.beginPath()
        this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false)
        this.ctx.fillStyle=this.color
        this.ctx.fill()
        this.ctx.closePath()
    }
    Move(){
        this.x+=this.velocity.x
        this.y+=this.velocity.y
        if(this.r>0){
        this.r-=0.5}
        else{
            r=0
        }
    }


}

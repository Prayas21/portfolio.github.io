const BG_canvas=document.getElementById("BG_canvas")
const BG_ctx=BG_canvas.getContext("2d")

BG_canvas.height=window.innerHeight-10
BG_canvas.width=window.innerWidth-10

sprinkels_magic=[]
for(i=0;i<=100;i++){
    sprinkels_magic.push(new sprinkels(BG_canvas.width,BG_canvas.height,BG_ctx,0.1,true))
}

function ANimate(){
    BG_ctx.clearRect(0,0,BG_canvas.width,BG_canvas.height)
    for(k=0;k<=40;k++){
        sprinkels_magic[k].circle()
        sprinkels_magic[k].move()
    }
    requestAnimationFrame(ANimate)
}
ANimate()
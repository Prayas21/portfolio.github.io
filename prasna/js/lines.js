const BG_canvas=document.getElementById("BG_canvas")
const BG_ctx=BG_canvas.getContext("2d")

BG_canvas.height=window.innerHeight-10
BG_canvas.width=window.innerWidth-200

line=[]
for(i=0;i<=40;i++){
    line.push(new lines (i*100,i*1,BG_canvas.width,BG_canvas.height,BG_ctx))
}

function ANimate(){
   BG_ctx.clearRect(0,0,BG_canvas.width,BG_canvas.height)
    for(k=0;k<=40;k++){
        line[k].sideways()
        line[k].move()
        
    }
    requestAnimationFrame(ANimate)
}
ANimate()
console.log(line)
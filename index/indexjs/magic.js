/** @type {HTMLCanvasElement} */

const canvas2=document.getElementById("canvas2")
const ctx2=canvas2.getContext("2d")

canvas2.height=window.innerHeight-10
canvas2.width=window.innerWidth-10

sprinkels_magic=[]
for(i=0;i<=100;i++){
    sprinkels_magic.push(new sprinkels(canvas2.width,canvas2.height,ctx2,0.1,false))
}

function ANimate(){
    ctx2.clearRect(0,0,canvas2.width,canvas2.height)
    for(j=0;j<=40;j++){
        sprinkels_magic[j].circle()
        sprinkels_magic[j].move()
    }
    requestAnimationFrame(ANimate)
}
ANimate()
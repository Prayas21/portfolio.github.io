
class lines{
    constructor(x,y,cw,ch,ctx){
        this.x=x
        this.y=y
        this.ctx=ctx
        this.cw=cw
        this.ch=ch
        this.s=0
        this.color="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +","+1+ ")"
    }

    sideways(){
        this.ctx.beginPath()
        this.ctx.moveTo(0, this.x);
        this.ctx.lineTo(this.y, 0)
        this.ctx.stroke()
        this.ctx.lineWidth=Math.random()*3
        this.ctx.strokeStyle = this.color
        this.ctx.closePath()
    }
    move(){
        this.s+=0.1
        this.ctx.lineWidth=Math.random()*3
        this.x+=Math.sin(this.y)*30;
        this.y+=this.s;
        if(this.x>this.cw && this.y>this.ch){
            this.x=0
            this.y=this.x-100
            this.s=0
            this.color="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +","+1+ ")"
        }
        
    }

}
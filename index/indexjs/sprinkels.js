class sprinkels{
    constructor(cw,ch,ctx,t,m){
        this.cw=cw
        this.ch=ch
        this.x=Math.random() * (this.cw - 0) + 0;
        this.y=Math.random() * (this.ch - 0) + 0;
        this.r=Math.random() *(15 - 5) + 5;
        this.ctx=ctx
        this.m=m
        this.t=t
        this.color="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +","+this.t+ ")"
        this.random=Math.random()*(1 +1) -1;
        this.velocity={
            x:Math.random()*4 *this.random,
            y:Math.random()*4 *this.random
        }
        this.ghumniratio=10
        this.surukoangle=0
    }
    circle(){
        this.ctx.beginPath()
        this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false)
        this.ctx.fillStyle=this.color
        this.ctx.fill()
        this.ctx.closePath()
    }
    
    move(){
        if(this.m){
        this.x+=this.velocity.x
        this.y+=this.velocity.y}
        this.r-=0.2
        if(this.r<=0){
            this.r=Math.random() *(15 - 5) + 5;
            this.color="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +","+this.t+ ")"
            this.x=Math.random() * (this.cw - 0) + 0;
            this.y=Math.random() * (this.ch - 0) + 0;
        }
    }

    gogo(){
        this.x+=Math.cos(this.surukoangle)*this.ghumniratio
        this.y+=Math.sin(this.surukoangle)*this.ghumniratio
        this.surukoangle++;
    }



}
